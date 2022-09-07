import express from "express"
import morgan from "morgan"
import cors from "cors"
import {userApi} from "./user/index.js"

//App 
const app = express();

//Middleware
app.use(morgan('dev'))
app.use(express.json())
//Configuraciones

app.set('PORT', process.env.PORT || 8000)

//Rutas
userApi(app)

app.listen(app.get('PORT'), ()=>console.log('Server on port: ' + app.get('PORT')))