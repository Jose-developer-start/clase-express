const express = require ('express');
const app = express();
const { Config } = require("./src/config/config")
const  { apiUser } = require("./src/user/index.js");

//middleware
app.use(express.json());
apiUser(app);

const puerto = Config.port ? Config.port : 5000;

app.listen(puerto, () => {
    console.log(`Server is runnig on port ${puerto}`);
})

