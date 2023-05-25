import { Button, Text, TextField, View } from "react-native-ui-lib"
import { ViewFindShipping, ViewResultShipping } from "./style"
import axios from "axios"
import { useContext, useState } from "react"
import { ShippingsContext } from "../../context/shippings/ShippingsContext"

const FindYourShipping = () => {
  const {searchShipping ,dispatch} = useContext(ShippingsContext)

  const [search, setSearch] = useState('')
  const FindShipping = async(id) => {
    try {
      const res = await axios.get(`http://192.168.20.26:3000/api/shippings/${id}`)
      dispatch({type : 'searchShipping', payload: res.data})
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
    
  return (
<>
    <Text text50>Find your Shipping</Text>
    <ViewFindShipping>
      <View>
        <TextField text80
        placeholder={"What's your shipping code?"}
        floatingPlaceholder
        onChangeText={(text) => {setSearch(text)
        console.log(text)
        }}
        />
      </View>
      <Button label="Find" onPress={() =>FindShipping(search)}/>
    </ViewFindShipping>
      {
        searchShipping !== null ?
        <ViewResultShipping >
          <Text text60>Your Shipping Details</Text>
          <Text text80>Place to Dispatch: {searchShipping?.placeDispatch}</Text>
          <Text text80>Place to Destination: {searchShipping?.placeDestination}</Text>
          <Text text80>Date Dispatch: {searchShipping?.createdAt}</Text>
          <Text text80>Estimate Delivery: {searchShipping?.EstimateDelivery}</Text>
        </ViewResultShipping>
      :''
      }
</>
  )
}

export default FindYourShipping