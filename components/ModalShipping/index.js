import { useState } from "react";
// import FormAddShipping from "../FormAddShipping";
import { Modal } from "react-native-ui-lib";
const ModalShipping = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
//   const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
   <Modal visible={visible} onBackgroundPress={showModal}>
     <Text text60>Content</Text>
   </Modal>
  );
};

export default ModalShipping;