import {View, TextField,  Button, Modal, Text} from 'react-native-ui-lib';
import { ViewMain, ViewModal } from "./styles";
import { useContext, useState } from "react";
import { ShippingsContext } from "../../context/shippings/ShippingsContext";
import { Link } from "react-router-native";


const FormAddShipping = () => {
 
  const {newShipping, dispatch} = useContext(ShippingsContext)
  const [visible, setVisible] = useState(false);
  const hideModal = () => setVisible(false);

  const test = {
  "placeDispatch" : "Medellin, CO",
  "placeDestination" : "Nuewva York, USA",
  "dateDispatch" : "2023-10-10",
  "EstimateDelivery" : "10 dias ",

}

const AddNewShipping = async( data) => {
  await fetch('http://192.168.20.26:3000/api/shippings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  // console.log(data)
   dispatch({type : 'newShipping', payload: data})  
  setVisible(true);

  }


  return (
    <>
      <Text text50>Create New Shipping</Text>
    <ViewMain>
      <View>
        <TextField
        placeholder={'Place to Dispatch'}
        floatingPlaceholder
        />
        <TextField  placeholder="Place to Destination" 
        floatingPlaceholder
        />
          <TextField  placeholder="Date Dispatch" 
        floatingPlaceholder
        />
          <TextField  placeholder="Estimate Delivery" 
        floatingPlaceholder
        />
      </View>
      <Button label="Add New Shipping" onPress={() =>AddNewShipping(test)}/>
      <Link to="/">
        <Text>Go to Home</Text>
      </Link>
    </ViewMain>
    <Modal visible={visible} onBackgroundPress={hideModal} overlayBackgroundColor={'#C0C0C0'}>
      <ViewModal >
        <Text text60>New Shipping Details</Text>
        <Text text80>Place to Dispatch: {newShipping?.placeDispatch}</Text>
        <Text text80>Place to Destination: {newShipping?.placeDestination}</Text>
        <Text text80>Date Dispatch: {newShipping?.createdAt}</Text>
        <Text text80>Estimate Delivery: {newShipping?.EstimateDelivery}</Text>
        <Button label="Close" onPress={() =>hideModal()} />
      </ViewModal>
     </Modal>
    </>
  )
}

export default FormAddShipping