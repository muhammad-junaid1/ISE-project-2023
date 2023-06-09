import { useState, createContext, useContext, useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import axios from "axios";

const StateContext = createContext(null);

const StateProvider = ({ children }) => {
  const BACKEND_URL = "http://localhost:5000";
  const [User, setUser] = useState("");
  const [authLoading, setAuthLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  const [isProfileCompleted, setIsProfileCompleted] = useState(true);

  function onAuthStateChange() {
  return onAuthStateChanged(auth, async (user) => {
    try {
      console.log(user)
      if (user) {
        const { email, uid, photoURL } = user;
        const result = await axios.get(`${BACKEND_URL}/users/${email}`);
        if (result.data.data) {
          if (localStorage.getItem("values")) {
            setTimeout(() => {
              toast.success("You already had an account on this email!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }, 2000);
          }
          setUser(result.data.data);
          localStorage.removeItem("values");
          setAuthLoading(false);
        } else {
          const values = JSON.parse(localStorage.getItem("values"));
          if (values) {
            const data = {
              ...values,
              uid,
              email,
              photoURL
            };
            const response = await axios.post(`${BACKEND_URL}/users`, data);
            if (response.data.status) {
              const user = response?.data?.data;
              if (user) {
                setUser(user);
                localStorage.removeItem("values");
                setAuthLoading(false);
              }
            }
          } else {
            setAuthLoading(false);
            setUser({
              uid,
              email,
              photoURL
            });
            setIsProfileCompleted(false);
          }
        }
      } else {
        setAuthLoading(false);
        setUser(null);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  });
  }

  useEffect(() => {
      const unsubscribe = onAuthStateChange();
      return () => {
        unsubscribe();
      };
  }, []);

  return (
    <StateContext.Provider
      value={{
        User,
        setUser,
        BACKEND_URL,
        authLoading,
        pageLoading,
        setPageLoading,
        isProfileCompleted,
        setIsProfileCompleted,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;

export const useStateContext = () => useContext(StateContext);
