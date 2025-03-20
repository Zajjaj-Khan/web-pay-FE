'use client'
import { store } from "@/app/store/store";
import { Provider } from "react-redux";

interface ReduxProviderProps {
  children: React.ReactNode;
}

function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
