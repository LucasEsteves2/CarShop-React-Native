import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import{FlatList} from 'react-native'


export const Container = styled.View`
flex:1;
background-color:#d7d7e5;
`;

export const Header = styled.View`
width:100%;
height:113px;

background-color:#613FA0;
justify-content:flex-end;

`;
export const HeaderConteudo = styled.View`
flex-direction:row;
justify-content:center;
justify-content:space-between;

`;
export const ProdutosTotal = styled.Text`
margin-top:20px;
margin-right:30px;
font-size: ${RFValue(13)}px;
color:white;
`;


export const ProdList = styled(FlatList).attrs({
    contentContainerStyle:{
        padding: 24
    },
    showVerticalScrollIndicator:false
})``;

