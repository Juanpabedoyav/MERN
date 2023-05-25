import {View, TextField,  Button} from 'react-native-ui-lib';
import { ViewMain } from "./styles";
import { useState } from "react";

const FormAddShipping = () => {
const  [input, setInput] = useState({
  "placeDispatch" : "",
  "placeDestination" : ""
})

const newShipping = async() => {
  

}
  return (
    <>

      {/* <Text text50>Create New Shipping</Text> */}
   
    <ViewMain>
      <View>
        <TextField
        placeholder={'Place to Dispatch'}
        floatingPlaceholder
        />
        <TextField  placeholder="Place to Destination" 
        floatingPlaceholder
        />
      </View>
      <Button label="Add New Shipping"/>
    </ViewMain>
    </>
  )
}
export default FormAddShipping