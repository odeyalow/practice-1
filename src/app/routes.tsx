import IRoute from "src/entities/IRoutes";
import Cart from "src/pages/cart";
import Categories from "src/pages/categories";
import Home from "src/pages/home";
import Wishlist from "src/pages/wishlist";
import SingleCategegory from "src/shared/components/SingleCategory";
import SingleProduct from "src/shared/components/SingleProduct";


const routes:IRoute[] = [
    { path: '/', index: true, name: 'Home', element: <Home /> },
    { path: '/categories', name: 'Categories', element: <Categories /> },
    { path: '/categories/:name', name: 'Categories', element: <SingleCategegory /> },
    { path: '/cart', name: 'Cart', element: <Cart /> },
    { path: '/wishlist', name: 'Wishlist', element: <Wishlist /> },
    { path: '/:name', isNotPage: true,  name: 'Home', element: <SingleProduct /> },
];

export default routes;