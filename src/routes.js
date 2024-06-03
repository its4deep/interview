import { Routes, Route } from "react-router-dom";
import Happy from "./pages/happy/Happy";
import FilterableProductData from "./pages/tir/FilterableProductTable";
import Form from "./pages/form/form";
import Parent from "./pages/useCallback/Parent";
import Infy from "./pages/infosys/Infy";
import Lilly from "./pages/infosys/Infy";
import Login from "./pages/login/Login";
import Visi from "./pages/visi/Visi";
const AppRoute = () => {
  return (
    <Routes>
      <Route path="/happy" element={<Happy />} />
      <Route path="filter-table" element={<FilterableProductData />} />
      <Route path="form" element={<Form />} />
      <Route path="parent" element={<Parent />} />
      <Route path="infy" element={<Infy />} />
      <Route path="lilly" element={<Lilly />} />
      <Route path="/login" element={<Login />} />
      <Route path="/visi" element={<Visi />} />
    </Routes>
  );
};
export default AppRoute;
