const {Router} =require("express")
const{schemaLogin} =require("../authentification/verif")
const {User} =require("../model/model")
const {compare} = require("bcrypt")
const JWT =require("jsonwebtoken")

const route =Router()
route.post("/login" , async(request,reponse) =>{
    
	const {body} = request;
	const{error}  = schemaLogin.validate(body, {abortEarly : false})
	if(error) return reponse.status(400).json(error.details);
	const utilisaterRecherche = await User.findOne({email : body.email})

	if(!utilisaterRecherche) return reponse.status(404).json({msg : "aucun  profil  trouvé "});

	const verif = await compare(body.password , utilisaterRecherche.password)

	if(!verif) return reponse.status(404).json({msg : "aucun  profil  trouvé avec cet password"});

    const profilSanMotPass ={
		_id :utilisaterRecherche._id,
		email : utilisaterRecherche.email,
		role :utilisaterRecherche.role ? utilisaterRecherche.role : " redacteur"
	}
     const token  =JWT.sign(profilSanMotPass , process.env.CLE_PRIVEE_JWT);
	reponse.json({msg :"bienvenu au token" , token : token})										
})

module.exports =route;