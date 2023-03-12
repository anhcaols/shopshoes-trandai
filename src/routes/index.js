import ForgetPage from '@/pages/auth/forget';
import LoginPage from '@/pages/auth/login';
import RegisterPage from '@/pages/auth/register';
import ResetPasswordPage from '@/pages/auth/reset-password';
import CartPage from '@/pages/cart';
import HomePage from '@/pages/home';
import ShoesDetailPage from '@/pages/shoes-detail';

export const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/auth/register',
    component: RegisterPage,
    layout: 'AuthenticationLayout',
  },
  {
    path: '/auth/login',
    component: LoginPage,
    layout: 'AuthenticationLayout',
  },
  {
    path: '/auth/forget',
    component: ForgetPage,
    layout: 'AuthenticationLayout',
  },
  {
    path: '/auth/reset-password',
    component: ResetPasswordPage,
    layout: 'AuthenticationLayout',
  },
  {
    path: '/shoes/:id',
    component: ShoesDetailPage,
  },
  {
    path: '/cart',
    component: CartPage,
  },
];
