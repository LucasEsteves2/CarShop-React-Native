import React, { useEffect, useState } from "react";
import { Alert, Button, Text, View, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

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


console.log('Usuario', usuario);
  return (
    <View  style={styles.container}>
      <ScrollView>
      <View>
         <Image source={require('../../imagens/usuario.png')}
           style={styles.usuarioImage}></Image>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Nome:</Text>
            <View style={styles.input}>
              <Text>{usuario.nome}</Text>
            </View>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Email:</Text>
            <View style={styles.input}>
              <Text>{usuario.email}</Text>
            </View>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>CPF:</Text>
            <View style={styles.input}>
              <Text>{usuario.cpf}</Text>
            </View>
          </View>
          <Image source={require('../../imagens/img3.png')}
          style={styles.logoImage}/>
        </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#613FA0",
  },


  usuarioImage:{
    resizeMode:'contain',
    marginTop:'3%',
    marginLeft:'3%',
    alignSelf:'center',
    borderRadius:50
  },

  logoImage:{
    alignSelf: "center",
    resizeMode:'contain',
    marginTop:'20%'
  },

  input: {
    backgroundColor: "#FFFFFF",
    color: "black",
    padding: '2%',
    borderRadius: 7,
    fontSize: 10,
    width: '80%',
    marginTop: '2%'
  },

  fieldContainer:{
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2%',
    marginTop: '5%'
  },

  label:{
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  }

})

