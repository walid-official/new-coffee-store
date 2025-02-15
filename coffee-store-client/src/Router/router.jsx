import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import FormLayout from "../layout/FormLayout";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import LoginRegisterLayout from "../layout/LoginRegisterLayout";
import About from "../components/About/About";
import ErrorPage from "../pages/ErrorPage";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/coffeeStore"),
      },
      {
        path: "about",
        element: <About></About>
      }
    ],
  },
  {
    path: "CustomCoffee/:DynamicCoffee",
    element: <FormLayout></FormLayout>
  },
  {
    path: "productDetails/:id",
    element: <ProductDetails></ProductDetails>
  },
  {
    path: "CoffeeInfo/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffeeStore/${params.id}`)
  },
  {
    path: "submit/:page",
    element: <LoginRegisterLayout></LoginRegisterLayout>
  },
  {
    path:"*",
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;
