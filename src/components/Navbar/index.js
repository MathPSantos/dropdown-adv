import "./style.css";

export function Navbar({ children }) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{children}</ul>
    </nav>
  );
}
