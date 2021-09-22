import { Plus, Bell, MessageCircle, ChevronDown } from "react-feather";

import { Navbar } from "./components/Navbar";
import { NavItem } from "./components/NavItem";
import { DropdownMenu } from "./components/Dropdown";

export function App() {
  return (
    <Navbar>
      <NavItem icon={<Plus />} />
      <NavItem icon={<Bell />} />
      <NavItem icon={<MessageCircle />} />

      <NavItem icon={<ChevronDown />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}
