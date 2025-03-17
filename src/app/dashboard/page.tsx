"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

// IMPORTANT : Pour utiliser les sessions ici il faut englober l'appli d'un session PROVIDER
// VOIR LAYOUT

export default function DashboardPage() {
  // on va d'abord recuperer les infos de la session
  const { data: session } = useSession();
  return (
    // on verifie si il y a une session
    <>
      {session?.user ? (
        <>
          {/* si l'utilisateur est connecté  */}
          {session?.user?.image && (
            <Image
              src={session.user.image}
              alt="use avatar"
              width={50}
              height={50}
              className="rounded-full m-5 "
            />
          )}
          <div className="flex justify-center p-4 items-center gap-50 text-yellow-50 font-bold">
            {session.user.name && (
              <h1 className="text-2xl border p-5 mx-5">{session.user.name}</h1>
            )}
            <button
              className="m-4 cursor-pointer bg-red-400 p-3 rounded-2xl hover:bg-amber-50 hover:text-red-500  "
              onClick={() => signOut()}
            >
              Deconnexion
            </button>
          </div>
        </>
      ) : (
        /* si l'utilisateur n'est pas connecté  */
        <Link href="/login">
          <button className="p-4 bg-amber-600 text-amber-50 m-5 cursor-pointer rounded-2xl hover:bg-amber-100 hover:text-amber-600 ">
            Connexion
          </button>
        </Link>
      )}
    </>
  );
}
