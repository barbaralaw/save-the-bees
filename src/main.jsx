import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import { BeeQuiz } from "./routes/quiz";
import { Resources } from "./routes/resources";
import { Home } from "./routes/home"
import { Puzzle } from "./routes/puzzle"
import { About} from "./routes/about"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "puzzle",
        element: <Puzzle />,
      },
      {
        path: "quiz",
        element: <BeeQuiz />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "about",
        element: <About />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
