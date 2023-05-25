import {  StyleSheet, View } from 'react-native'
import ShippingsProvider from "./context/shippings/ShippingsProvider"
import Main from "./screens/Main"
import FindYourShipping from "./components/FindYourShipping"
import ShippingList from "./components/ShippingList"
export default function App() {
  return (
  //  <SafeAreaProvider>
    <ShippingsProvider>
      <View style={styles.container} >
          <Main />
          {/* <FindYourShipping /> */}
          {/* <ShippingList /> */}
          
      </View>
    </ShippingsProvider>
  //  </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center'
  }
})