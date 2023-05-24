import { StyleSheet,  View } from 'react-native'
import ShippingList from './components/ShippingList'
// import FormAddShipping from './components/FormAddShipping'

export default function App() {
  return (
    <View style={styles.container}>
      <ShippingList />
    </View>
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
