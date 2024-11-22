import React from "react"
import { personalData } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="px-4 mx-10 mb-10 text-center text-gray-500 text-balance">
      <small className="block mb-2 text-xs">
        &copy; {new Date().getFullYear()} {personalData.fullName}. Basado en un diseño de <a href="https://www.youtube.com/@ByteGrad" target="_blank" rel="noopener noreferrer">@ByteGrad</a>.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Tecnologías utilizadas:</span> React + Next.js (App Router), TypeScript, Tailwind CSS,
        Framer Motion.
      </p>
    </footer>
  );
}
