export default function SponsorLogo({ item }) {
  return (
    <div className="flex items-center">
      <a href="">
        <img src={item.img} alt={item.name} />
      </a>
    </div>
  )
}