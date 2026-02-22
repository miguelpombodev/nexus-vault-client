import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

import { fetchUserData } from "@/features/users/api/fetchUserData";
import type { UserDataResponse } from "@/features/users/types/responses/userDataResponse.type";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/shared/components/ui/sidebar";
import { getUserNameInitials } from "@/shared/utils/names.utils";

import { DropdownMenuCell } from "../DropDownMenu/DropdownMenuCell";
import { SkeletonAvatar } from "../Skeleton/SkeletonAvatar";

export function AppSidebarUser() {
  const { isMobile } = useSidebar();
  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUserData,
  });

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {userData && !isLoading ? (
              <SidebarMenuButton
                size="lg"
                className="text-primary data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar className="h-11 w-11 rounded-2xl border-blue_primary border-2 p-1">
                  <AvatarImage
                    src={userData.avatar}
                    alt={userData.name}
                    className=""
                  />
                  <AvatarFallback className="rounded-lg border-2 border-blue_primary">
                    {getUserNameInitials(userData.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{userData.name}</span>
                  <span className="truncate text-xs">{userData.email}</span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>
            ) : (
              <SkeletonAvatar />
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg bg-black flex flex-col justify-center"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuCell>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuCell>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuCell>
                <BadgeCheck />
                Account
              </DropdownMenuCell>
              <DropdownMenuCell>
                <CreditCard />
                Billing
              </DropdownMenuCell>
              <DropdownMenuCell>
                <Bell />
                Notifications
              </DropdownMenuCell>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuCell>
              <LogOut />
              Log out
            </DropdownMenuCell>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
