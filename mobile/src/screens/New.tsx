import React, { useState } from "react";
import { api } from "../services/api"
import { Heading, Text, VStack, useToast } from "native-base";
import { Header } from "../components/Header";
import Logo from "../assets/logo.svg"
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function New() {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  async function handleCreatePool() {
    if (!title.trim()) {
      return toast.show({
        title: "Informe um nome para o seu bolão",
        placement: "top",
        bgColor: "red.500"
      });
    }

    try {
      setIsLoading(true);

      await api.post("pools", { title });

      toast.show({
        title: "Bolão criado com sucesso",
        placement: "top",
        bgColor: "green.500"
      });

      setTitle("");

    } catch (err) {
      console.log(err)

      toast.show({
        title: "Não foi possível criar o bolão",
        placement: "top",
        bgColor: "red.500"
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Criar novo bolão" />

      <VStack mx={5} mt={8} alignItems="center">
        <Logo />

        <Heading color="white" mt={8} fontFamily="heading" fontSize="xl" textAlign="center">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </Heading>

        <Input
          placeholder="Qual o nome do seu bolão?"
          mt={8}
          value={title}
          onChangeText={setTitle}
        />

        <Button
          title="Criar meu bolão"
          mt={2}
          onPress={handleCreatePool}
          isLoading={isLoading} />

        <Text color="gray.200" textAlign="center" mt={4} fontSize="sm" px={10}>
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas.
        </Text>
      </VStack>
    </VStack>
  )
}