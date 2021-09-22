import { useState } from "react";
import "./style.css";

export function NavItem({ icon, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setIsOpen(!isOpen)}>
        {icon}
      </a>

      {isOpen && children}
    </li>
  );
}
