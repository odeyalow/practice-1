import { Outlet } from "react-router";

import Header from "./header";
import Footer from "./footer";

const Layout = () => {
    return (
        <main>
            <Header />
            <div className="main__content">
                <Outlet />
            </div>
            <Footer />
        </main>
    );
}
 
export default Layout;