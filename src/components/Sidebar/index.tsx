import React from "react";

import { Route, RouteProps } from "./components/Route";
import "./styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../Logo";

const routes: Omit<RouteProps, "isActive">[] = [
  { label: "Dashboard", route: "/dashboard" },
  { label: "Detalhes", route: "/details" },
  { label: "Tabelas", route: "/tables" },
  { label: "Sobre", route: "/about" },
];

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickRoute = (route: string) => {
    navigate(route);
  };
  return (
    <div className="container-sidebar">

      <Logo/>
      <div className="routes-container">
        {routes.map((item, index) => (
          <Route
            key={index}
            {...item}
            onClick={handleClickRoute}
            isActive={location.pathname === item.route}
          />
        ))}
      </div>
    </div>
  );
}

export { Sidebar };
