import { useLocation } from "react-router-dom";
import ContactInfo from "../../molecules/contactInfo/ContactInfo";
import PromoMessage from "../../molecules/promoMessage/PromoMessage";
import SocialLinks from "../../molecules/socialLinks/SocialLinks";
function HeaderInfo() {
  const location = useLocation();
  const isProductPage = location.pathname.startsWith("/products");
  return (
    <div
      className={`hidden w-full md:flex flex-wrap p-4 px-7  text-white justify-between text-[14px] font-bold gap-y-2 ${
        isProductPage ? "bg-[#23856D] text-white" : "bg-[#252B42] "
      }"
        `}
    >
      <ContactInfo />

      <PromoMessage />
      <SocialLinks />
    </div>
  );
}

export default HeaderInfo;
