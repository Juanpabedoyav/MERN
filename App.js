import {  StyleSheet, View } from 'react-native'
import ShippingsProvider from "./context/shippings/ShippingsProvider"
import Main from "./screens/Main"
import FindYourShipping from "./components/FindYourShipping"
import { NativeRouter, Route, Routes } from "react-router-native"
import FormAddShipping from "./components/FormAddShipping"
import AppBar from "./components/AppBar"
export default function App() {
  return (
  //  <SafeAreaProvider>
  <NativeRouter>
      <ShippingsProvider>
        <View style={styles.container} >
            {/* <FindYourShipping /> */}
            {/* <ShippingList /> */}
            <Routes>
              <Route exact path="" element={<Main/>} />
              <Route exact path="/newShipping" element={<FormAddShipping/>} />
              <Route exact path="/searchShipping" element={<FindYourShipping/>} />
            </Routes>
        </View>
      </ShippingsProvider>
  </NativeRouter>
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