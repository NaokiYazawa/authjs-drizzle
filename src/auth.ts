import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth, { DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";
import { database } from "@/db/database";
import { accounts, sessions, users } from "@/db/schema";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // session.user.id を id?: string ではなく id: string; に変更
    } & DefaultSession["user"];
  }
}

// strategy は設定する必要がない
// If you use an `adapter` however, we default it to `"database"` instead.
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(database, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
  }),
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
  providers: [Google],
});
