import { Sidebar } from "../Sidebar";
import "./styles.css";

interface LayoutProps {
  children: React.ReactNode;
}

const WIDTH = window.innerWidth - 218;

function Layout({ children }: LayoutProps) {
  return (
    <div className="container-layout">
      <Sidebar />

      <div
        className="screen-component"
        style={{
          width: WIDTH,
          marginLeft: 218,
          minHeight: window.innerHeight + 2,
        }}
      >
        {children && children}
      </div>
    </div>
  );
}

export { Layout };
