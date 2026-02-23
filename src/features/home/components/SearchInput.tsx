import { Search } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/shared/components/ui/input-group";

export function SearchInput() {
  return (
    <InputGroup className="max-w-2xl bg-blue_primary text-white focus:outline-none ">
      <InputGroupInput
        placeholder="Search..."
        className="placeholder:text-white"
      />
      <InputGroupAddon>
        <Search className="text-white" />
      </InputGroupAddon>
    </InputGroup>
  );
}
