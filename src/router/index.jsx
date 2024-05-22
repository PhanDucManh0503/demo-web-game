import ErrorPage from "@/pages/404";
import PATH from "@/constant/PathRouter";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import NotFoundPage from "@/pages/NotFoundPage";
import HomePage from "@/pages/Home";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";
import AdminLayout from "@/components/layouts/AdminLayout";
import Admin from "@/pages/Admin";

export const router = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PATH.error,
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: PATH.login,
    element: <LoginPage />,
  },
  {
    path: PATH.register,
    element: <RegisterPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Admin />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
