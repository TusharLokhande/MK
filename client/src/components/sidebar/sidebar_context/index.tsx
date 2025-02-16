import React, { ReactNode, useState } from "react";

interface ISidebarContext {
  open: boolean;
  openMobile: boolean;
  active: string;
  toggleSidebar: () => void;
  handleActive: (value: string) => void;
  showSidebar: boolean;
}

const SIDEBAR_KEYBOARD_SHORTCUT = "b";

const SidebarContext = React.createContext<ISidebarContext | null>(null);

export const useSidebar = () => {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
};

const SidebarContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState<boolean>(true);
  const [active, setActive] = useState<string>("");
  const [openMobile, setOpenMobile] = useState<boolean>(true);
  const [showSidebar, setShowSideBar] = useState<boolean>(true);
  const isMobile = false;

  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  const handleActive = React.useCallback(
    (value: string) => {
      setActive(value);
    },
    [setActive]
  );

  const defaultValue = React.useMemo<ISidebarContext>(
    () => ({
      open,
      openMobile,
      active,
      toggleSidebar,
      handleActive,
    }),
    [open, active, toggleSidebar]
  );

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  return (
    <SidebarContext.Provider value={defaultValue}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
