import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <div>
            <main>
                <Outlet/>
            </main>
            <footer><h1>footer</h1></footer>
        </div>
    )
}
export default Layout