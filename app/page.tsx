
import { Butcherman} from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {Link, Notebook} from 'lucide-react'
import { LoginInButton } from "@/components/login-button";


const font = Butcherman({
  subsets: ["latin"],
  weight: "400"
});

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3674B5] to-[#A1E3F9]">
    <div className={cn("space-y-6 text-center", font)}>
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
        Automate Your Financial Hustle
        </h1>
        <h4 className="text-white text-2xl">
        Keep track of your Money 💸
        </h4>
        <LoginInButton>
        <Button variant="outline" className="mx-4">
          Get Started <Link/>
        </Button>
        </LoginInButton>
        <Button variant="default" className="mx-4">
         About App<Notebook/>
        </Button>
        </div>
    </main>

  );
}
