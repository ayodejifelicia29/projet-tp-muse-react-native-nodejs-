import { StyleSheet, Text, View, Image } from 'react-native'
import React , {useContext, useEffect} from 'react'
import { ProfilContext } from '../context/profilContext'
import * as SQLITE from "expo-sqlite"

const Accueil = () => {
  
  //const { jwt } = useContext(ProfilContext)
  useEffect(function(){
    const db = SQLITE.openDatabase("demo.sqlite");
    db.transaction(function(tx){
      tx.executeSql(`SELECT * FROM jwt `,
                    [],
                    function(transact, resultat){ console.log(resultat.rows._array) },
                    function(transact , err){ console.log("erreur du select") })
    })
  },[])
  return (
    <View>
      <Text>Ensemble des oeuvres disponible dans le musée</Text>
      
    </View>
  )
}

export default Accueil

const styles = StyleSheet.create({})