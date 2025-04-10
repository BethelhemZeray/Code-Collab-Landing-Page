import { TNavLink } from "./type";
export const navLinks: TNavLink[] = [
  {
    id: "services",
    title: "Services",
    dropdown: [
      { title: "Authentication", href: "../Services/authenticationService" },
      { title: "Chat", href: "../Services/chatService" },
      { title: "Video Call", href: "../Services/videoService" },
      { title: "File Management", href: "../Services/fileManagementService" },
      { title: "Live Editor", href: "../Services/liveEditorService" },
      { title: "Version Control", href: "../Services/versionControlService" },
      { title: "Docker", href: "../Services/dockerService" },
      { title: "CLI", href: "../Services/CLIService" },
      { title: "Project Management", href: "../Services/projectManagementService" },
    ],
  },

  {
    id: "docs",
    title: "Docs", 
  },
  {
    id: "open source",
    title: "Open Source", 
  },
  {
    id: "enterprise",
    title: "Enterprise",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
];
