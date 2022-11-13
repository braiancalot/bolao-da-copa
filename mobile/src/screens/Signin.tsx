import React from "react";
import { Center, Icon, Text } from "native-base";
import { Button } from "../components/Button";
import Logo from "../assets/logo.svg"
import { Fontisto } from "@expo/vector-icons"
import { useAuth } from "../hooks/userAuth";

export function Signin() {
  const { user, signIn } = useAuth();

  return (
    <Center flex={1} background="gray.900" padding={7}>
      <Logo width={212} height={40} />

      <Button
        title="ENTRAR COM GOOGLE"
        type="SECONDARY"
        startIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        marginTop={12}
        onPress={signIn}
      />

      <Text
        color="gray.200"
        textAlign="center"
        marginTop={4}
      >
        Não utilizamos nenhuma informação além {"\n"} do seu e-mail para criação de sua conta.
      </Text>
    </Center>
  )
}