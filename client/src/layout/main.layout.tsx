import { useSidebar } from "../components/sidebar/sidebar_context";
import Router from "../routes";
import { Sidebar } from "../components/sidebar/Sidebar";
import { cn } from "../utils/utils";
import {} from "../components/sidebar/Sidebar";

const MainLayout = () => {
  const { open } = useSidebar();
  return (
    <div className="flex">
      <Sidebar />
      <main
        className={cn(
          "flex-1 duration-300 transition-[left,right,width,margin] ease-linear  p-5",
          open ? `ml-[--sidebar-width]` : "ml-[--sidebar-width-icon]"
        )}
      >
        <Router />
      </main>
    </div>
  );
};

export default MainLayout;
