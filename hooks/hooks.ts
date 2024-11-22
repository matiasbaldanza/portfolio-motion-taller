import { useActiveSectionContext } from "@/context/ActiveSectionContext"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import type { SectionName } from "@/components/SectionContainer"

export function useSectionInView(
  section: SectionName,
  threshold = 0.75
) {
  const { ref, inView } = useInView({ threshold })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(section)
      // console.log(section)
    }
  }, [inView, setActiveSection, timeOfLastClick, section])

  return { ref }
}
