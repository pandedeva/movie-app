import Home from "./Home";
import { Routes, Route } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Pages;
