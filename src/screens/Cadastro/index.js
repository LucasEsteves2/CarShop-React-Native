import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { api } from "../../service/api";


export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  async function cadastrar() {
    //validando tamanho dos formulario
    if (!nome.trim() || !email.trim() || !senha.trim() || nome.length < 5|| nome.length < 5) {
      if (nome.length < 5) {
        modalAlert("O nome deve possuir mais de 5 caracteres.");
      } 
      if (senha.length < 5) {
        modalAlert("A senha deve possuir mais de 5 caracteres.");
      } else {
        modalAlert("Preencha todos os campos requeridos!!");
      }
    } else {
      try {
       await api.post("/funcionario", {
          "email": email,
          "nome": nome,
          "senha": senha,
        });
        alert("Funcionario Cadastrado com sucesso!!");
        // navigation.navigate("Login");
      } catch {
        modalAlert("Erro ao Cadastrar usuario (informe um e-mail valido");
      }
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.imageview}>
        <Image source={require('../../imagens/img2.png')} style={styles.imagem} />
      </View>

      <View>
        <Text style={styles.title}>Nome:</Text>
        <TextInput
          onChangeText={setNome}
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#C3C3C3"
        />
      </View>

      <View style={styles.senha}>
        <Text style={styles.title}>E-mail:</Text>
        <TextInput
          onChangeText={setEmail}
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#C3C3C3"
        />
      </View>

      <View style={styles.senha}>
        <Text style={styles.title}>Senha:</Text>
        <TextInput
          onChangeText={setSenha}
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          placeholderTextColor="#C3C3C3"
        />
      </View>

      <View>
        <TouchableOpacity style={styles.butao} onPress={cadastrar}>
          <Text style={styles.btntext}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


function modalAlert(msg) {
  Alert.alert("#Error404", msg, [
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#613FA0",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  senha: {
    paddingVertical: 9,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold",
    paddingVertical: 9,
  },
  btntext: {
    fontSize: 12,
    color: "#FFFFFF",
    alignSelf: 'center'
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
    width: "50%",
    padding: '3%',
    backgroundColor: "#7b42f5",
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: 'center',
    marginTop: '5%'
  },
  imagem: {
    justifyContent: "center",
    marginVertical: 20,

    width: 180,
    height: 150,
  },
  imageview: {
    alignItems: "center",
  },

  cadastro: {
    paddingTop: 25,
    alignItems: "center",
  },
});
