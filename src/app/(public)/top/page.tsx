import { env } from "@/env";

export default function Page() {
  return <main className="mx-auto max-w-5xl px-4">home {env.NODE_ENV}</main>;
}
