import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import PrivetRoute from './PrivetRoute';
import ErrorePage from './../components/Error/ErrorePage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorePage></ErrorePage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch("http://localhost:5000/recipe"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/recipeDetails/:id",
        element: (
          <PrivetRoute>
            <RecipeDetails></RecipeDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipe/${params.id}`),
      },
      
    ],
  },
]);

export default router;