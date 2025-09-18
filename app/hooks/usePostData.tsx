'use client'

import { useMutation } from "@tanstack/react-query";
import { Nodeapi } from "../../utils/axios";

type PostDataToServerProps = {
  BODY: object | null;
  API_URL: string;
  HEADERS?: any;
};

const POST_REQUEST = async ({ BODY, API_URL, HEADERS }: PostDataToServerProps) => {
  const response = await Nodeapi.post(API_URL, BODY, { headers: HEADERS });
  return response?.data;
};

const usePostDataToServer = ({ onPostReqSuccess }: { onPostReqSuccess?: (data: any) => void }) => {
  return useMutation({
    mutationFn: POST_REQUEST,
    onSuccess: (data) => {
      // Auto-update token (just log for now)
      // const nextToken = data?.headers["x-auth-next-token"];
      // if (nextToken) {
      //   console.log("Received token from response headers:", nextToken);
      //   // you could also save it in localStorage/sessionStorage
      //   localStorage.setItem("authToken", nextToken);
      // }

      if (onPostReqSuccess) onPostReqSuccess(data);
    },
    onError: (error) => {
      console.error("Something went wrong, try again later.", error);
    },
  });
};

export default usePostDataToServer;
