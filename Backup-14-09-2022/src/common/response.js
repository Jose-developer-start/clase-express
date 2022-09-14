const Response = {
    success: (res,status=200,message='ok',body={})=>{
        res.status(status).json({message,body});
    },
    error: ()=>{}
}

module.exports = {Response}