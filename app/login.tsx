import { useKeyboardContext } from "@/context/KeyboardContext";
import React, { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import Input from "@/components/atom/input";
import LottieBlood from "@/components/atom/lottieBlood";
import LoginTemplate from "@/components/templates/loginTemplate";
import { useAuthStore } from "@/store/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function LoginScreen() {
  const userLoginSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
  });
  type userLogin = z.infer<typeof userLoginSchema>;

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<userLogin>({
    resolver: zodResolver(userLoginSchema),
  });

  const { login } = useAuthStore();

  const { isKeyboardVisible } = useKeyboardContext();

  const loginSubmit = (data: userLogin) => {};

  useEffect(() => {
    register("email");
    register("password");
  }, [register]);

  return (
    <LoginTemplate>
      <View
        style={[styles.containerForm, isKeyboardVisible ? { height: 380 } : {}]}
      >
        <LottieBlood />
        <Input
          placeholder="e-mail"
          onChangeText={(text) => setValue("email", text)}
          error={errors?.email?.message}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setValue("password", text)}
          error={errors?.password?.message}
        />
        <Pressable
          style={styles.loginButton}
          onPress={handleSubmit(loginSubmit)}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
        <Link href="/register" style={styles.signUp}>
          Sign Up
        </Link>
      </View>
    </LoginTemplate>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 200,
    height: 150,
  },
  containerForm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    width: "90%",
    height: 400,
    gap: 20,
  },
  loginButton: {
    backgroundColor: "#8B0000",
    height: 35,
    width: "90%",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  signUp: {
    paddingTop: 20,
    color: "gray",
  },
});
