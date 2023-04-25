import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React  ,{useState,useContext}from 'react'
import { ProfilContext } from '../context/profilContext'

const Login = ({navigation}) => {
	const{setJwt} = useContext(ProfilContext)
	const [email,setEmail] =useState("abb@yahoo.fr")
	const [password,setPassword] =useState("Paris1234567")

	const submit = function name() {
		const identifiant ={email, password}
		console.log(identifiant);
		fetch("http://10.0.2.2:4003/login" ,{method :"post" ,body : JSON.stringify (identifiant),headers :{"content-type"  : "application/json"}})
		.then (reponse => reponse.json ())
		.then(data =>{
			setJwt(data.token)})
	}
  return (
	<View>
	  <Text>Login</Text>
	  <TextInput placeholder='email' style={styles.forme} value={email} onChangeText={(text) => setEmail(text)}/>
      <TextInput placeholder='password' style={styles.forme} value={password} onChangeText={(text) => setPassword(text)}/>
      <Button onPress={submit} title=" voulez-vous créer un compte?" />
	</View>
  )
}

export default Login

const styles = StyleSheet.create({
	forme : {
        borderWidth : 1,
        padding : 11 ,
        borderColor : "black",
        backgroundColor : "white",
        marginBottom : 11
    }
})