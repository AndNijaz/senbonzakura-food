import React, { Suspense } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
// import Home from "./components/Home/Home";
// import Menu from "./components/Menu/Menu";
// import MenuContent from "./components/Menu/MenuContent";
// import Orders from "./components/Orders/Orders";

const Home = React.lazy(() => import("./components/Home/Home"));
const Menu = React.lazy(() => import("./components/Menu/Menu"));
const MenuContent = React.lazy(() => import("./components/Menu/MenuContent"));
const Orders = React.lazy(() => import("./components/Orders/Orders"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}>
            <Route
              path="/menu/:foodId"
              element={<MenuContent></MenuContent>}
            ></Route>
          </Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/login" element={<Navigate to="/home" />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
