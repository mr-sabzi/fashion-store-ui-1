import SponsorLogos from "../../../data/sponsors";
import SponsorLogo from "../../molecules/sponsorLogo/SponsorLogo";

export default function SponsorsSection() {
  return (
    <div className="flex flex-col md:flex-row  flex-wrap gap-14 md:gap-24 mt-20">
      {SponsorLogos.map((item) => (
        <SponsorLogo key={item.id} item={item} />
      ))}
    </div>
  );
}
