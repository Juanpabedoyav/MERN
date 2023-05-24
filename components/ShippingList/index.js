import { useContext, useState } from 'react'
import { Text, View, Button } from 'react-native'
import { ShippingsContext } from "../../context/shippings/ShippingsContext"
import { DataTable } from 'react-native-paper';
import { ShippingListContainer } from "./styles";
const ShippingList = () => {
  const optionsPerPage = [2, 3, 4];

  const {shippings} = useContext(ShippingsContext)
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

  

  return (
    <>
      <Text>Shipping List</Text>
       <ShippingListContainer>
          <DataTable.Header>
            <DataTable.Title>Place of Dispatch</DataTable.Title>
            <DataTable.Title >place of Destination</DataTable.Title>
            <DataTable.Title >Details</DataTable.Title>
          </DataTable.Header>
      {
        shippings.map(shipping => (

          <DataTable.Row key={shipping._id}>
            <DataTable.Cell>{shipping._id}</DataTable.Cell>
            <DataTable.Cell>{shipping.placeDispatch}</DataTable.Cell>
            <DataTable.Cell>{shipping.placeDestination}</DataTable.Cell>
            <DataTable.Cell>
            <Button title="All Details"/>
            </DataTable.Cell>
          </DataTable.Row>

      ))}
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
        </ShippingListContainer>
    </>
  )
}

export default ShippingList
