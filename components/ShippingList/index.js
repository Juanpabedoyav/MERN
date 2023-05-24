import { useContext } from 'react'
import { Text, View } from 'react-native'
import { ShippingsContext } from "../../context/shippings/ShippingsContext"
const ShippingList = () => {

  const {shippings} = useContext(ShippingsContext)

  

  return (
    <>
      <Text>Shipping List</Text>
      <View>
        {shippings.map(shipping => (
          <View key={shipping._id}>
            <Text>Place of Dispatch: {shipping.placeDispatch}</Text>
          </View>
        ))}
      </View>
    </>
  )
}

export default ShippingList