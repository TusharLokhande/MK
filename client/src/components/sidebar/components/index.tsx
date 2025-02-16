import React, { FC, ReactNode, useMemo, useState } from "react";
import { cn } from "../../../utils/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { IMenuOption } from "../types";
import { useSidebar } from "../sidebar_context";

type DefaultProps = {
  children: ReactNode;
  className?: string;
};

export const SidebarGroupContent: FC<DefaultProps> = ({
  className = "",
  ...props
}) => {
  return <div className={cn("w-full text-sm", className)} {...props} />;
};

export const SidebarMenu: FC<DefaultProps> = ({ className = "", ...props }) => {
  return (
    <ul
      className={cn("flex w-full min-w-0 flex-col gap-2", className)}
      {...props}
    />
  );
};

export const SidebarMenuItem: FC<{
  className?: string;
  menuItem: IMenuOption | null;
  children: ReactNode;
}> = ({ children, className = "", menuItem = null, ...props }) => {
  //# Internal state
  const [_open, _setOpen] = useState<boolean>(false);
  const { active, handleActive } = useSidebar();

  const isExpanded: boolean = useMemo(() => {
    if (!menuItem?.hasSubOptions) return false;

    if (menuItem?.systemName != active) return false;

    if (_open && active == menuItem?.systemName) return true;

    if (!_open && active == menuItem?.systemName) return false;
    return false;
  }, [active, SecurityPolicyViolationEvent, _open, _setOpen]);

  const toggle = () => {
    handleActive(String(menuItem?.systemName));
    _setOpen((prev) => !prev);
  };

  return (
    <li
      className={cn(
        "duration-200 transition-colors ease-linear px-2 py-2 rounded-md border-2 overflow-hidden",
        "group-data-[state=collapsed]:p-1 border-none",
        `${
          menuItem?.systemName === active
            ? "bg-primary text-white"
            : "hover:bg-primary-soft bg-blend-soft-light hover:text-white"
        }`,
        className
      )}
      {...props}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        toggle();
      }}
    >
      <>{children}</>

      <div
        className={cn(
          "group-data-[state=collapsed]:hidden transition-all duration-200 ease-linear",
          `${!menuItem?.hasSubOptions && "hidden"}`
        )}
      >
        {!isExpanded ? <ChevronDown /> : <ChevronUp />}
      </div>
    </li>
  );
};
