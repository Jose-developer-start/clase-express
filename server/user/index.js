import { Router } from "express"
import {userController} from "./controller.js"

const router = Router()

export const userApi = (app)=>{
    router.get('/', userController.getUser)

    router.post('/', userController.postUser)

    router.put('/:id', userController.putDelete)

    router.delete('/:id', userController.deleteUser)

    app.use('/api/users', router)
}