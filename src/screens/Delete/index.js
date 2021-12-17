import { StatusBar } from "expo-status-bar";
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
import { ScrollView } from "react-native-gesture-handler";

export function Delete() {
  const [produto, setProduto] = useState({});
  const [id, setId] = useState();
  const [texto, setTexto] = useState('');
  async function BuscarId() {
    try {

      const { data } = await api.get(`produtos/${id}`);
      setProduto(data);
    } catch {
      modalAlertError("Produto Invalido!")
    }
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
    <View style={styles.container}>
      <ScrollView>
        <StatusBar hidden />
        <Image source={require('../../imagens/delete.png')}
          style={styles.usuarioImage}></Image>
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

        <View>
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

        <View>
          <TouchableOpacity style={styles.item}>
            <Text style={{ color: "white" }}>DELETAR</Text>
            <MaterialIcons
              name="delete"
              size={30}
              color="white"
              onPress={createTwoButtonAlert}
            />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

function modalAlert(msg) {
  Alert.alert("#Sucess", msg, [
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
}

function modalAlertError(msg) {
  Alert.alert("#404", msg, [
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#613FA0",
  },
  containerDelete: {
    color: "#414141",
    fontSize: 17,
    alignItems: "center",
    justifyContent: "center",
  },

  delete: {
    color: "white",
    fontSize: 17,
    alignSelf: 'center'
  },

  input: {
    padding: '2%',
    width: "65%",
    backgroundColor: "#FFFFFF",
    borderRadius: 7,
    paddingLeft: 10,
    marginTop: '4%'
  },

  item: {
    alignItems: "center",
  },
  buscar: {
    color: "#fff",
    textAlign: 'center',
  },
  produto: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
    marginBottom: '30%',

  },
  botao: {
    width: "50%",
    padding: '3%',
    backgroundColor: "#7b42f5",
    borderRadius: 20,
    justifyContent: "center",
    marginTop: '7%',
    alignSelf: 'center'
  },

  usuarioImage: {
    height: 200,
    marginVertical: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
  }
});
