import { FC, ReactNode } from "react";
import SidebarContextProvider from "../components/sidebar/sidebar_context";
import { Sidebar } from "lucide-react";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <SidebarContextProvider>
        <Sidebar />
        <main>{children}</main>
      </SidebarContextProvider>
    </div>
  );
};

export default MainLayout;
