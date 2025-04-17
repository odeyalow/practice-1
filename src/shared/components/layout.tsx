import { Outlet } from "react-router";

import Header from "./header";

const Layout = () => {
    return (
        <main className="d-flex flex-column ">
            <Header />
                <div className="main__content">
                    <Outlet />
                </div>
        </main>
    );
}
 
export default Layout;