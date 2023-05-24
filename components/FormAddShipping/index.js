import { TextInput, Button,  View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// import DatePicker from 'react-native-date-picker'
const FormAddShipping = () => {
  return (
    <View>
      <TextInput
        //   style={styles.input}
        //   onChangeText={onChangeText}
        //   value={text}
        placeholder="Origin Location"
        keyboardType="ascii-capable"
      />
      <TextInput
        //   style={styles.input}
        //   onChangeText={onChangeText}
        //   value={text}
        placeholder="Destination  Location"
        keyboardType="numeric"
      />
      <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
          console.log(data, details)
        }}
        query={{
          key: 'AIzaSyCyS3JSRakMEWOBCKcTRFHwvJAUqspx2RU',
          language: 'en',
        }}
      />
      {/* <DatePicker date={''} onDateChange={''} /> */}
      <Button title="Submit"/>
    </View>
  )
}

export default FormAddShipping