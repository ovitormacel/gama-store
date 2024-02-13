import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { AuthProvider } from "./contexts/auth";
import { CartProvider } from "./contexts/cart";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  )
}