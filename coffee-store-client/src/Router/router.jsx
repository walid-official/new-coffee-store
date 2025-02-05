import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import FormLayout from "../layout/FormLayout";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import LoginRegisterLayout from "../layout/LoginRegisterLayout";
import About from "../components/About/About";

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
    path: "/CustomCoffee",
    element: <FormLayout></FormLayout>
  },
  {
    path: "/CoffeeInfo/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffeeStore/${params.id}`)
  },
  {
    path: "/submit/:page",
    element: <LoginRegisterLayout></LoginRegisterLayout>
  }
]);

export default router;
