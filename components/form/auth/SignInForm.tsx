"use client";
import React from "react";
import CustomForm from "@/components/form/CustomForm";

import loginSchema from "@/lib/schema/auth/loginSchema";
import { loginCredentials } from "@/lib/config";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";

const defaultValues = {
  email: loginCredentials.email,
  password: loginCredentials.password,
};

const SignInForm = () => {
  const { login } = useAuthContext();
  const { toast } = useToast();
  const router = useRouter();
  const onSubmit = async (values: typeof defaultValues) => {
    try {
      const res = await login(values.email, values.password);
      console.log(res);
      toast({
        title: "Successfully logged in",
        variant: "success",
        duration: 3000,
      });
      router.push("/");
    } catch (error) {
      toast({
        title: "Invalid credentials",
        variant: "destructive",
        duration: 3000,
      });
    }
  };
  return (
    <CustomForm
      defaultValues={defaultValues}
      fields={[
        { name: "email", label: "Email" },
        { name: "password", label: "Password", type: "password" },
      ]}
      schema={loginSchema}
      cardWrapperProps={{
        title: "Sign In",
      }}
      onSubmit={onSubmit}
    />
  );
};

export default SignInForm;
