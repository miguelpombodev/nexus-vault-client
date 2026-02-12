import { DropdownMenuItem } from "@/shared/components/ui/dropdown-menu";

export function DropdownMenuCell({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenuItem className="flex items-center text-white flex-row gap-4 p-2 ">
      {children}
    </DropdownMenuItem>
  );
}
