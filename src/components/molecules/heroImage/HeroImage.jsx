import React from 'react'

function HeroImage() {
  return (
<div className="md:w-1/2 w-full relative h-[620px]  overflow-visible ">
  <img
    src="/images/col-md-6.png"
    className="absolute bottom-0 md:-right-16 right-0 h-full w-auto object-contain scale-100 md:block hidden"
    alt=""
  />
    <img
    src="/images/col-md-7.png"
    className="absolute -bottom-5 right-0 h-full w-auto object-contain scale-100 md:hidden block "
    alt=""
  />
</div>

  )
}

export default HeroImage