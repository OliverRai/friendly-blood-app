import { useAuthStore } from "@/store/auth";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function AuthLayout() {

  const { token } = useAuthStore();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState<boolean>(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted ) {
      if(!token) {
        router.replace("/login");
      } else {
        setIsCheckingAuth(false);
      }
      SplashScreen.hideAsync();
    }
  }, [isMounted, token]);

  if (isCheckingAuth) {
    // Enquanto verifica o token, evita renderizar qualquer coisa
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
