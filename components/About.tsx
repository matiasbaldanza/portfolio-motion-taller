'use client'

import React, { useState } from 'react'
import SectionContainer from '@/components/SectionContainer'
import clsx from 'clsx'

export default function About() {
  const [showHistory, setShowHistory] = useState(false)

  return (
    <SectionContainer
      heading="Acerca de mí"
      id="about"
      className="flex flex-col px-4 sm:px-10 gap-4 [&>*]:text-balance [&>*]:leading-8"
    >
      {showHistory ? (
        <>
          <p className="text-gray-500"
            onClick={() => {
              setShowHistory(!showHistory)
            }}>
            Trabajé muchos años en soporte técnico, como sysadmin y capacitador. <span className="italic">Lo que siempre me atrajo del área técnica es la resolución de problemas</span>. <span className="underline">No hay nada más gratificante</span> que resolver algo combinando tecnologías y análisis. Fuera de mi empleo, siempre realicé proyectos ocasionales de <span className="font-medium">desarrollo full-stack</span>, en formato freelance, trabajando con PHP (CodeIgniter, Laravel) y Ruby (Ruby on Rails).
          </p>
          <p className="text-gray-500"
            onClick={() => {
              setShowHistory(!showHistory)
            }}>
            En 2015, buscando una alternativa más dinámica y con mejores perspectivas, me dediqué a la traducción de y al inglés.
          </p>
        </>
      ) : null}
      <p>
        Luego de trabajar en el área técnica y la traducción {" "}
        <button
          className={clsx('underline transition duration-300', showHistory && 'bg-blue-200 rounded-2xl  bg-opacity-50')}
          onClick={() => {
            setShowHistory(!showHistory)
          }}
        >
          ({showHistory ? 'ocultar detalle' : 'ver detalle'}),
        </button>
        en 2021 decidí dedicarme de lleno a la programación, y comencé a capacitarme con cursos y proyectos personales como desarrollador front-end, utilizando principalmente <span className="font-medium">React</span>, <span className="font-medium">Next.js</span> y <span className="font-medium">TypeScript</span>. También tengo experiencia utilizando <span className="font-medium">Remix.run</span> y <span className="font-medium">Vite</span>, además de <span className="font-medium">TailwindCSS</span>.
      </p>
      <p>
        Tengo experiencia gestionando despliegues en <span className="font-medium">Serverless (AWS, Netlify, Vercel)</span> y <span className="font-medium">servidores (VPS, Digital Ocean)</span> utilizando <span className="font-medium">Docker</span> y <span className="font-medium">GitHub Actions</span>.
      </p>
      <p className="text-xl">
        Me motivan los desafíos técnicos y la resolución de problemas. Si bien mi mayor experiencia es trabajando como freelance y soy autosuficiente, <span className="italic font-medium">priorizo las oportunidades de trabajar en equipo</span>.
      </p>
    </SectionContainer>
  )
}
