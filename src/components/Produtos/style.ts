import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
width:100%;
height: 126px;
background: #FFFFFF;
flex-direction: row;
justify-content:space-between;
align-items:center;
padding:24px;
margin-bottom:16px;


`;

export const Detalhes = styled.View`
margin-top:16px;
width:93px;
`;

export const Prod = styled.Text`
font-size:${RFValue(10)}px;
text-transform:uppercase;
color: grey;
`;

export const Tipo = styled.Text`
font-size:${RFValue(9)}px;
text-transform:uppercase;
`;

export const Sobre = styled.View`
flex-direction: column;
margin-bottom:16px;

`;

export const Valor = styled.Text`
font-size:${RFValue(10)}px;
text-transform:uppercase;
color: grey;
`;

export const Preco = styled.Text`
font-size:${RFValue(9)}px;
text-transform:uppercase;
color: red;

`;

export const ProdImagem = styled.Image`
width: 180px;
height: 92px;

`;
