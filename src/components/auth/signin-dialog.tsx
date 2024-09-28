"use client";

import React from "react";
import { type BuiltInProviderType } from "next-auth/providers/index";
import { signIn, type LiteralUnion } from "next-auth/react";
import { useTheme } from "next-themes";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { OAuthProviderButton } from "./oauth-provider-button";

export const SigninDialog = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  const [signinProvider, setSigninProvider] =
    React.useState<LiteralUnion<BuiltInProviderType>>();

  const handleSignin = async (provider: LiteralUnion<BuiltInProviderType>) => {
    setSigninProvider(provider);
    await signIn(provider);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[22rem] sm:max-w-sm">
        <DialogHeader className="space-y-4">
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>
            新規登録、ログインのどちらも以下のリンクから行うことができます。
          </DialogDescription>
        </DialogHeader>
        <OAuthProviderButton
          provider="google"
          providerName="Google"
          isLoading={signinProvider === "google"}
          handleSignin={handleSignin}
          variant={theme === "dark" ? "default" : "secondary"}
        />
      </DialogContent>
    </Dialog>
  );
};
