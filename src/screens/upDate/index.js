import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
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
    await api.put(`/produtos/${id}`, data);
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <TextInput
        placeholder="id"
        style={styles.textImput}
        onChangeText={(text) => setId(text)}
      />
      <TextInput
        placeholder="nome"
        style={styles.textImput}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        placeholder="descricao"
        style={styles.textImput}
        onChangeText={(text) => setDescricao(text)}
      />
      <TextInput
        placeholder="imagem"
        style={styles.textImput}
        onChangeText={(text) => setImagem(text)}
      />
      <TextInput
        placeholder="valor"
        style={styles.textImput}
        onChangeText={(text) => setValor(text)}
      />
      <TextInput
        placeholder="qtdEstoque"
        style={styles.textImput}
        onChangeText={(text) => setQtdEstoque(text)}
      />

      <TouchableOpacity onPress={Atualizar} style={styles.bntUpdate}>
        <Text style={{ color: "white", textAlign: "center" }}>
          Update do produto
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
    justifyContent: "center",
  },
  textImput: {
    paddingVertical: 10,
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  bntUpdate: {
    width: "100%",
    height: 40,
    backgroundColor: "#7b42f5",
    borderRadius: 20,
    justifyContent: "center",
  },
});
