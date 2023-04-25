import {  StyleSheet, Text, View } from 'react-native'
import React ,{useContext,useEffect} from 'react'
import { ProfilContext } from '../context/profilContext'

const Accueil = () => {
const{jwt} = useContext(ProfilContext)
  return (
	<View>
	  <Text>Accueil</Text>
	  <Text>{jwt}</Text>
	 
	
	</View>
  )

}

export default Accueil

const styles = StyleSheet.create({})