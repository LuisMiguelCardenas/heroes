import { createContext } from "react";

export type AuthContextProps = {
  user: any;
  dispatch:any
}


export const AuthContext = createContext< AuthContextProps>({} as  AuthContextProps);
