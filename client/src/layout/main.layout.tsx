import SidebarContextProvider from "../components/sidebar/sidebar_context";
import Router from "../routes";
import { Sidebar } from "../components/sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div>
      <SidebarContextProvider>
        <Sidebar />
        <main>
          <Router />
        </main>
      </SidebarContextProvider>
    </div>
  );
};

export default MainLayout;
