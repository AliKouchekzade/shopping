import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext();
const setAuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("auth")) || null;
    setAuth(userInfo);
  }, []);

  return (
    <authContext.Provider value={auth}>
      <setAuthContext.Provider value={setAuth}>
        {children}
      </setAuthContext.Provider>
    </authContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(authContext);
export const useAuthActions = () => {
  const setAuth = useContext(setAuthContext);
  const auth = useAuth();

  const login = (data) => {
    setAuth(data);
    localStorage.setItem("auth", JSON.stringify(data));
  };

  const logout = () => {
    setAuth(null);
    localStorage.setItem("auth", JSON.stringify(null));
  };

  const isLogin = () => {
    return auth ? true : false;
  };

  return { login, logout, isLogin };
};
