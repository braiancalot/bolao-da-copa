import React from "react";
import { Heading, VStack } from "native-base";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Find() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Buscar por código" showBackButton />

      <VStack mx={5} mt={8} alignItems="center">
        <Heading color="white" fontFamily="heading" fontSize="xl" textAlign="center">
          Encontre um bolão através de seu código único
        </Heading>

        <Input placeholder="Qual o código do bolão?" mt={8} />

        <Button title="Buscar bolão" mt={2} />
      </VStack>
    </VStack>
  )
}