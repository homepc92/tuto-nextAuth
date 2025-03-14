import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // handlers: contiennent les gestionnaires d'API (GET,POST,etc...)
  // signIn : fonction qui sert a gerer la connection de l'util
  //
  providers: [],
});
