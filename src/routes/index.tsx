import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";

import { routes } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          {routes.map((route) => {
            const { path, element: Element } = route;
            return <Route path={path} element={<Element />} />;
          })}
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
