import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'
const ShippingList = () => {

  const [listShipping, setListShipping] = useState([])

  const fetchShippingList = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/shippings')
      setListShipping(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchShippingList()
  }, [])

  return (
    <>
      <Text>Shipping List</Text>
      <View>
        {listShipping.map(shipping => (
          <View key={shipping._id}>
            <Text>Place of Dispatch: {shipping.placeDispatch}</Text>
          </View>
        ))}
      </View>
    </>
  )
}

export default ShippingList