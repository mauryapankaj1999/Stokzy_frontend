// "use client";
// import { createContext, useContext, useState, useEffect } from "react";
// const AuthContext = createContext<any>(null);

// export function AuthProvider({
//   children,
// }: {
//   children: any;
// }) {
//   const [user, setUser] = useState<any>(null);
//   const [openLogin, setOpenLogin] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       setUser({ token });
//     }
//   }, []);

//   const login = (token: string, userData?: any) => {
//     localStorage.setItem("token", token);
//     setUser(userData || { token });
//     setOpenLogin(false);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         login,
//         logout,
//         openLogin,
//         setOpenLogin,
//         isAuthenticated: !!user,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);
// // export const useAuth = () =>  useContext(AuthContext);


"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const AuthContext =
  createContext<any>(null);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] =
    useState<any>(null);

  const [
    openLogin,
    setOpenLogin,
  ] = useState(false);

  useEffect(() => {
    const token =
      localStorage.getItem("token");

    const userData =
      localStorage.getItem("user");

    if (token) {
      if (userData) {
        setUser({
          ...JSON.parse(userData),
          token,
        });
      } else {
        setUser({
          token,
        });
      }
    }
  }, []);

  const login = (
    token: string,
    userData?: any
  ) => {
    localStorage.setItem(
      "token",
      token
    );

    if (userData) {
      localStorage.setItem(
        "user",
        JSON.stringify(userData)
      );
    }

    setUser({
      ...userData,
      token,
    });

    setOpenLogin(false);
  };

  const logout = () => {
    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        openLogin,
        setOpenLogin,
        isAuthenticated:
          !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () =>
  useContext(AuthContext);