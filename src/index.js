import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import AgainContext from "./component/AgainFlipkart/AgainContext";
// import Context from "./component/E-Comerce/E-Context";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./component/code spliting/UserContextProvider";
// import MainContextToDo from "./component/useContext/TodoTas/MainContext";
// import AddCartContext from "./component/UseEffect/AddToCart/CartContext";
// import AreaContext from "./component/useContext/Area/AreaContext";
// import Practice from "./component/useContext/demo/DemoContext";
// import MyContext from "./component/useContext/ToDo/ToDoContext";
// import ToDoContext from "./component/useContext/AgainTodo/ToDoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        {/* <Context> */}
        {/* <AgainContext> */}
        {/* <MainContextToDo> */}
        {/* <AreaContext> */}
        {/* <AddCartContext> */}
        {/* <MainContext> */}
        {/* <ToDoContext> */}
        {/* <MyContext> */}
        {/* <Practice> */}
        <App />
        {/* </Practice> */}
        {/* </MyContext> */}
        {/* </ToDoContext> */}
        {/* </MainContext> */}
        {/* </AddCartContext> */}
        {/* </AreaContext> */}
        {/* </MainContextToDo> */}
        {/* </AgainContext> */}
        {/* </Context> */}
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
