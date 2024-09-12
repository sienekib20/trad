import React, { createContext, useState, useContext, ReactNode } from "react";

interface AuthType {
   token: string | null;
   login: (token: string, userId: string, username: string) => void;
   logout: () => void;
   userId: string | null;
   username: string | null;
};

const AuthContext = createContext<AuthType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   const [token, setToken] = useState<String | null>(
      localStorage.getItem("auth_token"),
   );

   const [userId, setUserId] = useState<String | null>(
      localStorage.getItem("userId"),
   );

   const [username, setUsername] = useState<String | null>(
      localStorage.getItem("username"),
   );

   const login = (token: string, userId: string, username: string) => {
      setToken(token);
      setUserId(userId);
      setUserId(username);
      localStorage.setItem("userId", userId);
      localStorage.setItem("username", username);
      localStorage.setItem("auth_token", token);
   };

   const logout = (token: string, userId: string, username: string) => {
      setToken(null);
      setUserId(null);
      setUserId(null);
      localStorage.removeItem("userId");
      localStorage.removeItem("username");
      localStorage.removeItem("auth_token");
   };

   return (
      <AuthContext.Provider value={{ token, login, logout, userId, username }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = (): AuthType => {
   const context = useContext(AuthContext);

   if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
   }
   return context;
};