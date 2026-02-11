import React from 'react'
import NavItem from "../../molecules/navItem/NavItem";

export default function NavbarLinks() {
  return (
        <div className="gap-6 md:flex text-[14px] hidden ">
          
          <NavItem to="/">Home</NavItem>
          <NavItem to="/products">Shop</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/pricing">Pricing</NavItem>
          <NavItem to="/team">Team</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </div>
  )
}
