export interface NavItem {
  id: string;
  label: string;
}

/** Single source of truth for nav links, scroll-spy ids, and section anchors. */
export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "background", label: "Background" },
  { id: "methodology", label: "Methodology" },
  { id: "findings", label: "Findings" },
  { id: "analysis", label: "Analysis" },
  { id: "videos", label: "Videos" },
  { id: "recommendations", label: "Recommendations" },
  { id: "evidence", label: "Evidence" },
  { id: "references", label: "References" },
];
