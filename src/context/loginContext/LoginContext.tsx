// libraries
import { createContext, useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// types
import { IContextProvider } from "../../types/server";

// API call functions
import { getLoginAPI } from "../../services/api";

interface ILoginContext {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  handelLogin: (username:string, password:string) => void;
  handelLogout: () => void;
}

const loginContext = createContext({} as ILoginContext);

export const useLoginContext = () => {
  return useContext(loginContext);
};

function LoginContextProvider({ children }: IContextProvider) {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation(); // to get the current route

  const handelLogin = (username:string, password:string) => {
    // inja chon API call ma vojud nadare baraye hamin chizi be ma nemide pas bejaye 'then' bayad 'finally' bezarim ke 'error' nade.
    getLoginAPI(username, password).finally(() => {
      let token = "this is token";
      localStorage.setItem("token", token);
      setIsLogin(true);

      // Redirect to the previous page or home if none is stored
      const previousPath = localStorage.getItem("previousPath") || "/";
      localStorage.removeItem("previousPath"); // Clear after redirecting
      navigate(previousPath);
    });
  };

  const handelLogout = () => {
    setIsLogin(false);
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    let token = localStorage.getItem("token");

    // Only set isLogin if it is different from the current state
    if (token && !isLogin) {
      setIsLogin(true);
    }

    // Store the previous path only when the user is not logged in
    if (!token && location.pathname !== "/login") {
      localStorage.setItem("previousPath", location.pathname);
    }
  }, [location.pathname, isLogin]);

  return (
    <loginContext.Provider
      value={{ isLogin, setIsLogin, handelLogin, handelLogout }}
    >
      {children}
    </loginContext.Provider>
  );
}

export default LoginContextProvider;
