import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import TodoContent from "../components/TodoContent/TodoContent";
import Main from "../layouts/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      { path: "/", element: <Dashboard></Dashboard> },
      {
        path: "/learning",
        element: <TodoContent todoKey="learning"></TodoContent>,
      },
      { path: "/todo", element: <TodoContent todoKey="todo"></TodoContent> },
      {
        path: "/clients-todo",
        element: <TodoContent todoKey="clients-todo"></TodoContent>,
      },
    ],
  },
]);

export default router;
