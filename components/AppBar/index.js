import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, FAB } from 'react-native-paper';



const AppBar = () => {
//   const { bottom } = useSafeAreaInsets();

  return (
    <Appbar style={styles.bottom}>
    
      <Appbar.Action icon="inbox" onPress={() => {}} />
      <FAB
        mode="flat"
        size="medium"
        icon="plus"
        onPress={() => {}}
       
      />
      <Appbar.Action icon="loupe" onPress={() => {}} />
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