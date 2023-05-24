import {View, TextField, Text, Button} from 'react-native-ui-lib';

const FormAddShipping = () => {
const handleAddShipping = async() => {
 

}

  return (
    <View >
    <Text  text20>Create New Shipping</Text>
    <TextField text50 placeholder="username" />
    <TextField text50 placeholder="password" secureTextEntry />
    <TextField text50 placeholder="password" secureTextEntry />
    <TextField text50 placeholder="password" secureTextEntry />

    <View marginT-100 center>
      <Button label="Add New Shipping"/>
    </View>
  </View>
  )
}
export default FormAddShipping