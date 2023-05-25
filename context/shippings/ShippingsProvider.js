import { useEffect, useReducer } from "react"
import { ShippingsContext } from "./ShippingsContext"
import { ShippingsReducer } from "./ShippingsReducer"
import axios from "axios"

const INITIAL_STATE = {
    shippings: [],
    newShipping: null,
    searchShipping: null
}

const ShippingsProvider = ({children}) => {
const [state, dispatch] = useReducer(ShippingsReducer, INITIAL_STATE)

    const fetchShippingList = async () => {
        try {
          const res = await axios.get('http://192.168.20.26:3000/api/shippings')
          dispatch({type : 'setShippings', payload: res.data})
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(() => {
        fetchShippingList()
      }, [])
    

  return (
    <ShippingsContext.Provider value={{...state,
    dispatch} }>
        {children}
    </ShippingsContext.Provider>
  )
}

export default ShippingsProvider