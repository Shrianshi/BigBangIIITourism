import { useContext } from "react"
import BillContext from "./billProvider"

const useBill = () => {
  return useContext(BillContext)
}

export default useBill