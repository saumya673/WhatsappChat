import { createContext } from "react";

export interface Account {
  id: string;
  username: string;
  email: string;
  picture: string;
}

export const AccountContext = createContext<{
  account: Account | null;
  setAccount: React.Dispatch<React.SetStateAction<Account | null>>;
} | null>(null);
