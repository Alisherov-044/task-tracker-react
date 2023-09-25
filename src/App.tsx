import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import { routes } from "./utils";
import "./assets/styles/components.css";

export function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        {routes.map(({ id, path, component }) => (
          <Route path={path} Component={component} key={id} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}
