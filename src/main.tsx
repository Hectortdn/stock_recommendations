import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";

//ROUTES
import DashboardScreen from "./pages/screens/dashboard.tsx";
import DetailsScreen from "./pages/screens/details.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <>
        <h1>NOT FOUND</h1>
      </>
    ),
    children: [
      {
        path: "dashboard",
        element: <DashboardScreen />,
      },

      {
        path: "details",
        element: <DetailsScreen />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
