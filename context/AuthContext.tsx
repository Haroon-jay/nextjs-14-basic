"use client";

import { createContext, useEffect, useState, useContext, useMemo } from "react";
import {
  login as loginAccount,
  logoutAccount,
} from "@/lib/actions/auth.actions";
import { localStorageUtils } from "@/lib/localStorage";

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async (username: string, password: string) => null,
  logout: async () => null,
});

interface AuthProviderProps {
  children: React.ReactNode;
}
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string) => {
    // call login api
    const { user } = await loginAccount(username, password);
    setUser(user);
    localStorageUtils.set("user", user);
  };

  const logout = async () => {
    // call logout api
    await logoutAccount();
    localStorageUtils.set("user", null);
    setUser(null);
  };

  useEffect(() => {
    const user = localStorageUtils.get("user");
    if (user) {
      setUser(user);
    }
  }, []);
  const value = useMemo(() => ({ user, login, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  if (!AuthContext) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return useContext(AuthContext);
};
