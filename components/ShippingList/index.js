import { useContext, useEffect, useState } from 'react'
import {    StyleSheet} from 'react-native'
import { ShippingsContext } from "../../context/shippings/ShippingsContext"
import { DataTable } from 'react-native-paper';
import { Button, Text ,View} from "react-native-ui-lib";

const ShippingList = () => {
  const optionsPerPage = [2, 3, 4];

  const {shippings} = useContext(ShippingsContext)
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);


return (
  <>
  <View marginB-20>
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
          <Button label="All Detalis"/>
        </DataTable.Cell>
      </DataTable.Row>
  ))
}
      <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      />
    </DataTable>
</>
  );
  }
const styles = StyleSheet.create({
  table: {
    width: "100%",
    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
    height: 400,
    overflow: "scroll",
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    padding: 2,
  },
  button:{
    padding: 0,
  }
});

export default ShippingList

