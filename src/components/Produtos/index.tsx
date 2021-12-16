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
    nome: string;
    valor: number;
    urlImagem: string;
}
interface Props {
    data: prodData;
}

export function Produtos({ data }: Props) {

    return (
        <Container>
            <Detalhes>
                <Prod>Carro:</Prod>
                <Tipo>{data.nome}</Tipo>
                <Sobre>
                    <Valor>Valor:</Valor>
                    <Preco>{`R$ ${data.valor}`}</Preco>
                </Sobre>
            </Detalhes>
            <ProdImagem source={{ uri: data.urlImagem }} />


        </Container>


    );

}

