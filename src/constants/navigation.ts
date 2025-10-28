import type { IconType } from "react-icons";
import {
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineSparkles,
  HiOutlineBeaker,
  HiOutlineChatBubbleLeftRight,
  HiOutlineEnvelope,
} from "react-icons/hi2";

export type NavigationLink = {
  label: string;
  href: string;
  icon: IconType;
};

export const NAVIGATION_LINKS: NavigationLink[] = [
  { label: "About", href: "#about", icon: HiOutlineUser },
  { label: "Experience", href: "#experience", icon: HiOutlineBriefcase },
  { label: "Projects", href: "#projects", icon: HiOutlineSparkles },
  { label: "Skills", href: "#skills", icon: HiOutlineBeaker },
  { label: "Testimonials", href: "#testimonials", icon: HiOutlineChatBubbleLeftRight },
  { label: "Contact", href: "#contact", icon: HiOutlineEnvelope },
];

export const NAV_SCROLL_HIDE_OFFSET = 96;
export const NAV_FLOATING_ACTIVATION_OFFSET = 160;
export const NAV_PRIMARY_SOCIAL_LIMIT = 3;
