// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { storeUserReducer } from "./reducer/userReducer";

// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

// console.log(userInfoFromStorage);

// const middleware = [thunk];

// const store = createStore(
//   storeUserReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;

import React, { createContext, useReducer, useEffect } from "react";
import { storeUserReducer } from "./reducer/userReducer";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userInfo, dispatch] = useReducer(storeUserReducer, {}, () => {
    const localData = localStorage.getItem("userInfo");
    return localData ? JSON.parse(localData) : {};
  });
  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);
  return (
    <UserContext.Provider value={{ userInfo, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
