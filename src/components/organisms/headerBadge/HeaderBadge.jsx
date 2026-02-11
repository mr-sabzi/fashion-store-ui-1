import Span from "../../atoms/Span/Span";
import Icon from "../../atoms/icon/Icon";
import Button from "../../atoms/button/Button";
import { useState } from "react";
import NavItem from "../../molecules/navItem/NavItem";
import Logo from "../../molecules/logo/Logo";
import NavbarLinks from "../../molecules/navbarLinks/NavbarLinks";
import HeaderActions from "../../molecules/headerActions/HeaderActions";
import MobileMenu from "../../molecules/mobileMenu/MobileMenu";
function HeaderBadge() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="h-[58px] w-full px-7 items-center justify-between font-bold flex bg-white text-black">
        <Logo />
        <NavbarLinks />
        <HeaderActions menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <MobileMenu menuOpen={menuOpen} />
    </>
  );
}

export default HeaderBadge;
