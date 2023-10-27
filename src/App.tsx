import "./App.css";

import { Layout } from "./components/Layout";
import { Outlet } from "react-router-dom";
import "./assets/fonts/styles.css";

function App() {
  return (
    <Layout>
      <Outlet  />
    </Layout>
  );
}

export default App;
