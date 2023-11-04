import React, { useState, createContext, useContext, useEffect } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [signURL, setSignURL] = useState("");

  const userImages = (photo, sign) => {
    setImageURL(photo);
    setSignURL(sign);
  };

  const login = (userData) => {
    cookies.set("user", userData, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 0.5),
    }); //70 Minutes
    setUser(userData);
  };

  const logout = () => {
    cookies.remove("user");
    setUser(null);
  };

  useEffect(() => {
    const storedUser = cookies.get("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, userImages, imageURL, signURL }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
