import ProtectedRoute from "../../app/routes/ProtectedRoute";
import { CartPage } from "./CartPage";









export const cartRoutes = [
  {
    path: '/cart',
    element: (
      <ProtectedRoute>
        <CartPage />
      </ProtectedRoute>
    ),
  },
];