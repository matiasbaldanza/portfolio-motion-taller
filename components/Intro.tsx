import React from "react"
import Image from "next/image"

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        {/* Profile image */}
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

      {/* Greeting */}
      <h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-balance">
        <span className="font-bold">¡Hola! Soy Matías.</span> <br /> Soy un {" "}
        <span className="font-bold">front-end developer</span> con{" "}
        <span className="font-bold">2 años</span> de experiencia.  Trabajo con {" "}
        <span className="underline">React (Next.js) y Astro</span> para crear <span className="italic">sitios y aplicaciones web</span>.
      </h1>
    </section>)
}
