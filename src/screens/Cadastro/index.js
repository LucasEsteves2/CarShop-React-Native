import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { api } from '../../service/api';

export default function Cadastro(){

     const [nome, setNome] = useState('');
     const [email, setEmail] = useState('');
     const [senha, setSenha] = useState('');

     async function cadastrar () {
        try{

            const {data} = await api.post('/clientes', 
            {
                bairro: "string",
                cep: '25650061',
                cidade: "string",
                complemento: "string",
                cpf: '13568220709',
                email: email,
                nome: nome,
                nome_usuario: "string",
                numero: '12345',
                rua: '12345',
                senha: senha,
                telefone1: '22457858'
            });
        } catch {
           alert('deu merda')
        }
    }
        
    return(
        <View style={styles.container}> 

           <StatusBar hidden />

           <Image style={{width:300, height:100, marginBottom: 30}}  
                  source={require('../../../assets/splash.png')}/>

           <TextInput placeholder="Seu Nome" 
                      style={styles.TextInput}  
                      onChangeText={text=> setNome(text)}/>

           <TextInput placeholder="Seu E-mail" 
                      style={styles.TextInput}  
                      onChangeText={text=> setEmail(text)}/>

           <TextInput secureTextEntry={true} placeholder="Sua Senha" 
                      style={styles.TextInput}  
                      onChangeText={text=> setSenha(text)} />

           <TouchableOpacity style={styles.btnCadastro}  onPress={cadastrar} >
               <Text style={{color:'white', textAlign:'center'}}>Cadastrar</Text>
           </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#202020',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    TextInput: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 10,
        marginBottom: 10
    },

    btnCadastro: {
        width: '70%',
        height: 40,
        backgroundColor: '#7b42f5',
        borderRadius: 20,
        justifyContent: 'center'
    }
})