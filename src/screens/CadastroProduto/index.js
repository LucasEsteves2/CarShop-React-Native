import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { api } from "../../service/api";
import logozita from "../../imagens/img2.png";

export function Cadastrar() {
  const [descricao, setDescricao] = useState("");
  const [foto, setfoto] = useState("");
  const [nome, setNome] = useState("");
  const [qtdestoque, setQtdestoque] = useState("");
  const [valor, setValor] = useState("");
  var data = {
    desc: descricao,
    nome: nome,
    qtd_estoque: qtdestoque,
    urlImagem: foto,
    valor: valor,
  };

  async function pegarproduto() {
    try {
      await api.post("/produtos",data);
      alert("Sucesso! Produto cadastrado!");
    } catch (error) {
      alert(error.toString());
    }
  }

  return (
    <View style={styles.container}>
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
        <Text style={styles.title}>Descricão:</Text>
        <TextInput
          onChangeText={setDescricao}
          style={styles.input}
          placeholder="Descricão"
          placeholderTextColor="#C3C3C3"
        />
      </View>

      <View style={styles.senha}>
        <Text style={styles.title}>Valor:</Text>
        <TextInput
          onChangeText={setValor}
          style={styles.input}
          placeholder="Valor"
          keyboardType='numeric'
         placeholderTextColor="#C3C3C3"
        />
      </View>

      <View style={styles.senha}>
        <Text style={styles.title}>Estoque:</Text>
        <TextInput
          onChangeText={setQtdestoque}
          style={styles.input}
          placeholder="Estoque"
          keyboardType='numeric'
          placeholderTextColor="#C3C3C3"
        />
      </View>

      <View style={styles.senha}>
        <Text style={styles.title}>Imagen:</Text>
        <TextInput
          onChangeText={setfoto}
          style={styles.input}
          placeholder="url Imagen"
          placeholderTextColor="#C3C3C3"
        />
      </View>

      <View>
        <TouchableOpacity style={styles.butao} onPress={pegarproduto}>
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
