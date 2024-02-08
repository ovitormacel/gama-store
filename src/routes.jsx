//ROUTER
import { createBrowserRouter, useNavigate } from "react-router-dom";

//PAGES
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/SearchPage/SearchPage";
import UserProfile from "./pages/UserProfile/UserProfile";
import Product from "./pages/Product/Product";
import Dashboard from "./pages/UserProfile/profile pages/Dashboard/Dashboard";
import Library from "./pages/UserProfile/profile pages/Library/LIbrary";
import Settings from "./pages/UserProfile/profile pages/Settings/Settings";
import NewPaymentMethod from "./pages/UserProfile/profile pages/NewPaymentMethod/NewPaymentMethod";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import useAuth from "./hooks/useAuth";


const PrivateRoute = ({ Page }) => {
    const navigate = useNavigate();

    const { signed } = useAuth();

    return signed > 0 ? <Page /> : <Login />;
}

const router = createBrowserRouter([
    { 
        //RAIZ
        path: "/", element: <MainLayout />,
        children: [
            {index: true, element: <Home />},
            {path: "/login", element: <Login />},
            {path: "register", element: <Register />},
            {path: "search/:searchQuery", element: <SearchPage />},
            {path: "product/:productId", element: <Product />},
            {path: "profile", element: <PrivateRoute Page={UserProfile} />,
            children: [
                {index: true, element: <Dashboard />},
                {path: "library", element: <Library />},
                {path: "settings", element: <Settings />},
                {path: "new-payment", element: <NewPaymentMethod />}
            ]}
        ]
    }
]);

export default router;