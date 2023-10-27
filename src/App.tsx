import "./App.css";

import { Layout } from "./components/Layout";
import { Outlet, useNavigate } from "react-router-dom";
import "./assets/fonts/styles.css";
import React from "react";

function App() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
