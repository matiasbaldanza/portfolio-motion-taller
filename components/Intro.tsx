import React from "react"
import Image from "next/image"
import Link from "next/link"

// Icons
import { FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { BsArrowRight } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
// Data
import { personalData } from "@/lib/data"

export default function Intro() {
  const { name, linkedin, github } = personalData;

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
        <span className="font-bold">¡Hola! Soy {name}.</span> <br /> Soy un {" "}
        <span className="font-bold">front-end developer</span> con{" "}
        <span className="font-bold">2 años</span> de experiencia.  Trabajo con {" "}
        <span className="underline">React (Next.js) y Astro</span> para crear <span className="italic">sitios y aplicaciones web</span>.
      </h1>

      {/* Employment links */}
      <div className="flex flex-col items-center justify-center gap-2 text-sm text-gray-800 sm:flex-row [&>*]:w-fit">
        <Link href="#"
          className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-95"
        >
          Contacto {" "}
          <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
        </Link>

        <Link
          href="#"
          className="flex items-center gap-2 py-3 transition bg-white rounded-full outline-none cursor-pointer group px-7 focus:scale-105 hover:scale-105 active:scale-95 borderBlack dark:bg-white/10"
          download
        >
          Descargar CV {" "}
          <HiDownload className="transition opacity-60 group-hover:translate-y-1" />
        </Link>

        {/* Social links displayed in a single row */}
        <div className="flex items-center gap-2">
          <Link href={linkedin}
            className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          ><FaLinkedin size="1.8em" className="text-[#0077b5]" /></Link>
          <Link href={github}
            className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          ><FaGithubSquare size="1.8em" className="text-[#6e5494]" /></Link>
        </div>
      </div>
    </section >)
}
