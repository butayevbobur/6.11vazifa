import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//context
import { useContext } from "react";
import { GlobalContext } from "./context/useGlobal";
// components
import ProtectedRoutes from "./components/ProtectedRoutes"; // layouts
import MainLayout from "./layout/MainLayout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleProduct from "./components/SingleProduct";

import Login from "./pages/Login";

export default function App() {
  const user = useContext(GlobalContext);
  console.log(user);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/singup",
      element: user ? <Navigate to="/" /> : <Singup />,
    },
  ]);

  return <RouterProvider router={router} />;
}
