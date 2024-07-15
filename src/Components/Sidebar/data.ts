 
import { FAQ, Forum, Home, Learn } from "../../Assets/Index";
import { UserAccountType } from "../../types";

export interface SidebarLinks {
  id: number;
  title: string;
  url: string;
  image?: string | React.ReactElement;
}


export const guestSidebarLinks: SidebarLinks[] = [
  {
    id: 1,
    title: "Dashboard",
    url: "dashboard",
    image: Home,
  },
  {
    id: 2,
    title: "My Learning",
    url: "learning",
    image: Learn,
  },
  {
    id: 3,
    title: "Student Forum",
    url: "forum",
    image: Forum,
  },
  {
    id: 4,
    title: "FAQs",
    url: "faqs",
    image: FAQ,
  },
];

export const adminSidebarLinks: SidebarLinks[] = [
  {
    id: 1,
    title: "Dashboard",
    url: "Dashboard",
    // headingText: "Dashboard",
  },
  {
    id: 2,
    title: "Apartments",
    url: "apartments",
    // headingText: "Apartments",
  },
  {
    id: 3,
    title: "Bookings",
    url: "bookings",
    // headingText: "Bookings",
    // image: Bookings,
  },
  {
    id: 4,
    title: "Users",
    url: "users",
    // headingText: "Users",
    // image: Profile,
  },
  {
    id: 5,
    title: "Notifications",
    url: "notification",
    // headingText: "Notifications",
    // image: Notifications,
  },
  {
    id: 6,
    title: "Chat",
    url: "chat",
    // headingText: "Chat",
    // image: Help,
  },
];

export const sidebarLinks: Record<UserAccountType, SidebarLinks[]> = {
  [UserAccountType.GUEST]: guestSidebarLinks,
  [UserAccountType.ADMIN]: adminSidebarLinks,
};


export default sidebarLinks;
