import React, { cloneElement, useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Alert,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { api } from "../../service/api";

export function Delete() {
  const [produto, setProduto] = useState({});
  const [id, setId] = useState();
  const [texto,setTexto] = useState('');
  async function BuscarId() {
    const { data } = await api.get(`produtos/${id}`);
    setProduto(data);
  }
  async function DeletarId() {
    try {
      const response = await api.delete(`produtos/${id}`);
      modalAlert('Produto deletado')
      setId('')
      setProduto('')
      setTexto('')

    } catch (error) {
      console.log("não cancelado");
    }
  }

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Atenção!",
      "Tem certeza que deseja excluir este item?",
      [
        {
          text: "Sim",
          onPress: () => DeletarId(),
        },
        { text: "Não", onPress: () => console.log("Não cancelar") },
      ],
      { cancelable: false }
    );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerDelete}>
        <Text style={styles.delete}>
          Favor digite o ID do produto que deseja excluir:
        </Text>

        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder="Buscar"
          onChangeText={setId}
        />
      </View>

      <View style={styles.botaoBuscar}>
        <TouchableOpacity onPress={BuscarId} style={styles.botao}>
          <Text style={styles.buscar}>Buscar</Text>
          
        </TouchableOpacity>
      </View>

      <View style={styles.produto}>
        <Text style={styles.Nomeproduto}>{produto.nome}</Text>
      </View>
      <View style={styles.image}>
        <Image
          style={{ width: "90%", height: 300, borderRadius: 10, marginTop: 20 }}
          resizeMode="contain"
          source={{ uri: produto.urlImagem }}
        />
        
        
      </View>

      <TouchableOpacity style={styles.item}>
        <Text style={{ color: "white" }}> DELETAR</Text>
        <MaterialIcons
          name="delete"
          size={30}
          color="white"
          onPress={createTwoButtonAlert}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function modalAlert(msg) {
  Alert.alert("#Sucess", msg, [
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#613Fa0",
    width: "100%",
    height: "100%",
  },
  containerDelete: {
    color: "#414141",
    height: 60,
    fontSize: 17,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
    marginBottom: 10,
  },
  delete: {
    color: "white",
    fontSize: 17,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#F4F3F3",
    width: "65%",
    height: 35,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    textAlign: "center",
    textAlignVertical: "center",
  },
  item: {
    paddingBottom:10,
    alignItems: "center",
  },
  buscar: {
    color: "#fff",
  },
  produto: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  Nomeproduto: {
    color: "#fff",
    fontSize: 20,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 300,
  },
  botao: {
    backgroundColor: "#7b42f5",
    marginTop: 10,
    height: 35,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  botaoBuscar: {
    justifyContent: "center",
    alignItems: "center",
  },
});
