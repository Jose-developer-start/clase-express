export const userController = {
    getUser: (req,res) =>{
        res.send('Prueba API controller')
    },
    postUser: (req,res) =>{
        res.send('Method POST')
    },
    putDelete: (req,res) =>{
        res.send('Method PUT')
    },
    deleteUser: (req,res) =>{
        res.send('Method DELETE')
    }
}