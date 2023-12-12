import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
};
// create context
export const GlobalContext = createContext(initialState);

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // localStorage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);
  return (
    <GlobalContext.Provider
      value={{ watchlist: state.watchlist, moviesDispatch: dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
export const useMovieContext = () => {
  return useContext(GlobalContext);
};
