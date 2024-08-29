import Input from "@/components/atom/input";
import LottieBlood from "@/components/atom/lottieBlood";
import LoginTemplate from "@/components/templates/loginTemplate";
import { useKeyboardContext } from "@/context/KeyboardContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { z } from "zod";

export default function RegisterScreen() {
  const [step, setStep] = useState<number>(1);
  const userLoginSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    blood_type: z.string(),
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

  const OnStep1 = () => {
    console.log("step1");
  };

  const OnStep2 = () => {
    console.log("step2");
  };

  const { isKeyboardVisible } = useKeyboardContext();

  useEffect(() => {
    step1.map((item) => register(item.name as any));
    register("blood_type");
  }, [register]);
  return (
    <LoginTemplate>
      <View
        style={[styles.containerForm, isKeyboardVisible ? { height: 380 } : {}]}
      >
        <LottieBlood />
        {step === 1 ? (
          <>
            {step1.map((item) => (
              <Input
                key={item.id}
                placeholder={item.placeholder}
                onChangeText={(text) => setValue(item.name as any, text)}
                error={errors[item.name as keyof userLogin]?.message}
              />
            ))}
          </>
        ) : (
          step2.map((item) => (
            <Input
              key={item.id}
              placeholder={item.placeholder}
              onChangeText={(text) => setValue(item.name as any, text)}
              error={errors[item.name as keyof userLogin]?.message}
            />
          ))
        )}
        <Pressable
          style={styles.loginButton}
          onPress={handleSubmit(step === 1 ? OnStep1 : OnStep2)}
        >
          <Text style={styles.loginButtonText}>
            {step === 1 ? "Continuar" : "Cadastrar"}
          </Text>
        </Pressable>
        <Link href="/login" style={styles.signIn}>
          Sing In
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
    height: 600,
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
  signIn: {
    paddingTop: 10,
    color: "gray",
  },
});

const step1 = [
  {
    id: 1,
    placeholder: "e-mail",
    name: "email",
  },
  {
    id: 2,
    placeholder: "senha",
    name: "password",
  },
  {
    id: 3,
    placeholder: "confirmar senha",
    name: "confirm_password",
  },
  {
    id: 4,
    placeholder: "nome",
    name: "name",
  },
];

const step2 = [
  {
    id: 1,
    placeholder: "rua",
    name: "street",
  },
  {
    id: 2,
    placeholder: "numero",
    name: "number",
  },
  {
    id: 3,
    placeholder: "bairro",
    name: "district",
  },
  {
    id: 4,
    placeholder: "estado",
    name: "state",
  },
  {
    id: 5,
    placeholder: "cep",
    name: "postalCode",
  },
];
