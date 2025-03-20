"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}
export const LoginInButton = ({
  children,
  mode="redirect",
}: LoginButtonProps) => {
    const router = useRouter();
  const onclick = () => {
    router.push("/auth/register")
  };
  if(mode === "modal"){
    return(
    <span>
    TODO:Implement Model
    </span>
    )
  }
  return (
    <span onClick={onclick} className="cursor-pointer">
      {children}
    </span>
  );
};
