import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const CustomRouter = () => {
  useEffect(() => {}, []);

  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/login" element={<></>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default CustomRouter;
