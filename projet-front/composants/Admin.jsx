import { StyleSheet, Text, View ,ScrollView,Image,Button} from 'react-native'
import React, { useContext,useEffect ,useState} from 'react'

const Admin = () => {
	const [resultat, setResultat]= useState([])
	useEffect(function () {
	  fetch("http://10.0.2.2:4003/all")
	  .then (reponse => reponse.json () )
	  .then( data => {setResultat(data)})
	},[resultat])
    
	function creer() {
		const oeuvre ={
			"nom" : "Baldumoulin",
			"description":"peniture est tres bien",
			"image" : "https://postimg.cc/Lnr3bGQZ/e9c994fb/400/200",
			"auteur" : "Vincent Gogh",
			"dt_creation":Date.now
			}
		fetch("http://10.0.2.2:4003/",{method:"post",body:JSON.stringify(oeuvre),headers:{"content-type":"application/json"}})
	  .then (reponse => reponse.json () )
	  .then( data => {
		console.log(data);
		fetch("http://10.0.2.2:4003/all")
	  .then (reponse => reponse.json () )
	  .then( data => {setResultat(data)})
	  })
	}


	function supprimer(id) {
		fetch("http://10.0.2.2:4003/"+id,{method:"delete"})
	  .then (reponse => reponse.json () )
	  .then( data => {
		fetch("http://10.0.2.2:4003/all")
	  .then (reponse => reponse.json () )
	  .then( data => {setResultat(data)})
	  })
	}

  return (
	<View style={{paddingBottom: 30}}>
	<Text>Gestion des oeuvres</Text>
	<Button title='créer une nouvelle oeuvre' onPress={() =>{creer ()}}/>
	<ScrollView>
	  {resultat.map (function (r,index) {
		return <View key ={index}style={styles.oeuvre} >
		  <Text>{r.nom}</Text>
		  <Image source ={{uri:r.image}} style ={{width:300, height:150}} />
		  <View style={{flexDirection: "row" ,marginBottom: 10, justifyContent: "center",paddingBottom:5}}>
		  <Button title="supprimer"onPress={()=>{supprimer (r._id)}} color={"red"} />
		  <Button title="modifier"onPress={()=>{}} color={"orange"}/>
		  </View>
		  </View>
	  })}
 </ScrollView>
  </View>
  )
}

export default Admin

const styles = StyleSheet.create({
	oeuvre : { marginBottom :3, padding:5}
})