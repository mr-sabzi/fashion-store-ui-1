import NavItem from "../navItem/NavItem";

export default function MobileMenu({ menuOpen }) {
  return (
    <>
      {menuOpen && (
        <div className="w-full md:hidden flex flex-col bg-white items-center">
          <ul className="h-[30vh] w-3/5 flex flex-col justify-around items-center text-[30px]">
            <li className="w-full ">
              <NavItem to="/" className="w-full flex justify-center">
                Home
              </NavItem>
            </li>
            <li className="w-full">
              <NavItem to="/products" className="w-full flex justify-center">
                Product
              </NavItem>
            </li>
            <li className="w-full">
              <NavItem to="/pricing" className="w-full flex justify-center">
                Pricing
              </NavItem>
            </li>
            <li className="w-full">
              <NavItem to="/contact" className="w-full flex justify-center">
                Contact
              </NavItem>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
