import { MapContext } from "./ShippingsContext"

const INITIAL_STATE = {
}

const MapProvider = ({children}) => {



  return (
    <MapContext.Provider value={INITIAL_STATE}>
        {children}
    </MapContext.Provider>
  )
}

export default MapProvider