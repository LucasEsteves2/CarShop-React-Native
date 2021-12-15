import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { api } from "../../service/api";
import logozita from "../../imagens/img2.png";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  async function cadastrar() {
      //validando tamanho dos formulario
    if (!nome.trim() || !email.trim() || !senha.trim() || nome.length<3) {
        if(nome.length<3)
        {
            alert("O nome deve possuir mais de 5 caracteres.");
        }
        else{
            alert("Preencha todos os campos requeridos!!");
        }
    } else {
      try {
        const { data } = await api.post("/clientes", {
          bairro: "string",
          cep: "25650061",
          cidade: "string",
          complemento: "string",
          cpf: "13568220709",
          email: email,
          nome: nome,
          nome_usuario: "string",
          numero: "12345",
          rua: "12345",
          senha: senha,
          telefone1: "22457858",
        });
        alert("Usuario Cadastrado com sucesso!!");
        navigation.navigate("Login");
      } catch {
        alert("Erro ao Cadastrar usuario (informe um e-mail valido");
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageview}>
        <Image source={logozita}style={styles.imagem} />
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
    fontSize: 9,
    fontWeight: "bold",
    paddingVertical: 9,
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
    backgroundColor: "#A370F7",
    padding: 10,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
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
