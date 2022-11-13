import React, { createContext, ReactNode, useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google"
import * as AuthSession from "expo-auth-session"
import * as WebBrowser from "expo-web-browser"

WebBrowser.maybeCompleteAuthSession();

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  isUserLoading: boolean;
  signIn: () => Promise<void>;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [isUserLoading, setIsUserLoading] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "674571415432-2fmp7i7rt921s2pcrl200utshu5rrbja.apps.googleusercontent.com",
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ["profile", "email"]
  });

  async function signIn() {
    try {
      setIsUserLoading(true);
      await promptAsync();

    } catch (err) {
      console.log(err);
      throw err;

    } finally {
      setIsUserLoading(false);
    }
  }

  async function singInWithGoogle(access_token: string) {
    console.log("Token de autenticação ==>", access_token);
  }

  useEffect(() => {
    if (response?.type === "success" && response.authentication?.accessToken) {
      singInWithGoogle(response.authentication.accessToken);
    }
  }, [response])

  return (
    <AuthContext.Provider value={{
      signIn,
      isUserLoading,
      user
    }}>
      {children}
    </AuthContext.Provider>
  )
}