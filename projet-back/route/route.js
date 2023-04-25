const {Router, request} = require("express")
const {Oeuvre}= require("../model/model")
const{autorisation, isValideOeuvre,isAdmin,idValid}= require("../middleware")

const route = Router();


route.get("/", function(request, reponse){
    reponse.json({msg : "fonction"})
})

route.post("/", [autorisation,isValideOeuvre], async (request ,reponse)=>{

	const{body} = request
	const dt_creation= new Date();
	const newOeuvre = new Oeuvre ({...body , dt_creation: dt_creation})
	await newOeuvre.save()
	reponse.json(newOeuvre);
}) 

route.get("/all" , async(request , reponse) =>{
    const{body}=request
	const tousLesOeuvre = await Oeuvre.find().populate()
    reponse.json(tousLesOeuvre)
})

route.put("/:id",[idValid, isValideOeuvre], async(request,reponse)=>{
	const id = request.params.id ;
	const {body}= request;
	const oeuvreUpdated = await Oeuvre.findByIdAndUpdate(id,{$set :body }, {new : true})
	reponse.json(oeuvreUpdated)
})

route.delete("/:id",[autorisation,isAdmin,idValid],async(request , reponse) => {
    const id = request.params.id ;
     const delteOeuvre = await Oeuvre.findByIdAndRemove (id) 
   reponse.json({msg :`l'oeuvre ${id}est bien supprimé`});
});


route.get("/:id" , idValid, async (request,reponse) =>{
	const id = request.params.id ;
	 const oeuvreRecherche= await Oeuvre.findById(id)
	 if (!oeuvreRecherche) return reponse.status(404).json ({msg :`l'oeuvre ${id}n'exise pas`})
	  reponse.json(oeuvreRecherche)
  })
module.exports=route