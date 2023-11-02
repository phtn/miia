import { useEffect, useState } from "react"
import { toggleState } from "../_utils/helpers"
import { useTheme } from "next-themes"

const useToggleMode = () => {
  const { setTheme } = useTheme()
  const [checked, setChecked] = useState(false)

  const toggleMode = () => toggleState(setChecked)

  useEffect(() => {

    if (checked) {
      setTheme('dark')
    } else {
      setTheme('light')
    }

  }, [checked])

  return { checked, toggleMode }
}

export default useToggleMode