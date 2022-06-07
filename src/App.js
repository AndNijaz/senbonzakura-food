import { useState } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import MenuContent from "./components/Menu/MenuContent";
import { useSelector } from "react-redux";
import MenuBottom from "./components/Menu/MenuBottom";

function App() {
  // const [modalActive, setModalActive] = useState(false);

  return (
    <Layout>
      {/* {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))} */}
      {/* {ReactDOM.createPortal(<CartModal />, document.getElementById("modal"))} */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}>
          <Route
            path="/menu/:foodId"
            element={<MenuContent></MenuContent>}
          ></Route>
        </Route>
        <Route path="/orders"></Route>
        <Route path="/login"></Route>
      </Routes>
    </Layout>
  );
}

export default App;
