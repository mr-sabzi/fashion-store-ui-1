import React from 'react'

function HeroImage() {
  return (
      <div className="w-[50%] relative h-full">
        <img
          src="/images/col-md-6.png"
          className="absolute top-[0px] -right-[75px]  w-[102%] max-w-none h-auto object-cover"
          alt="Background"
        />
      </div>
  )
}

export default HeroImage