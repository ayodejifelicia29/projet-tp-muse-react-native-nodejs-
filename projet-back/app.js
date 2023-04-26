const express =require("express")
const route =require("./route/route")
const routeUser =require("./route/route-user")
const routeConnexion =require("./route/route-connexion")
const {connect} = require("mongoose")
require("dotenv").config();

const URI = process.env.NODE_ENV === "production"? process.env.BDD_PROD : process.env.BDD_DEV

connect(URI)


.then(() => console.log("connexion à MongoDB est bien réussie"))
.catch((ex) => console.log(ex))

const app= express()
const PORT = 4003;
app.use(express.json ());
app.use(route)
app.use( "/models" ,routeUser)
app.use(routeConnexion)

app.listen(PORT, () => console.log(` ${new Date()}express fontionne ${PORT}`))