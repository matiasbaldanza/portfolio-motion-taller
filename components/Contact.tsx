import React from 'react'
import SectionContainer from '@/components/SectionContainer'
import { personalData } from '@/lib/data'

export default function Contact() {
  return (
    <SectionContainer
      heading="Contacto"
      id="contact"
      className="flex flex-col px-4 sm:px-10 gap-4 [&>*]:text-balance [&>*]:leading-8"
    >
      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Por favor, contáctame directamente a{" "}
        <a className="underline" href={`mailto:${personalData.email}?subject=Contacto desde tu portfolio`}>
          {personalData.email}
        </a>{" "}
        o a través de este formulario.
      </p>

      <form
        className="flex flex-col mt-10 dark:text-black"
      >
        <input
          className="px-4 transition-all rounded-lg h-14 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Tu email"
        />
        <textarea
          className="p-4 my-3 transition-all rounded-lg h-52 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="message"
          placeholder="Tu mensaje"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
          disabled
        >
          Enviar
        </button>
      </form>
    </SectionContainer>
  )
}
