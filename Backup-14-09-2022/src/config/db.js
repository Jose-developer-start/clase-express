const { Config } = require("./config.js");
const {MongoClient} = require('mongodb')

let connecion = null


const Conexion = (collection)=>
    new Promise( async(reject,resolve)=>{
        try{
            if(!connecion){
                const client = new MongoClient(Config.mongo_uri)
                connecion = await client.connect()
                console.log("Conexion exitosa");
            }
            const db = connecion.db(Config.nameDB)
            resolve(db.collection(collection))
        }catch(error){
            reject('Error backup')
        }
    })

module.exports = {Conexion}