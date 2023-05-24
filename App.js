import {  View } from 'react-native'
import ShippingList from './components/ShippingList'
import ShippingsProvider from "./context/shippings/ShippingsProvider"
import FormAddShipping from "./components/FormAddShipping"

export default function App() {
  return (
    <ShippingsProvider>
      <View >
        <FormAddShipping />
        {/* <ShippingList /> */}
      </View>
    </ShippingsProvider>
  )
}

