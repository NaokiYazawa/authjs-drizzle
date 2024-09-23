import { Suspense } from "react";
import { Paytone_One } from "next/font/google";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { UserProfile } from "@/components/auth/user-profile";
import { ThemeToggle } from "@/components/theme-toggle";

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });

export const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between py-6">
      <Link href="/" className={`${paytoneOne.className} text-3xl`}>
        Authjs + Drizzle
      </Link>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Suspense fallback={<Icons.Loader2 size="xl" />}>
          <UserProfile />
        </Suspense>
      </div>
    </header>
  );
};
