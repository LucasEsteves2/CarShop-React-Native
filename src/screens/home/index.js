import React, { useEffect, useState } from "react";
import { StyleSheet, Alert, Button, Text, StatusBar, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Container, Header, ProdutosTotal, HeaderConteudo, Imagita, ProdList } from "./style";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../imagens/logobar.png";
import { Produtos } from "../../components/Produtos"

export function Home() {

  const prodData = {
    tipo: 'carrito',
    preco: '300',
    img: 'https://production.autoforce.com/uploads/version/profile_image/5505/comprar-prestige-plus-40-tfsi-s-tronic_7243435b0b.png',
  }


  const navigation = useNavigation();
  const [usuario, setUsuario] = useState({});

  //Pegando dados do usuario logado (async storage)
  useEffect(() => {
    async function loadData() {
      const usuario2 = await AsyncStorage.getItem("@serratec:usuario");
      setUsuario(JSON.parse(usuario2));
    }
    loadData();
  }, []);

  function logout() {
    navigation.navigate("Login");
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

            <ProdutosTotal>
              produtos:
            </ProdutosTotal>


          </HeaderConteudo>
        </Header>
        <ProdList
         data={[1,2,3,4,5,6,7]}
         keyExtractor={Item=>String(Item)}
         renderItem={({item}) => <Produtos data={prodData} />}
        
        >
         
         
        </ProdList>
      </Container>
      <Button title="Deslogar" onPress={logout}> </Button>
    </>
  );
}



const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 80,
    resizeMode: 'contain'
  },
});