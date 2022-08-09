import { Routes, Route, Link } from "react-router-dom";

import Home from "../themes/Home";
import Authentication from "../themes/Authentication";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
