import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

// avec prisma nous allons faire la liaison avec nextAuth . Voir la doc nextauth/adapters
const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  // handlers: contiennent les gestionnaires d'API (GET,POST,etc...)
  // signIn : fonction qui sert a gerer la connection de l'util
  //
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
