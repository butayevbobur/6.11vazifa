import React, { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
  user: null, // Initial state should likely be null unless there's a specific reason for true
};

const changeState = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, user: action.payload };
    case "LOG_OUT":
      return { ...state, user: null };
    default:
      return state; // Return the state as is for unknown actions
  }
};

function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, initialState);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;

