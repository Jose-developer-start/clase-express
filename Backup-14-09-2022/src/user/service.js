const {ObjectId} = require('mongodb')
const {Conexion} = require('../config/db.js')


const COLLECTION = 'Users'

const getUsers = async ()=>{
    const collection = await Conexion(COLLECTION)
    return collection.find({}).toArray();
}

const getUserById = async ()=>{

}

module.exports = {
    getUsers,
    getUserById
}