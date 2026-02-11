import { NavLink } from "react-router-dom";

function NavItem({ to, children, className = ""  }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? "text-black ": "text-[#737373]"} ${className}`
      }
    >
      {children}
    </NavLink>
  );
}

export default NavItem;
