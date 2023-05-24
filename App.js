import { StyleSheet,  View } from 'react-native'
import ShippingList from './components/ShippingList'
import ShippingsProvider from "./context/shippings/ShippingsProvider"
// import FormAddShipping from './components/FormAddShipping'

export default function App() {
  return (
    <ShippingsProvider>
      <View style={styles.container}>
        <ShippingList />
      </View>
    </ShippingsProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    padding: 20,
    borderWidth: 5,
    justifyContent: 'flex-start',
  },
})
