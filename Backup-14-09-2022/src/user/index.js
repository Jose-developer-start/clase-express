const express = require('express');
const router = express.Router();
const { userController } = require ("./controller");

module.exports.apiUser = (app) => {
    router.get("/", userController.getUsers);
    router.get("/:id", userController.getUserById) ;
    /* router.post('/', userController.createUser) */
     
    app.use("/api/user", router)
}