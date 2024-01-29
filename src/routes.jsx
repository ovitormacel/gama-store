//ROUTER
import { createBrowserRouter } from "react-router-dom";

//PAGES
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/SearchPage/SearchPage";
import UserProfile from "./pages/UserProfile/UserProfile";
import Product from "./pages/Product/Product";

const router = createBrowserRouter([
    { 
        //RAIZ
        path: "/", element: <MainLayout />,
        children: [
            {index: true, element: <Home />},
            {path: "search/:searchQuery", element: <SearchPage />},
            {path: "product/:productId", element: <Product />},
            {path: "profile", element: <UserProfile />}
        ]
    }
]);

export default router;