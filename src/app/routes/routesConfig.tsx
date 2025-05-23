

import { JSX } from 'react';
import { authRoutes } from '../../features/authentication/routes';
import { productRoutes } from '../../features/product/routes';
import { cartRoutes } from '../../features/cart/routes';


export interface AppRoute {
  path: string;
  element: JSX.Element;
}

const routes: AppRoute[] = [
     ...authRoutes,
     ...productRoutes,
     ...cartRoutes

];

export default routes;
