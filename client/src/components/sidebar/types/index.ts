export interface IMenuOption {
  icon: React.ReactNode;
  name: string;
  href: string;
  hasSubOptions: boolean;
  subMenuItems?: {
    name: string;
    href: string;
  }[];
  systemName: string;
}

export interface ISidebarGroup {
  groupName: string;
  menuItems: IMenuOption[];
}
