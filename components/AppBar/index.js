import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, FAB } from 'react-native-paper';
import { Link, Navigate } from "react-router-native";



const AppBar = () => {
//   const { bottom } = useSafeAreaInsets();

  return (
    <Appbar style={styles.bottom}>
     <Link to="/" >
       <Appbar.Action icon="inbox"/>
     </Link>
      <Link to="/newShipping" >
      <FAB
        mode="flat"
        size="medium"
        icon="plus"
        />
        </Link>
      <Link to="/searchShipping" >
        <Appbar.Action icon="loupe"/>
      </Link>
    </Appbar>
  );
};

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: '#5948f5b5',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: "space-around"
  },
  fab: {
    position: 'absolute',
    right: 16,
  },
});

export default AppBar;