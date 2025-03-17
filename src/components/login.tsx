"use client";

import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoSignIn } from "react-icons/go";

const Login = () => {
  const buttonDesign =
    "cursor-pointer rounded-2xl p-4 w-fit bg-amber-800 hover:bg-amber-200 hover:text-yellow-700 flex items-center gap-2";
  return (
    <div className=" p-[5em]  text-amber-50 font-bold  w-fit mx-auto my-[10%] rounded-3xl shadow-xl shadow-amber-50 bg-white/20 backdrop-blur-none">
      <h1 className="my-5 flex items-center gap-4 border-2 w-fit p-3">
        SIGN IN <GoSignIn className="text-4xl" />
      </h1>
      <div className="flex flex-col gap-5 justify-center ">
        <button
          className={buttonDesign}
          onClick={() => signIn("github", { redirectTo: "/dashboard" })}
        >
          Sign In with <FaGithub className="text-3xl" />
        </button>
        <button
          className={buttonDesign}
          onClick={() => signIn("google", { redirectTo: "/dashboard" })}
        >
          Sign In with <FaGoogle className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Login;
