import {  StyleSheet, View } from 'react-native'
import ShippingsProvider from "./context/shippings/ShippingsProvider"
import Main from "./screens/Main"
export default function App() {
  return (
    <ShippingsProvider>
      <View style={styles.container} >
          <Main />
      </View>
    </ShippingsProvider>
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