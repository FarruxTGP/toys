import Home from "../pages/Home"
import About from "../pages/About"
import Product from "../pages/Product"
export const ROUTES = [
    {
        exact: true,
        path: "/",
        component: Home
    },
    {
        exact: false,
        path: "/about",
        component: About
    },
    {
        exact: false,
        path: "/users",
        component: About,
    },
    {
        exact: false,
        path: "/product",
        component: Product,
    }
]
