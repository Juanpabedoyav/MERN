import React from 'react'
import {  Route, Routes} from "react-router-native"
import ShippingList from "../../components/ShippingList"
import FormAddShipping from "../../components/FormAddShipping"
import AppBar from "../../components/AppBar"
const Main = () => {
  return (
    <>
        {/* <AppBar /> */}
        {/* <Routes>
            <Route exact path="/" > */}
                <FormAddShipping />   
            {/* </Route>
        </Routes> */}
    </>
  )
}

export default Main