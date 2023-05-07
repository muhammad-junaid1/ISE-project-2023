import { useState, createContext, useContext } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import axios from "axios";

const StateContext = createContext(null);

const StateProvider = ({ children }) => {
  const BACKEND_URL = "http://localhost:5000";
  const [User, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);
  const [isProfileCompleted, setIsProfileCompleted] = useState(true);

  onAuthStateChanged(auth, async (user) => {
    try {
      if (user) {
        const { email, uid } = user;
        const result = await axios.get(`${BACKEND_URL}/users/${uid}`);
        if (result.data.data) {
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
            uid, email
           });
            setIsProfileCompleted(false);
          }
        }
      } else {
        setAuthLoading(false);
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
  return (
    <StateContext.Provider
      value={{
        User,
        setUser,
        BACKEND_URL,
        authLoading,
        pageLoading,
        setPageLoading,
        accountNotFound: isProfileCompleted
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;

export const useStateContext = () => useContext(StateContext);
