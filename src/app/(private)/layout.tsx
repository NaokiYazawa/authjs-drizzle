import { Header } from "@/components/layout/header";
import { ReactNode } from "react";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen">
      <Header />
      {children}
    </div>
  );
}
