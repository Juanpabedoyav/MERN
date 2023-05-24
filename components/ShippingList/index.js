import { useContext, useState } from 'react'
import { Text, View, Button } from 'react-native'
import { ShippingsContext } from "../../context/shippings/ShippingsContext"
import ModalShipping from "../ModalShipping";
import { ListItem } from "react-native-ui-lib";
const ShippingList = () => {
  const optionsPerPage = [2, 3, 4];

  const {shippings} = useContext(ShippingsContext)
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

  

  return (
    <>
      <Text>Shipping List</Text>
      <ListItem onPress={() => console.log('pressed')}>
        {shippings.map(shipping => (
          <>
            <ListItem.Part key={shipping._id} middle>
            <Text grey10 text60 marginL-10>{shipping.placeDispatch}</Text>
               <Text grey10 text60 marginL-10>{shipping.placeDestination}</Text>
               </ListItem.Part>
          </>
          ))
        }
      </ListItem>
         
        <ModalShipping/>
    </>
  )
}

export default ShippingList
