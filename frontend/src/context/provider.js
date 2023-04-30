import { useState, createContext, useContext } from "react";

const StateContext = createContext(null);

const StateProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;

export const useStateContext = () => useContext(StateContext);
