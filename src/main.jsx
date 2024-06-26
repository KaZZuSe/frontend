// Importar los componentes necesarios
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import MainLayout from "./components/Layout/Layout.jsx";
import Productos from "./Productos.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Favoritos from "./pages/Favoritos/Favoritos.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Vender from "./pages/Vender/Vender.jsx";
import UserProfile from "./pages/UserProfile/UserProfile.jsx"; 
import Pedidos from "./pages/Pedidos/Pedidos.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { FavoritosProvider } from "./Context/FavoritosContext.jsx";
import "./index.css";

// Crear el router, hay que deinir la ruta URL y el componente. Para ello sirve el Layout.
const router = createBrowserRouter([
  // Definir las rutas
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
    element: (
      <MainLayout>
        <Profile />
      </MainLayout>
    ),
  },
  {
    path: "/pedidos",
    element: (
      <MainLayout>
        <Pedidos />
      </MainLayout>
    ),
  },
  {
    path: "/vender",
    element: (
      <MainLayout>
        <Vender />
      </MainLayout>
    ),
  },
  {
    path: "/productos",
    element: (
      <MainLayout>
        <Productos />
      </MainLayout>
    ),
  },
  {
    path: "/checkout",
    element: (
      <MainLayout>
        <Checkout />
      </MainLayout>
    ),
  },
  {
    path: "/productos/:categoria",
    element: (
      <MainLayout>
        <Productos />
      </MainLayout>
    ),
  },
  {
    path: "/*",
    element: (
      <MainLayout>
        <NotFound />
      </MainLayout>
    ),
  },
  {
    path: "/user/:userId", // Añade esta línea para la nueva ruta
    element: (
      <MainLayout>
        <UserProfile />
      </MainLayout>
    ),
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
