import { useState, createContext, useContext } from "react";
import {auth} from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

const StateContext = createContext(null);

const StateProvider = ({ children }) => {
  const [User, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  })
  return (
    <StateContext.Provider
      value={{
        User,
        setUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;

export const useStateContext = () => useContext(StateContext);
