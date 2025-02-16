import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import { useSidebar } from "../components/sidebar/sidebar_context";
import Home from "../pages/home/Home";

const hiddenSidebarPaths = ["/login", "/register", "/forgot-password"];

const CustomRouter = () => {
  const location = useLocation();
  const { handleHideShowSidebar } = useSidebar();

  useEffect(() => {
    const shouldHideSidebar = hiddenSidebarPaths.includes(location.pathname);
    handleHideShowSidebar(!shouldHideSidebar);
  }, [location.pathname]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<></>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default CustomRouter;
