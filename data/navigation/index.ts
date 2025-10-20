export interface NavigationItem {
  href: string;
  label: string;
  icon: string;
  external?: boolean;
  description?: string;
  badge?: string;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

export const mainNavigation: NavigationItem[] = [
  {
    href: "/",
    label: "Trang chủ",
    icon: "Home",
    description: "Trang chủ của website",
  },
  {
    href: "/tin-tuc",
    label: "Tin tức",
    icon: "Newspaper",
    description: "Tin tức và sự kiện mới nhất",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61579595318543",
    label: "Cộng đồng",
    icon: "Users",
    external: true,
    description: "Tham gia cộng đồng Facebook",
  },
  {
    href: "/group",
    label: "Group",
    icon: "MessageCircle",
    description: "Thảo luận trong group",
  },
];

export const socialLinks: NavigationItem[] = [
  {
    href: "https://www.facebook.com/profile.php?id=61579595318543",
    label: "Facebook",
    icon: "Facebook",
    external: true,
    description: "Theo dõi trên Facebook",
  },
];
