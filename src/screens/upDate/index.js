import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { api } from "../../service/api";

export function upDate() {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");
  const [valor, setValor] = useState("");
  const [qtdEstoque, setQtdEstoque] = useState("");

  var data = {
    descricao: descricao,
    nome: nome,
    qtd_estoque: qtdEstoque,
    urlImg: imagem,
    valor: valor,
  };

  async function Atualizar() {
    await api.put('/produtos/${id}', data);
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image source={require('../../imagens/update.png')}
        style={styles.usuarioImage}></Image>
      <TextInput
        placeholder="id"
        style={styles.textInput}
        onChangeText={(text) => setId(text)}
      />
      <TextInput
        placeholder="nome"
        style={styles.textInput}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        placeholder="descricao"
        style={styles.textInput}
        onChangeText={(text) => setDescricao(text)}
      />
      <TextInput
        placeholder="imagem"
        style={styles.textInput}
        onChangeText={(text) => setImagem(text)}
      />
      <TextInput
        placeholder="valor"
        style={styles.textInput}
        onChangeText={(text) => setValor(text)}
      />
      <TextInput
        placeholder="qtdEstoque"
        style={styles.textInput}
        onChangeText={(text) => setQtdEstoque(text)}
      />

      <TouchableOpacity onPress={Atualizar} style={styles.bntUpdate}>
        <Text style={{ color: "#FFFFFF", textAlign: "center", fontSize: 12 }}>
          Editar Produto
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#613FA0",
    alignItems: "center",
  },
  textInput: {
    padding: '2%',
    width: "90%",
    backgroundColor: "#FFFFFF",
    color: "black",
    marginVertical: 10,
    borderRadius: 7,
    marginTop: 3,
    fontSize: 10,
  },
  bntUpdate: {
    width: "50%",
    padding: '3%',
    backgroundColor: "#7b42f5",
    borderRadius: 20,
    justifyContent: "center",
    marginTop: '7%'
  },

  usuarioImage: {
    height: 100,
    marginVertical: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
  }

});
