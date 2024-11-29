import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import FormLayout from "../layout/FormLayout";
import UpdateLayout from "../layout/UpdateLayout";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";

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
    ],
  },
  {
    path: "/CustomCoffee",
    element: <FormLayout></FormLayout>
  },
  {
    path: "/CoffeeInfo/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffeeStore/${params.id}`)
  }
]);

export default router;
