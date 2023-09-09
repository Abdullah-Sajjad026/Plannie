import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  markLoggedIn: () => {},
  logoutUser: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const logoutUser = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        markLoggedIn: () => {
          localStorage.setItem("isLoggedIn", true);
          setIsLoggedIn(true);
        },
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
