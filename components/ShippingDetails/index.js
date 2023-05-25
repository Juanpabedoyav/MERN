import {  Text } from "react-native-ui-lib"
import { useContext, useState } from "react"
import { ShippingsContext } from "../../context/shippings/ShippingsContext"
import { useParams } from "react-router-native"
import { ViewResultShipping } from "../FindYourShipping/style"

const ShippingDetails = () => {
    const {shippings} = useContext(ShippingsContext)
    const {id} = useParams()
    const searchShipping = shippings.find(shipping => shipping.id === id)

  return (
<>
    <Text text50>Details</Text>
      {
        searchShipping !== null ?
        <ViewResultShipping >
          <Text text80>Place to Dispatch: {searchShipping?.placeDispatch}</Text>
          <Text text80>Place to Destination: {searchShipping?.placeDestination}</Text>
          <Text text80>Date Dispatch: {searchShipping?.createdAt}</Text>
          <Text text80>Estimate Delivery: {searchShipping?.EstimateDelivery}</Text>
        </ViewResultShipping>
      : <Text text80>Shipping not found</Text>
      }
</>
  )
}

export default ShippingDetails