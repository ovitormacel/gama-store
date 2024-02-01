//ROUTER
import { createBrowserRouter } from "react-router-dom";

//PAGES
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/SearchPage/SearchPage";
import UserProfile from "./pages/UserProfile/UserProfile";
import Product from "./pages/Product/Product";
import Dashboard from "./pages/UserProfile/profile pages/Dashboard/Dashboard";
import Library from "./pages/UserProfile/profile pages/Library/LIbrary";
import Settings from "./pages/UserProfile/profile pages/Settings/Settings";

const router = createBrowserRouter([
    { 
        //RAIZ
        path: "/", element: <MainLayout />,
        children: [
            {index: true, element: <Home />},
            {path: "search/:searchQuery", element: <SearchPage />},
            {path: "product/:productId", element: <Product />},
            {path: "profile", element: <UserProfile />,
            children: [
                {index: true, element: <Dashboard />},
                {path: "library", element: <Library />},
                {path: "settings", element: <Settings />}
            ]}
        ]
    }
]);

export default router;