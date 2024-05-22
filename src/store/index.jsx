import React, { useReducer } from "react";
import { reducer, TypeActionStore } from "./reducer";

const initialState = {
  userLogin: {
    role: null,
  },
};

const StateContext = React.createContext();
const DispatchContext = React.createContext();

// eslint-disable-next-line react/prop-types
const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export { 
  StateContext, 
  DispatchContext, 
  TypeActionStore, 
  StoreProvider 
};
