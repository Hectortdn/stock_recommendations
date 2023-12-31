import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";

//ROUTES
import DashboardScreen from "./pages/screens/dashboard.tsx";
import DetailsScreen from "./pages/screens/details.tsx";
import { Ticker } from "./pages/components/ticker/index.tsx";
import { TickerScreen } from "./pages/screens/ticker.tsx";

const DevelopmentAlertScreen = () => (
  <div
    style={{
      flex: 1,
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <h1>Em Desenvolvimento....</h1>
  </div>
);

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
      {
        path: "tables",
        element: <TickerScreen />,
      },
      {
        path: "tickerDetails",
        element: <TickerScreen />,
      },
      {
        path: "about",
        element: <DevelopmentAlertScreen />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
