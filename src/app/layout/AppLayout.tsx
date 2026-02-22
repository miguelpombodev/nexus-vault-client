import { Outlet } from "react-router-dom";

import { Header } from "@/shared/components/Header";
import { SidebarInset, SidebarProvider } from "@/shared/components/ui/sidebar";

import { AppSidebar } from "../components/Sidebar/AppSidebar";

export function AppLayout() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <Header />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
