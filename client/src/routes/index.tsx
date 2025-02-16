import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import { LoginUI as Login } from "../pages/loginUI/LoginUI";

const CustomRouter = () => {
  const location = useLocation();
  const { handleHideShowSidebar } = useSidebar();

  useEffect(() => {
    const shouldHideSidebar = hiddenSidebarPaths.includes(location.pathname);
    handleHideShowSidebar(!shouldHideSidebar);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default CustomRouter;
