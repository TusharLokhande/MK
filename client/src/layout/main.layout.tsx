import { useSidebar } from "../components/sidebar/sidebar_context";
import Router from "../routes";
import { Sidebar } from "../components/sidebar/Sidebar";
import { cn } from "../utils/utils";
import {} from "../components/sidebar/Sidebar";
import { useMemo } from "react";
import { SidebarIcon } from "lucide-react";
import UserPng from "../assets/user.png";

// const MainLayout = () => {
//   const { open } = useSidebar();

//   const commonStyles: string = useMemo(() => {
//     return cn(
//       "flex-1 duration-300 transition-[left,right,width,margin] ease-linear",
//       open ? `ml-[--sidebar-width]` : "ml-[--sidebar-width-icon]"
//     );
//   }, [open]);

//   return (
//     <div className="flex">
//       <Sidebar />

//       <main className={cn(commonStyles, "")}>
//         <div className="header border-b-2 p-3 flex"></div>
//         <div className="p-5">
//           <Router />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MainLayout;

const MainLayout = () => {
  const { open, toggleSidebar } = useSidebar();

  const commonStyles: string = useMemo(() => {
    return cn(
      "flex-1 duration-300 transition-all ease-linear",
      open ? `ml-[--sidebar-width]` : "ml-[--sidebar-width-icon]"
    );
  }, [open]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <main className={cn(commonStyles, "flex flex-col w-full")}>
        {/* Header Section */}
        <header className="flex justify-between items-center p-2 px-3 border-b-2">
          <div className="text-xl font-semibold text-gray-800">
            <SidebarIcon onClick={toggleSidebar} className="text-slate-400" />
          </div>

          {/* User Header (Image and Name on the Right) */}
          <UserHeader imageSrc="/path/to/user-image.jpg" name="John Doe" />
        </header>

        {/* Main Content Area */}
        <div className="p-5 flex-1">
          <Router />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;

// Component for displaying user image and name in the header
const UserHeader = ({ imageSrc, name }: { imageSrc: string; name: string }) => {
  return (
    <div className="flex items-center space-x-3">
      <img
        src={UserPng}
        alt={name}
        className="w-10 h-10 rounded-full border-2 border-gray-300 shadow-md"
      />
      <div className="flex flex-col">
        <span className="font-semibold text-sm text-gray-800">{name}</span>
        <span className="text-xs text-gray-500">Student</span>
      </div>
    </div>
  );
};
