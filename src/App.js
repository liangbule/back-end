import { Link, Routes, Route } from "react-router-dom";
import Titbar from "./components/titbar";
// import UserPage from './views/user'
// import Home from './views/home'
import React, { lazy, Suspense } from "react";
import { Button } from "antd";

const Home = lazy(() => {
  return import("./views/home");
});
const UserPage = lazy(() => {
  return import("./views/user");
});

function App() {
  return (
    <div style={{ background: "red" }}>
      App works
      <h1 style={{ color: "green" }}>大表情</h1>
      <Button type="primary">按钮</Button>
      <Titbar />
      <h1>
        <Link to="/user">个人中心</Link>
      </h1>
      <h1>
        <Link to="/home">首页</Link>
      </h1>
      <Suspense fallback={<div>.....loding</div>}>
        <Routes>
          <Route path="/user" element={<UserPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
