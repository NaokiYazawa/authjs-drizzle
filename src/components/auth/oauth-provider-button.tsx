import * as React from "react";
import { type BuiltInProviderType } from "next-auth/providers/index";
import { type LiteralUnion } from "next-auth/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icons, iconVariants, type Icon } from "@/components/icons";

const OAuthProviderButton = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button"> & {
    provider: LiteralUnion<BuiltInProviderType>; // BuiltInProviderType の OAuthProviderType は github や google 等がある
    providerName: string;
    handleSignin: (provider: LiteralUnion<BuiltInProviderType>) => void;
    variant?:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | "link";
    isLoading: boolean;
  }
>(
  (
    {
      variant,
      provider,
      providerName,
      isLoading,
      handleSignin,
      className,
      ...props
    },
    ref
  ) => {
    const ProviderIcon = Icons[provider as keyof typeof Icons] as Icon;
    return (
      <Button
        className={cn(className)}
        onClick={() => handleSignin(provider)}
        variant={variant}
        disabled={isLoading}
        ref={ref}
        {...props}
      >
        {!isLoading && (
          <ProviderIcon className={iconVariants({ className: "mr-2" })} />
        )}
        {isLoading
          ? `${providerName} のログイン画面に移動中...`
          : `${providerName} でログイン`}
      </Button>
    );
  }
);
OAuthProviderButton.displayName = "OAuthProviderButton";

export { OAuthProviderButton };
