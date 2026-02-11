import Span from "../../atoms/Span/Span";
import Icon from "../../atoms/icon/Icon";
import Button from "../../atoms/button/Button";
import { useState } from "react";
import NavItem from "../../molecules/navItem/NavItem";

export default function HeaderActions({ menuOpen, setMenuOpen }) {
  return (
    <>
      <div className="flex gap-7 items-center">
        <div className="gap-1 md:flex hidden items-center text-[#23A6F0] text-[14px]  ">
          <Icon name="login" />
          <NavItem to="/login">
            <Span classname="text-[#23A6F0]">Login</Span>
          </NavItem>
          <Span>/</Span>
          <NavItem to="/SignUp">
            <Span classname="text-[#23A6F0]">Register</Span>
          </NavItem>
        </div>
        <div className="md:flex hidden">
          <Icon name="search" />
        </div>
        <div className="md:hidden flex">
          <Icon name="searchRispose" />
        </div>
        <div className="md:flex hidden items-center gap-1">
          <Icon name="shoppingcart" />
          <Span classname="text-[#23A6F0] text-[12px]">1</Span>
        </div>
        <div className="md:hidden flex">
          <Icon name="shoppingcartRisponse" />
        </div>
        <div className="md:flex items-center gap-1 hidden">
          <Icon name="Like" />
          <Span classname="text-[#23A6F0] text-[12px]">1</Span>
        </div>
        <div className="flex items-center md:hidden ">
          <Button onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? (
              <Icon name="hamberger-menu-open" />
            ) : (
              <Icon name="hamberger-menu" />
            )}
          </Button>
        </div>
      </div>
    </>
  );
}
