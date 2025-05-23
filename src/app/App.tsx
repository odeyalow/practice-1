import { Routes, Route } from "react-router";

import routes from "./routes";
import Layout from "@components/layout";
import IRoute from "@/entities/IRoutes";

const App = () => {
    return (
        <>
            <Layout />
            
            <Routes>
                {
                    routes.map(({ path, name, index, element}: IRoute) => {
                        if ( index ) return <Route index element={element} />
                        return <Route key={path || name} path={path} element={element} />
                    } )
                }
            </Routes>
        </>
    );
}
 
export default App;