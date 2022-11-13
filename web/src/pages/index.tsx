import { FormEvent, useState } from "react"

import Image from "next/image"
import { api } from "../lib/axios"

import appPreviewImg from "../assets/app-preview.png"
import usersAvatarsImg from "../assets/users-avatars-example.png"
import logoImg from "../assets/logo.svg"
import checkImg from "../assets/check-icon.svg"

interface HomeProps {
  poolsCount: number;
  guessesCount: number;
  usersCount: number;
}

export default function Home(props: HomeProps) {
  const [poolTitle, setPoolTitle] = useState("");

  async function createPool(event: FormEvent) {
    event.preventDefault()

    try {
      const { data } = await api.post("/pools", {
        title: poolTitle
      })

      await navigator.clipboard.writeText(data.code);

      alert("O bolão foi criado com sucesso! O código foi copiado para a área de transferência.")

      setPoolTitle("")

    } catch (err) {
      console.log(err);

      alert("Falha ao criar o bolão.")
    }
  }

  return (
    <div className="max-w-[1124px] h-screen grid grid-cols-2 items-center mx-auto gap-28">
      <main className="">
        <Image
          src={logoImg}
          alt="NLW Copa"
        />

        <h1 className="mt-14 font-bold text-white text-5xl leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flex gap-2 items-center">
          <Image
            src={usersAvatarsImg}
            alt=""
          />
          <strong className="text-gray-100 font-bold">
            <span className="text-green-500 font-bold">+{props.usersCount}</span> pessoas já estão usando
          </strong>
        </div>

        <form
          onSubmit={createPool}
          className="mt-10 flex gap-2">
          <input
            className="flex-1 bg-gray-800 border border-gray-700 px-6 py-4 rounded text-sm text-gray-200"
            type="text"
            placeholder="Qual nome do seu bolão?"
            value={poolTitle}
            onChange={(event) => { setPoolTitle(event.target.value) }}
          />
          <button className="bg-yellow-500 hover:bg-yellow-700 rounded px-6 py-4 text-gray-900 uppercase font-bold text-sm">
            Criar meu bolão
          </button>
        </form>

        <p className="mt-4 text-gray-300 leading-6 text-sm">
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀
        </p>

        <div className="mt-10 pt-10 border-t border-gray-700 flex justify-between">
          <div className="flex gap-6 items-center">
            <Image
              src={checkImg}
              alt=""
            />
            <div className="flex flex-col">
              <span className="text-2xl text-gray-100 font-bold">+{props.poolsCount}</span>
              <span className="text-gray-100">Bolões criados</span>
            </div>
          </div>

          <div className="border-r border-gray-700" />

          <div className="flex gap-6 items-center">
            <Image
              src={checkImg}
              alt=""
            />
            <div className="flex flex-col gap">
              <span className="text-2xl text-gray-100 font-bold">+{props.guessesCount}</span>
              <span className="text-gray-100">Palpites enviados</span>
            </div>
          </div>
        </div>

      </main>

      <Image
        src={appPreviewImg}
        alt="Dois celulares exibindo uma prévia da versão mobile da aplicação"
        quality={100}
      />

    </div>
  )
}

export const getStaticProps = async () => {
  const [
    poolCountResponse,
    guessCountResponse,
    usersCountResponse
  ] = await Promise.all([
    api.get("/pools/count"),
    api.get("/guesses/count"),
    api.get("/users/count")
  ])

  return {
    props: {
      poolsCount: poolCountResponse.data.count,
      guessesCount: guessCountResponse.data.count,
      usersCount: usersCountResponse.data.count
    },
    revalidate: 60,
  }
}
