import React from "react"

export default () => (
  <div className="flex">
    <div className="flex-1 bg-golden font-body h-screen w-2/5 overflow-hidden">
      <video
        autoplay="true"
        loop="true"
        muted="true"
        className="object-cover bg-auto min-w-full h-full"
      >
        <source
          src={`../../videos/juanaSkirtRGB.webm`}
          alt="Juana Skirt Colored"
          type="video/webm"
        />
      </video>
    </div>
    <div className="flex-none bg-silvered font-body h-screen w-1/5 text-gray-400">
      <ul>
        <li>KYRA</li>
        <li>COLLECTIONS</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </div>
    <div className="flex-1 bg-silvered font-body h-screen w-2/5">
      <video autoplay="true" loop="true" muted="true" className="h-full">
        <source
          src={`../../videos/juanaSkirtBW.webm`}
          alt="Juana Skirt BnW"
          type="video/webm"
        />
      </video>
    </div>
  </div>
)
