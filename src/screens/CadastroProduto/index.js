import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, TextInput} from 'react-native';
import { api } from "../../service/api";
import logozita from "../../imagens/img2.png";

export function Cadastrar() {

  const [descricao,setDescricao]=useState("");
  const [foto,setfoto]=useState("");;
  const [nome,setNome]=useState("");
  const [qtdestoque,setQtdestoque]=useState("");
  const [valor,setValor]=useState("");

   async function pegarproduto(){
     try{
       alert("Sucesso! Produto cadastrado!")
   const {data}= await api.post("/produtos", 
   {   
   desc: descricao,
   nome: nome,
   qtd_estoque: qtdestoque,
   urlImagem: foto,
   valor: valor
  })

      }catch(error){
        alert(error.toString())
      }

  };
 
  
  return (
    <View style={styles.container}>
      <View style={styles.imageview}>
        <Image source={logozita} style={styles.imagem} />
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

