import { Router } from "express";

//ROUTAS

const router = Router();


router.get('/users', (req,res)=>{
    res.send('Hola bienvenido')   
})





export default router