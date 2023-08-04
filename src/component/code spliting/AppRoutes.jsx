import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Products from "./Products";
const Home = lazy(() => import("../code spliting/Home"));
const About = lazy(() => import("../code spliting/About"));
const Login = lazy(() => import("../code spliting/Login"));
const Users = lazy(() => import("../code spliting/Users"));
const SingleUser = lazy(() => import("../code spliting/SingleUser"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <Suspense fallback={<h1>Loading Home...</h1>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<h1>Loading About...</h1>}>
            <About />
          </Suspense>
        }
      >
        <Route path="tech" element={<h1>Tech Page</h1>} />
        <Route path="office" element={<h1>Office Page</h1>} />
      </Route>
      <Route
        path="/login"
        element={
          <Suspense fallback={<h1>Loading Login...</h1>}>
            <Login />
          </Suspense>
        }
      />
      <Route path="/profile" element={<Profile />} />
      <Route path="/products" element={<Products />} />
      <Route
        path="users"
        element={
          <Suspense fallback={<h1>Loading User PAge..</h1>}>
            <Users />
          </Suspense>
        }
      ></Route>
      <Route
        path="/users/:userid"
        element={
          <Suspense fallback={<h1>Loading Single user..</h1>}>
            <SingleUser />
          </Suspense>
        }
      />
      <Route path="/error" element={<h1>Error 404</h1>} />
    </Routes>
  );
};

export default AppRoutes;
