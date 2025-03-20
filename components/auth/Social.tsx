"use client";
import { FcGoogle } from "react-icons/fc";

import { Button } from "../ui/button";
import { useLoginWithGoogle } from "@/app/hooks/useLoginWithGoogle";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export const Social = () => {
  const { signIn, userData , error } = useLoginWithGoogle();
  const router = useRouter(); // Initialize the router to handle navigation

  useEffect(() => {
    if (userData) {
      // You can now use userData for further logic, like updating global state, redirecting, etc.
      console.log("User Data:", userData);
            router.push("/Onboarding"); // You can change the URL to any route you want

    }
  }, [userData]);



  const onClick = async () => {
     signIn();
     console.log("Zajjjaj",userData)
  }



  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" className="w-full" variant="outline" onClick={onClick}>
        <FcGoogle className="w-5 h-5" />
      </Button>
    </div>
  );
};
