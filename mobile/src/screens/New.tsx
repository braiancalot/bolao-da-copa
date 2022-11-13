import React from "react";
import { Heading, VStack } from "native-base";
import { Header } from "../components/Header";
import Logo from "../assets/logo.svg"
import { Input } from "../components/Input";

export function New() {
  return (
    <VStack flex={1} background="gray.900">
      <Header title="Criar novo bolão" />

      <VStack mx={5} mt={8} alignItems="center">
        <Logo />

        <Heading color="white" mt={8} fontFamily="heading" fontSize="2xl">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </Heading>

        <Input placeholder="Qual o nome do seu bolão?" />
      </VStack>
    </VStack>
  )
}