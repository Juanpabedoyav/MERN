import {View, TextField, Text, Button} from 'react-native-ui-lib';

const FormAddShipping = () => {
const handleAddShipping = async() => {
 

}

  return (
    <View flex paddingH-25 paddingT-120>
    <Text blue50 text20>Welcome</Text>
    <TextField text50 placeholder="username" grey10/>
    <TextField text50 placeholder="password" secureTextEntry grey10/>
    <TextField text50 placeholder="password" secureTextEntry grey10/>
    <TextField text50 placeholder="password" secureTextEntry grey10/>

    <View marginT-100 center>
      <Button link text70 orange30 label="Add New Shipping" marginT-20 />
    </View>
  </View>
  )
}
export default FormAddShipping