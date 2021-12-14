import React, { useEffect, useState } from "react";
import { Alert, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Home() {
  const [usuario, setUsuario] = useState({});

  //Pegando dados do usuario logado (async storage)
  useEffect(() => {
    async function loadData() {
      const usuario2 = await AsyncStorage.getItem("@serratec:usuario");
      setUsuario(JSON.parse(usuario2));

    }
    loadData();
  }, []);

  return <Text>{usuario.email}</Text>;
}
