import React, { useEffect, useState } from "react";
import { StyleSheet, Alert, Button, Text,TouchableOpacity, StatusBar, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Container, Header, ProdutosTotal, HeaderConteudo, ProdList } from "./style";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../imagens/logobar.png";
import { Produtos } from "../../components/Produtos"
import { api } from "../../service/api";
import { ProdutoDTO } from "../../dtos/produtoDTO";

export function Home() {


  const navigation = useNavigation();
  const [produtos, setProdutos] = useState<ProdutoDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState({});
  const [btnn, setBtnn] = useState();

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


  }, [usuario]);

  function relogar()
  {
    setUsuario('a');
    alert("Lista atualizada com sucesso")
  }

  return (
    <>

      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Header>

          <HeaderConteudo>
            <Image
              style={styles.image}
              source={Logo}
              width={RFValue(108)}
              height={RFValue(12)} />

<TouchableOpacity  onPress={relogar}>
         
            <ProdutosTotal>
<<<<<<< HEAD
              Recarregar
=======
          Produtos:
>>>>>>> 466be45c5463d0b40c05caa8a97695b539e2a1c0
            </ProdutosTotal>
        </TouchableOpacity>


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
    width: 100,
    height: 80,
    resizeMode: 'contain',
  },
});