//clase de express y servidor
import express from "express";
import morgan from "morgan";
import {dirname,join} from "path"
import { fileURLToPath } from "url";
//Path
const __dirname = dirname(fileURLToPath(import.meta.url))

//Server
const app = express();

//Middleware
app.use(morgan('dev'))
app.set('views',join(__dirname,"views"))
app.set('view engine','ejs')

//Routas
app.get('/:id', (req,res)=>{
    const {id} = req.params
    console.log(id)
    res.render('index',{id})
})

app.listen(3000, ()=>{
    console.log('Hola como estas')
})
