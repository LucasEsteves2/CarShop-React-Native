import React, { useEffect, useState } from "react";
import { StyleSheet, Alert, Button, Text, StatusBar, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Container, Header, ProdutosTotal, HeaderConteudo, Imagita } from "./style";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../imagens/logobar.png";

export function Home() {
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