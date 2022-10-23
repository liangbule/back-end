import React from "react";
import ReactDOM from "react-dom/client";
// @ts-ignore
import App from "./App";
import {StoreUtils, IsLoginUtil} from "./utils";
// @ts-ignore
import images from "./image/52FB6D20FF8FADA236C2EC9F61CCD11D.png";
import {BrowserRouter} from "react-router-dom";
import "antd/dist/antd.css";

if (module.hot) {
    //    判断是否支持热模块
    module.hot.accept("./utils/isLoginUtild");
    console.log(
        "热模块更新",
        IsLoginUtil.isLogin(),
        StoreUtils.cookieStore(),
        images
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
