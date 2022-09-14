const {Response} = require("../common/response.js")

const { getUsers, getUserById } = require ("./service");

const userController = {
    getUsers: async (req, res) =>{
        try{
            const result = await getUsers();
            console.log(result)
            Response.success(res,200,"Listado usuarios",{user: 'Jose',email: 'Josedeodanes@gmail.com'})
        }catch (error){

        }
    },
    getUserById:(req,res)=>{
        const {
            params: { id },
        } = req;
        res.send(id);
    },
};   
module.exports = { userController };