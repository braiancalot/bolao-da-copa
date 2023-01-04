import React, { useState } from "react";
import { Heading, useToast, VStack } from "native-base";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { api } from "../services/api";

export function Find() {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState("");
  const toast = useToast();
  const { navigate } = useNavigation();

  async function handleJoinPool() {
    try {
      setIsLoading(true);

      if (!code.trim()) {
        return toast.show({
          title: "Informe o código.",
          placement: "top",
          bgColor: "red.500"
        });
      }

      await api.post("/pools/join", { code });

      toast.show({
        title: "Você entrou no bolão com sucesso!",
        placement: "top",
        bgColor: "green.500"
      });

      setCode("");
      setIsLoading(false);
      navigate("pools");

    } catch (error) {
      console.log(error);
      setIsLoading(false);

      if (error.response?.data?.message === "Pool not found.") {
        return toast.show({
          title: "Bolão não encontrado.",
          placement: "top",
          bgColor: "red.500"
        });
      }

      if (error.response?.data?.message === "You already joined this pool.") {
        return toast.show({
          title: "Você já está nesse bolão.",
          placement: "top",
          bgColor: "red.500"
        });
      }

      toast.show({
        title: "Não foi possível encontrar o bolão.",
        placement: "top",
        bgColor: "red.500"
      });
    }
  }

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Buscar por código" showBackButton />

      <VStack mx={5} mt={8} alignItems="center">
        <Heading color="white" fontFamily="heading" fontSize="xl" textAlign="center">
          Encontre um bolão através de seu código único
        </Heading>

        <Input
          placeholder="Qual o código do bolão?"
          mt={8}
          autoCapitalize="characters"
          value={code}
          onChangeText={setCode} />

        <Button
          title="Buscar bolão"
          isLoading={isLoading}
          onPress={handleJoinPool}
          mt={2} />
      </VStack>
    </VStack>
  )
}