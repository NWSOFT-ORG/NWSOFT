import React from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import {Home} from "./components/home";
import {Menu} from "./components/menu";
import {enable} from "./bindings";
import {Projects} from "./components/projects";
import {About} from "./components/about";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
enable();

function GetProject() {
    const {id} = useParams();
    console.log(id);
    try {
        const Project = require(`./projects/${id?.toLowerCase()}`).Project;
        return <Project/>;
    } catch (e) {
        return <h1>Project not found</h1>;
    }
}

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path={"*"} element={<p>404</p>}></Route>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/P"} element={<Projects/>}></Route>
                <Route path={"/A"} element={<About/>}></Route>
                {<Route path={"/P/:id"} element={<GetProject/>}></Route>}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
