import {  StyleSheet, View } from 'react-native'
import ShippingsProvider from "./context/shippings/ShippingsProvider"
import Main from "./screens/Main"
import FindYourShipping from "./components/FindYourShipping"
import { NativeRouter, Route, Routes } from "react-router-native"
import FormAddShipping from "./components/FormAddShipping"
import AppBar from "./components/AppBar"
import ShippingDetails from "./components/ShippingDetails"
export default function App() {
  return (
  //  <SafeAreaProvider>
  <NativeRouter>
        <ShippingsProvider>
        <View style={styles.container} >
        <AppBar />
            {/* <FindYourShipping /> */}
            {/* <ShippingList /> */}
            <Routes>
              <Route  path="" element={<Main/>} />
              <Route  path="/newShipping" element={<FormAddShipping/>} />
              <Route  path="/searchShipping" element={<FindYourShipping/>} />
              <Route  path="/detail/:id" element={<ShippingDetails/>} />

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