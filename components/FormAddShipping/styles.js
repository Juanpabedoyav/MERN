import styled from 'styled-components/native';
import { View } from "react-native-ui-lib"

export const ViewMain = styled(View)`
    margin: 4rem auto;
    display: flex;
    flex-direction: column;
    height: 350px;
    width: 80%;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    border-radius: 6px;
`

export const ViewModal = styled(View)`
     margin: 4rem auto;
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 80%;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    background-color: #fff;
    border-radius: 8px;
`