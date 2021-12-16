import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { api } from "../../service/api";

export function Cadastrar() {
  const [Descricao, setDescricao] = useState("");
  const [Foto, setfoto] = useState("");
  const [Nome, setNome] = useState("");
  const [Qtdestoque, setQtdestoque] = useState("");
  const [Valor, setValor] = useState("");

  async function pegarproduto() {
    try {
      alert("Sucesso! Produto cadastrado!");
      const { data } = await api.post("/produtos", {
        desc: "66666666666",
        nome: "55555555555 car",
        qtd_estoque: 15,
        urlImagem:
          "https://www.imagensempng.com.br/wp-content/uploads/2021/08/Carro-policia-Png-1024x1024.png",
        valor: 499.126,
      });
    } catch (error) {
      alert(error.toString());
    }
  }

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.containerProd}>
        <Text style={styles.textcadastro}>CADASTRO DE NOVOS PRODUTOS</Text>
      </View>
      <View style={styles.containerProd}>
        <Text style={styles.legenda}>Nome do produto: </Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#C3C3C3"
          onChangeText={setNome}
        />
      </View>

      <View style={styles.containerProd}>
        <Text style={styles.legenda}>Link da imagem do produto: </Text>
        <TextInput
          style={styles.input}
          placeholder="Imagem"
          placeholderTextColor="#C3C3C3"
          onChangeText={setfoto}
        />
      </View>

      <View style={styles.containerProd}>
        <Text style={styles.legenda}>Descrição do produto: </Text>
        <TextInput
          style={styles.inputDesc}
          multiline
          placeholder="Descrição"
          placeholderTextColor="#C3C3C3"
          onChangeText={setDescricao}
        />
      </View>

      <View style={styles.containerProd}>
        <Text style={styles.legenda}>Quantidade do produto: </Text>
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          placeholderTextColor="#C3C3C3"
          onChangeText={setQtdestoque}
        />
      </View>

      <View style={styles.containerProd}>
        <Text style={styles.legenda}>Valor do produto: </Text>
        <TextInput
          style={styles.input}
          placeholder="Valor"
          placeholderTextColor="#C3C3C3"
          onChangeText={setValor}
        />
      </View>

      <View style={styles.containerProd}>
        <TouchableOpacity style={styles.botao} onPress={pegarproduto}>
          <Text style={styles.add}>ADICIONAR PRODUTO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  area: {
    width: "100%",
    height: "100%",
    backgroundColor: "#613FA0",
  },
  input: {
    width: "80%",
    height: 30,
    backgroundColor: "#ffffff",
    borderColor: "#ffffff",
    borderWidth: 3,
    fontSize: 15,
    borderRadius: 20,
    padding: 9,
  },
  inputDesc: {
    width: "80%",
    height: 50,
    backgroundColor: "#ffffff",
    borderColor: "#fff",
    borderWidth: 3,
    fontSize: 15,
    borderRadius: 20,
    padding: 9,
  },
  legenda: {
    width: "80%",
    marginLeft: 20,
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 15,
  },
  botao: {
    flexDirection: "row",
    marginTop: 20,
    width: "80%",
    height: 30,
    backgroundColor: "#7b42f5",
    borderRadius: 20,
    justifyContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  add: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  containerProd: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  textcadastro: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    color: "#fff",
  },
});
