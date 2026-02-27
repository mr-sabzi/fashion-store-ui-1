import SponsorLogo from '../../molecules/sponsorLogo/SponsorLogo'

const SponsorLogos = [
  { id: 1, name: "hooli", img: "/images/fa-brands-1.png" },
  { id: 2, name: "lya", img: "/images/fa-brands-4.png" },
  { id: 3, name: "flower", img: "/images/fa-brands-5.png" },
  { id: 4, name: "stripe", img: "/images/Vector.png" },
  { id: 5, name: "aws", img: "/images/Vector2.png" },
  { id: 6, name: "robat", img: "/images/Vector3.png" },
]

export default function SponsorsSection() {
  return (
    <div className="flex flex-col md:flex-row  flex-wrap gap-14 md:gap-24 mt-20">
      {SponsorLogos.map(item => (
        <SponsorLogo key={item.id} item={item} />
      ))}
    </div>
  )
}