import React, { useEffect, useState } from "react";
import { Alert, Button, Text, View, StyleSheet, Image,TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import logozita from "../../imagens/usuario.png";


export function Perfil() {
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

  async function sair() {
    await AsyncStorage.removeItem("@serratec:usuario");
    navigation.navigate("Login");
   }

console.log('Usuario', usuario);
  return (
    <View style={styles.container}>
      <View style={styles.imageview}>
        <Image source={logozita} style={styles.imagem} />
      </View>

      <View>
        <Text style={styles.title}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#C3C3C3"
          value={usuario.nome}
        />
      </View>

      <View style={styles.senha}>
        <Text style={styles.title}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#C3C3C3"
          value={usuario.email}

        />
      </View>

      <View>
        <TouchableOpacity style={styles.butao} onPress={sair}>
          <Text style={styles.btntext}>Sair</Text>
        </TouchableOpacity>

      </View>
      </View>

     
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#613FA0",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  senha: {
    paddingVertical: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "bold",
  },
  btntext: {
    fontSize: 11,
    color: "#FFFFFF",
  },

  input: {
    backgroundColor: "#FFFFFF",
    color: "black",
    padding: 9,
    borderRadius: 7,
    marginTop: 3,
    fontSize: 10,

  },
  butao: {
    backgroundColor: "#7b42f5",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 3,
  },
  imagem: {
    justifyContent: "center",
    marginVertical: 20,
    width: 180,
    height: 240,

  },
  imageview: {
    alignItems: "center",
  },

  cadastro: {
    paddingTop: 25,
    alignItems: "center",
  },
});

   