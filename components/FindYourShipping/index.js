import { Button, TextField, View } from "react-native-ui-lib"

const FindYourShipping = () => {
  return (
    <View>
        <View>
            <Text>Find Your Shipping</Text>
        </View>
    <TextField placeholder="What's your Shipping id ?"></TextField>
    <Button label="Find" />
    </View>
  )
}

export default FindYourShipping