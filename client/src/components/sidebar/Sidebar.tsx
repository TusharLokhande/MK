import React, { FC, useState } from "react";
import { cn } from "../../utils/utils";
import { HomeIcon, PanelLeft, Database } from "lucide-react";
import { ScrollArea } from "../scrollarea";
import {
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from "./components";
import { useSidebar } from "./sidebar_context";
import { ISidebarGroup } from "./types";

const data: ISidebarGroup[] = [
  {
    groupName: "Main menu",
    menuItems: [
      {
        icon: <HomeIcon className="size-6 shrink-0" />,
        hasSubOptions: false,
        name: "Home",
        href: "#",
        systemName: "home",
      },
      {
        icon: <Database className="size-6 shrink-0" />,
        name: "Database",
        href: "#",
        hasSubOptions: true,
        subMenuItems: [],
        systemName: "database",
      },
    ],
  },
];

export const Sidebar = () => {
  // const [open, setOpen] = useState(true);

  const { open, toggleSidebar } = useSidebar();

  return (
    <div className="group" data-state={open ? "expanded" : "collapsed"}>
      <div
        className={cn(
          "relative duration-300 transition-[left,right,width] ease-linear",
          "w-[16rem] duration-300 transition-all border-primary h-svh border-r fixed",
          "group-data-[state=collapsed]:w-[3rem] group-data-[state=expanded]:p-2"
        )}
      >
        {/* Header  */}
        <div className="h-[48px] flex justify-between items-center group-data-[state=collapsed]:justify-center">
          <div className="flex gap-2 items-center group-data-[state=collapsed]:hidden sticky">
            <img
              src={
                "https://img.icons8.com/?size=100&id=sGV8MeP6kxk2&format=png&color=000000"
              }
              className="object-fill size-10"
            />
            <span className="brand_name text-xl">Learn's Cafe</span>
          </div>
          <div className="flex items-center">
            <PanelLeft className="text-slate-400" onClick={toggleSidebar} />
          </div>
        </div>

        <Seprator className="" />

        {/* Content  */}
        <ScrollArea className="h-[80%]">
          {/* <SidebarGroup /> */}

          {data.map((i, j) => (
            <SidebarGroup key={`group-${j}`} data={i} />
          ))}
        </ScrollArea>

        <Seprator />
        {/* Footer  */}
        <div className="h-[100px] fixed">Footer</div>
      </div>
    </div>
  );
};

const Seprator: FC<{ className?: string }> = ({ className = "" }) => (
  // <div className="h-[1px] bg-slate-100 my-2" />
  <div
    data-sidebar="separator"
    className={cn("mx-2 w-auto bg-slate-300 h-[1px]", className)}
  />
);

const SidebarGroup: FC<{ data: ISidebarGroup }> = ({ data }) => {
  return (
    <div
      data-sidebar="group"
      className="relative flex w-full min-w-0 flex-col p-2"
    >
      {/* SidebarGroupLabel  */}
      <SidebarGroupLabel className="">{data.groupName}</SidebarGroupLabel>

      <SidebarGroupContent>
        <SidebarMenu>
          {data.menuItems?.map((menuItem) => (
            <>
              <SidebarMenuItem
                Active={true}
                className="flex items-center justify-between"
                menuItem={menuItem}
              >
                <a href="#" className="flex gap-2 items-center">
                  {menuItem.icon}
                  <span className="group-data-[state=collapsed]:hidden text-md font-semibold">
                    {menuItem.name}
                  </span>
                </a>
              </SidebarMenuItem>
            </>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </div>
  );
};

const SidebarGroupLabel: FC<{
  children: React.ReactNode;
  className: string;
}> = ({ children, className = "" }) => {
  return (
    <div
      className={cn(
        (className =
          "group-data-[state=collapsed]:hidden duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-none transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0"),
        "",
        className
      )}
    >
      {children}
    </div>
  );
};
