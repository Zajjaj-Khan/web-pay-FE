export const runtime = "edge";

import { Nodeapi } from "@/utils/axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";

export const useLoginWithGoogle = () => {
  const [userData, setUserData] = useState<object | null>(null); // State to hold the response data
  const [error, setError] = useState<string | null>(null);
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("ZajjajL", tokenResponse);
      try {
        console.log("🔄 Sending Token to Backend:", tokenResponse.access_token);
        const res = await Nodeapi.post("/auth/google-popup", {
          token: tokenResponse.access_token,
        });
        console.log(res.data);
        localStorage.setItem("jwt_token", res.data.token);
        setUserData(res.data);
        // Update user state
      } catch (err:unknown) {
        console.error("Login failed", err);
        setError("Login failed. Please try again.");
      }
    },
    onError: () => console.error("Google login failed"),
  });

  return { signIn: login, userData, error }; // Return the signIn function for triggering the login
};
