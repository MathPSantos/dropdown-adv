import { useState } from "react";
import { ArrowLeft, ChevronDown, Settings, User } from "react-feather";
import { CSSTransition } from "react-transition-group";

import "./style.css";

export function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight + 32;
    setMenuHeight(height);
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<User />}>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<Settings />}
            rightIcon={<ChevronDown />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<ArrowLeft />} goToMenu="main" />
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );

  function DropdownItem({ children, leftIcon, rightIcon, goToMenu }) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => goToMenu && setActiveMenu(goToMenu)}
      >
        <span className="icon-button">{leftIcon}</span>

        {children}

        <span className="icon-right">{rightIcon}</span>
      </a>
    );
  }
}
