import React, { useState } from "react";
import Page from "./part_2/Page";
import { DarkMoodContext, MovieContext } from "./part_2/context";
// import { ToastContainer } from "react-toastify";
// import { MovieContext, ThemeContext } from "./context";
// import Page from "./Page";
// import { cartReducer, initialState } from "./reducers/cardReducer";
const App = () => {
  const [cartData, setCartData] = useState([]);
  const [darkMood, setDarkMood] = useState(true);
  // const [state, dispatch] = useReducer(cartReducer, initialState);
  // const [cartData, setCartData] = useState([]);
  // const [darkMood, setDarkMood] = useState(true);
  return (
    <>
      {/* <ThemeContext.Provider value={{ darkMood, setDarkMood }}> */}
      {/* <MovieContext.Provider value={{ state, dispatch }}> */}
      {/* <Page /> */}
      {/* <ToastContainer /> */}
      {/* </MovieContext.Provider> */}
      {/* </ThemeContext.Provider> */}
      {/* ----------------------------------- */}
      {/* ----------------------------------- */}
      <DarkMoodContext.Provider value={{ darkMood, setDarkMood }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Page />
        </MovieContext.Provider>
      </DarkMoodContext.Provider>
    </>
  );
};

export default App;
