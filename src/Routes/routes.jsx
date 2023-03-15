import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from '../components/home'
import Properties from "../components/propesties";
import Layout from "../layout/Layout";
import Register from "../components/Register";
import Login from "../components/login";
const Router = () => {
    return(
        <>
        <div>
            <Routes>
                <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}  />
        <Route path="/Properties" element={<Properties/>}  />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
            <Route/>
                </Route>
            </Routes>
        </div>
        </>
    )
}
export default Router