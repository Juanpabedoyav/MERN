import { useContext } from 'react'
import { StyleSheet} from 'react-native'
import { ShippingsContext } from "../../context/shippings/ShippingsContext"
import { DataTable } from 'react-native-paper';
import { Button, Text ,View} from "react-native-ui-lib";
import { Link } from "react-router-native";
import { ButtonDetails } from "./stylex";

const ShippingList = () => {

  const {shippings} = useContext(ShippingsContext)


return (
  <>
  <View marginB-40>
      <Text text60 >Your Shipping List</Text>
  </View>
    <DataTable style={styles.table}>
      <DataTable.Header>
        <DataTable.Title>ID</DataTable.Title>
        <DataTable.Title >Dispatch From</DataTable.Title>
        <DataTable.Title >Details</DataTable.Title>
      </DataTable.Header>
{
shippings.map(shipping => (

      <DataTable.Row key={shipping._id} style={styles.tableCell}>
        <DataTable.Cell >{shipping._id}</DataTable.Cell>
        <DataTable.Cell >{shipping.placeDispatch}</DataTable.Cell>
        <DataTable.Cell >
          <Link to={`/shipping/detail/${shipping._id}`} >
            <ButtonDetails>Details</ButtonDetails>
           </Link>

        </DataTable.Cell>
      </DataTable.Row>
  ))
}
    </DataTable>
</>
  );
  }
const styles = StyleSheet.create({
  table: {
    width: "100%",
    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
    height: "70vh",
    overflow: "scroll",
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    padding: 2,
  },

});

export default ShippingList

