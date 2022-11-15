import React from "react";
import { Icon, VStack } from "native-base";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Octicons } from "@expo/vector-icons"

export function Pools() {
  return <VStack flex={1} bgColor="gray.900">
    <Header title="Meus bolões" />
    <VStack mx={5} mt={6}>
      <Button title="BUSCAR BOLÃO POR CÓDIGO" startIcon={<Icon as={Octicons} name="search" color="black" size="md" />} />
    </VStack>
  </VStack>
}