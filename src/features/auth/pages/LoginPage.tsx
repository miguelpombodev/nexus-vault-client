import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { httpClient } from "@/shared/api/httpClient";
import { Button } from "@/shared/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";

import { useAuthStore } from "../store/auth.store";

type LoginFormData = {
  email: string;
  password: string;
};

export function LoginPage() {
  const { register, handleSubmit, formState } = useForm<LoginFormData>();
  const { setTokens } = useAuthStore();
  const navigate = useNavigate();

  async function onSubmit(data: LoginFormData) {
    try {
      const response = await httpClient.post("/auth/login", data);

      const { accessToken, refreshToken } = response.data;

      setTokens(accessToken, refreshToken);
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Login error", error);
    }
  }

  return (
    <div className="flex w-full">
      <img
        className="min-h-screen w-1/2 border-r-2 border-white"
        src="https://images.pexels.com/photos/5474023/pexels-photo-5474023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="man-with-green-letter-symbol-of-data"
        srcSet="https://images.pexels.com/photos/5474023/pexels-photo-5474023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/5474023/pexels-photo-5474023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
      />
      <div className="flex w-full min-h-screen items-center justify-center">
        <div className="rounded-lg bg-card justify-start m-5 p-10 shadow-lg md:m-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FieldGroup>
              <FieldSet>
                <FieldLegend>Sign In</FieldLegend>
                <FieldDescription>
                  Keep now your files and secrets safer than they are!
                </FieldDescription>

                <FieldSeparator />
                <FieldGroup>
                  <Field className="gap-2">
                    <FieldLabel htmlFor="email-login-form">Email</FieldLabel>
                    <Input
                      id="email-login-form"
                      placeholder="Type your email"
                      {...register("email")}
                      required
                    />
                  </Field>
                  <Field className="gap-2">
                    <FieldLabel htmlFor="password-login-form">
                      Password
                    </FieldLabel>
                    <Input
                      id="password-login-form"
                      placeholder="Type your password"
                      type="password"
                      {...register("password")}
                      required
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
              <Field orientation="horizontal">
                <Button type="submit" disabled={formState.isSubmitting}>
                  {formState.isSubmitting && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Login
                </Button>
                <Button type="reset" variant="destructive">
                  Reset
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </div>
    </div>
  );
}
