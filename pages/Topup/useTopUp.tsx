import { useCallback, useState,useRef } from "react"
import { iItemTopUp } from "../../data/interface"

const useTopUp = () => {


  const first = useRef<iItemTopUp>()

  const [selectedTopup, setSelectedTopup] = useState<iItemTopUp>()
  const [textInput, setTextInput] = useState<String>()


  const linkWa = `https://api.whatsapp.com/send?phone=6585706425856&text=Nick+%3A+Arungi+Cahaya%0AID+%3A+Arung%0AServer+%3A+12312312%0AOrder+%3A+${textInput}%0ASS+sisa+diamond+UC+%3A+20`

  const selectTopUpNya = (item : iItemTopUp) => (
    first.current = item
  )

  return{
    setSelectedTopup,
    selectedTopup,
    setTextInput,
    textInput,
    selectTopUpNya,
    first,
    linkWa
  }
}

export default useTopUp 