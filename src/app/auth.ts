import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { request } from "https";

const config = {
  providers: [
    Google,
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials.email === "elango@gmail.com" &&
          credentials.password === "12345"
        ) {
          return {
            name: "Elangovan.S",
            email: "elango@gmail.com",
            id: "4545",
            image:
              "https://lh3.googleusercontent.com/a/ACg8ocJVmy0sHnpVK9_qUZoras5EnrY4sBGNErMoCtONI5bVaCs=s96-c",
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      const { pathname } = request.nextUrl;

      if (pathname === "/middlewareSide") return !!auth;
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
