
import HeaderInfo from "../headerInfo/HeaderInfo";

import HeaderBadge from "../headerBadge/HeaderBadge";
function Header() {


  return (
    <header className="w-full flex flex-col items-center sticky top-0 z-50">
      <HeaderInfo />
      <HeaderBadge/>
    </header>
  );
}

export default Header;
