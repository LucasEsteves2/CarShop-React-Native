import React, { useEffect, useState } from "react";
import { Alert, Button, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";


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

  function logout()
{
  navigation.navigate("Login");
}

function perfil()
{
  navigation.navigate("Perfil");
}

function upDate()
{
  navigation.navigate("upDate");
}


  return (
    <>
      <Text>Bem vindo{usuario.email}</Text>
      <Button title="Perfil" onPress={perfil}> </Button> 
      <Button title="Deslogar" onPress={logout}> </Button>
      <Button title="Update" onPress={upDate}> </Button>
    </>
  );
}



