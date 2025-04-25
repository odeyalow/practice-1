import IRoute from "@/entities/IRoutes";
import Cart from "@/pages/cart";
import Categories from "@/pages/categories";
import Home from "@/pages/home";
import Wishlist from "@/pages/wishlist";
import SingleCategegory from "@/shared/components/singleCategory";
import SingleProduct from "@/shared/components/singleProduct";
import Page404 from "@/pages/page404";


const routes:IRoute[] = [
    { path: '/', index: true, name: 'Home', element: <Home /> },
    { path: '/categories', name: 'Categories', element: <Categories /> },
    { path: '/categories/:name', isNotPage: true, name: 'Single Categorie', element: <SingleCategegory /> },
    { path: '/cart', name: 'Cart', element: <Cart /> },
    { path: '/wishlist', name: 'Wishlist', element: <Wishlist /> },
    { path: '/products/:name/:id', isNotPage: true,  name: 'Single Product', element: <SingleProduct /> },
    { path: '*', isNotPage: true,  name: 'Page404', element: <Page404 /> },
];

export default routes;