import React from 'react';
import {
    Container,
    Detalhes,
    Tipo,
    Sobre,
    Valor,
    Preco,
    ProdImagem,
    Prod,
} from './style';

interface prodData {
    tipo: string;
    preco: string;
    img:string;
}
interface Props {
    data: prodData;
}

export function Produtos({ data }: Props) {

    return (
        <Container>
            <Detalhes>
                <Prod>Produto:</Prod>
                <Tipo>{data.tipo}</Tipo>
                <Sobre>
                    <Valor>Valor:</Valor>
                    <Preco>{`R$ ${data.preco}`}</Preco>
                </Sobre>
            </Detalhes>
            <ProdImagem source={{ uri: data.img }} />


        </Container>


    );

}

