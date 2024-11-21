import React from "react"
import Image from "next/image"

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image
            src="/matias-baldanza-profile-image.png"
            alt="Foto de perfil de Matías Baldanza"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
          <span className="absolute bottom-0 left-0 text-4xl">
            👋
          </span>
        </div>
      </div>
    </section>)
}
