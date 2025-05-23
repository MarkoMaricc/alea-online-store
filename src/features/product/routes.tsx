import ProtectedRoute from "../../app/routes/ProtectedRoute";
import { ProductListPage } from "./ProductListPage";
import { ProductPage } from "./ProductPage";








export const productRoutes = [
  {
    path: '/products',
    element: (
      <ProtectedRoute>
        <ProductListPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/products/:id',
    element: (
      <ProtectedRoute>
        <ProductPage />
      </ProtectedRoute>
    ),
  },
];