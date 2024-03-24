import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import TextComponent from "./Text";
import ButtonComponent from "./Button";
import Skills from "./Skills";
import App from "../App";

const RouteSwitcher = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="/skill-component" element={<Skills />} />
    </Routes>
  );
};

export default RouteSwitcher;
