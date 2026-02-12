import { File, LayoutDashboard, LockKeyhole } from "lucide-react";

const navOptions = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      items: [],
    },
    {
      title: "Secrets",
      url: "#",
      icon: LockKeyhole,
      isActive: true,
      items: [
        {
          title: "Add new Secret",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Manage Secrets",
          url: "#",
        },
      ],
    },
    {
      title: "Files",
      url: "#",
      icon: File,
      items: [
        {
          title: "Add new File Secret",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Manage Secret Files",
          url: "#",
        },
      ],
    },
  ],
};

export default navOptions;
