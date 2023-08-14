import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import type { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = NextAuth({
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID || "",
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    // }),
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = { id: "1", name: "Admin", email: "admin@admin.com" };
        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
});
