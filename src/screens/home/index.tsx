import React, { useEffect, useState } from "react";
import { StyleSheet, Alert, Button, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Container, Header, ProdutosTotal, HeaderConteudo, ProdList } from "./style";
import { RFValue } from "react-native-responsive-fontsize";
import Usuario from "../../imagens/usuario.png";
import { Produtos } from "../../components/Produtos"
import { api } from "../../service/api";
import { ProdutoDTO } from "../../dtos/produtoDTO";
import { Perfil } from "../perfil";


export function Home() {


  const navigation = useNavigation();
  const [produtos, setProdutos] = useState<ProdutoDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState({});

  //Pegando dados do usuario logado (async storage)
  useEffect(() => {
    async function loadData() {
      const usuario2 = await AsyncStorage.getItem("@serratec:usuario");
      setUsuario(JSON.parse(usuario2));
    }
    loadData();
  }, []);

  //carros
  useEffect(() => {
    async function buscarCarros() {
      try {
        const response = await api.get('/produtos')
        setProdutos(response.data);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    buscarCarros();


  }, []);

 
  return (
    <>
     <StatusBar hidden />
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Header>

          <HeaderConteudo>
            <TouchableOpacity>
              <Image
                style={styles.image}
                source={Usuario}
                width={RFValue(108)}
                height={RFValue(12)} />
            </TouchableOpacity>

            <ProdutosTotal>
              PRODUTOS
            </ProdutosTotal>

          </HeaderConteudo>
        </Header>
        <ProdList
          data={produtos}
          keyExtractor={Item => String(Item.id)}
          renderItem={({ item }) =>
            <Produtos data={item} />}


        >


        </ProdList>
      </Container>

    </>
  );
}



const styles = StyleSheet.create({
  image: {
    resizeMode:'contain',
    marginTop:'3%',
    marginLeft:'3%',
    alignSelf:'center',
    borderRadius:50
    
  },
});