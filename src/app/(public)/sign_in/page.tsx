"use client";

import React from "react";
import { type BuiltInProviderType } from "next-auth/providers/index";
import { signIn, type LiteralUnion } from "next-auth/react";
import { OAuthProviderButton } from "@/components/auth/oauth-provider-button";

export default function Page() {
  const [signinProvider, setSigninProvider] =
    React.useState<LiteralUnion<BuiltInProviderType>>();

  const handleSignin = async (provider: LiteralUnion<BuiltInProviderType>) => {
    setSigninProvider(provider);
    await signIn(provider, { callbackUrl: "/profile" });
  };

  return (
    <main className="h-screen flex items-center justify-center px-4">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
          <p className="text-sm text-muted-foreground">
            新規登録、ログインのどちらも以下のリンクから行うことができます。
          </p>
        </div>
        <OAuthProviderButton
          provider="google"
          providerName="Google"
          isLoading={signinProvider === "google"}
          handleSignin={handleSignin}
        />
      </div>
    </main>
  );
}
