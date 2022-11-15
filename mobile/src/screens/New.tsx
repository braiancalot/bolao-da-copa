import React from "react";
import { Heading, Text, VStack } from "native-base";
import { Header } from "../components/Header";
import Logo from "../assets/logo.svg"
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function New() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Buscar por código" showBackButton />

      <VStack mx={5} mt={8} alignItems="center">
        <Logo />

        <Heading color="white" mt={8} fontFamily="heading" fontSize="xl" textAlign="center">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </Heading>

        <Input placeholder="Qual o nome do seu bolão?" mt={8} />

        <Button title="Criar meu bolão" mt={2} />

        <Text color="gray.200" textAlign="center" mt={4} fontSize="sm" px={10}>
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas.
        </Text>
      </VStack>
    </VStack>
  )
}