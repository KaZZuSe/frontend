import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import MainLayout from "./components/Layout/Layout.jsx";
import Productos from "./Productos.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Favoritos from "./components/Favoritos/Favoritos.jsx";
import { AuthProvider } from "./components/AuthContext/AuthContext.jsx";
import { FavoritosProvider } from "./Context/FavoritosContext.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/index",
    element: (
      <MainLayout>
        <Productos />
      </MainLayout>
    ),
  },
  {
    path: "/favoritos",
    element: (
        <MainLayout>
          <Favoritos />
        </MainLayout>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/perfil",
    element: <MainLayout><Profile /></MainLayout>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <FavoritosProvider>
        <RouterProvider router={router} />
      </FavoritosProvider>
    </AuthProvider>
  </React.StrictMode>
);
