'use client';
import React from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };
  return (
    <div className="container p-14 flex-row justify-center items-center">
     <h2 className=" text-center text-3xl font-bold">
      Multi-Login-User
    </h2>

     <div className=" py-10 flex justify-center align-center">
     <button 
     onClick={handleLogin} 
     className="text-lg bg-blue-600 p-4 font-bold rounded-lg">
      Login
      </button>
     </div>
    </div>
  );
}
