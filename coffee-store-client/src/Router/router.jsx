import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import FormLayout from "../layout/FormLayout";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import LoginRegisterLayout from "../layout/LoginRegisterLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://coffee-store-server-jade-iota.vercel.app/coffeeStore"),
      },
    ],
  },
  {
    path: "/CustomCoffee",
    element: <FormLayout></FormLayout>
  },
  {
    path: "/CoffeeInfo/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`https://coffee-store-server-jade-iota.vercel.app/coffeeStore/${params.id}`)
  },
  {
    path: "/submit/:page",
    element: <LoginRegisterLayout></LoginRegisterLayout>
  }
]);

export default router;
