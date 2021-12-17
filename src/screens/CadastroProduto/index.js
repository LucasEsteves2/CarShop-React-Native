import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Image
} from "react-native";
import { api } from "../../service/api";

export function CadastroProduto() {

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
      modalAlert("Produto cadastrado!");
     limparForm()
    } catch (error) {
      alert("Erro ao cadastrar o produto");
    }
  }


  function limparForm()
{
  setDescricao("")
  setNome("")
  setfoto("")
  setQtdestoque("")
  setValor("") 
}

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image source={require('../../imagens/editar.png')}
      style={styles.image}></Image>
      <View>
        <TextInput
          onChangeText={setNome}
          style={styles.input}
          placeholder="Nome do produto"
          placeholderTextColor="#C3C3C3"
          value={nome}
        />
      </View>

      <View style={styles.senha}>
        <TextInput
          onChangeText={setDescricao}
          style={styles.input}
          placeholder="Descricão"
          placeholderTextColor="#C3C3C3"
          value={descricao}
        />
      </View>

      <View style={styles.senha}>
        <TextInput
          onChangeText={setValor}
          style={styles.input}
          placeholder="Valor do produto"
          keyboardType='numeric'
         placeholderTextColor="#C3C3C3"
         value={valor}

        />
      </View>

      <View style={styles.senha}>
        <TextInput
          onChangeText={setQtdestoque}
          style={styles.input}
          placeholder="Estoque"
          keyboardType='numeric'
          placeholderTextColor="#C3C3C3"
          value={qtdestoque}

        />
      </View>
      <View style={styles.senha}>
        <TextInput
          onChangeText={setfoto}
          style={styles.input}
          placeholder="url Imagen"
          placeholderTextColor="#C3C3C3"
          value={foto}
        />
      </View>

      <View style={styles.butoes}>
        <TouchableOpacity style={styles.butao1} onPress={pegarproduto}>
          <Text style={styles.btntext}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.butao2} onPress={limparForm}>
          <Text style={styles.btntext}>Limpar</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}


function modalAlert(msg) {
  Alert.alert("#Sucesso", msg, [
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#613FA0",
  },

  btntext: {
    fontSize: 11,
    color: "#FFFFFF",
    alignSelf: 'center',
  },

  input: {
    padding: '2%',
    width: "95%",
    backgroundColor: "#FFFFFF",
    borderRadius: 7,
    alignSelf: 'center',
    marginTop: '4%'
  },
  butoes: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  butao1: {
    width: "30%",
    padding: '3%',
    backgroundColor: "#7b42f5",
    borderRadius: 20,
    justifyContent: "center",
    marginTop: '5%',
    marginLeft: '15%'
  },
  butao2: {
    width: "30%",
    padding: '3%',
    backgroundColor: "#7b42f5",
    borderRadius: 20,
    justifyContent: "center",
    marginTop: '5%',
    marginRight: '15%'
  },

  image:{
    resizeMode:'contain',
    alignSelf:'center',
  },
 
  cadastro: {
    paddingTop: 25,
    alignItems: "center",
  },
});
