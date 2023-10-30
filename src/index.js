import App from "./App";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllAbout from "./AboutPage/AllAbout";
import AllJewellery from "./JewelleryShop/AllJewellery";
import Contact from "./Contact/Contact";
import Cart from "./Carts/Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <AllAbout />,
  },
  {
    path: "Jewellery",
    element: <AllJewellery />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

