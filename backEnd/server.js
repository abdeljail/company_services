const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require("path")
const app = express()

const nodeEnv = app.get("env");

const port = 3000;



const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "123456789",
    database: "company_serveces"
});

const sessionStore = new MySQLStore({
    expiration: 86400000,
    createDatabaseTable: true,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
}, connection);



// var corsOptions = {
//     origin: 'http://localhost:8080',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

var whitelist = ['http://localhost:8080']

var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        }
        else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}



app.use(cors(corsOptions))



app.use(session({
    key: 'keyin',
    secret: 'This is a secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));



app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/uploads/images/', express.static(path.join(__dirname, "/uploads/images")));




/*
++++++

   start  client

++++++
*/


const contactUs = require("./routers/contactUs/add.router")

const loginClient = require("./routers/client/loginClient.router")

const createClient = require("./routers/client/createClient.router")

const responseInfoClient = require("./routers/client/responseIfonClient.router");

const trainingOffer = require("./routers/trainingOffer/add.router");

const application = require("./routers/application/add.router");

app.use('/contact-us', contactUs)

app.use("/login-client", loginClient)

app.use("/create-client", createClient)

app.use("/info-client", responseInfoClient)

app.use("/training-offer", trainingOffer)

app.use("/application", application)

/*
++++++

   end  client

++++++
*/



/*
++++++

   start  admin

++++++
*/


// start section for admin

const loginAdmin = require("./routers/loginAdmin.router");

const responseInfoAdmin = require("./routers/responseIfonAdmin.router");

// end section for admin

// start section for category

const addNnameCategory = require("./routers/addCat.router");

const managementCategories = require("./routers/managementCategories.router")

const editNnameCategory = require("./routers/editCat.router");

// end section for category


// start section for formation

const routerFormationAdd = require("./routers/formation/add.router");


const routerFormationManagement = require("./routers/formation/managementFormation.router");

const routerFormationEdit = require("./routers/formation/edit.router");


// const editNnameCategory = require("./routers/editCat.router");

// end section for formation


// section section for intern

const routerInternManagement = require("./routers/intern/managementIntern.router");


app.use(routerInternManagement)



// end section for intern



app.get("/", (req, res) => {

})




app.use("/", loginAdmin);

app.use("/", responseInfoAdmin)

app.use("/", addNnameCategory)

app.use("/", managementCategories)

app.use("/", editNnameCategory)

app.use("/formation", routerFormationAdd)

app.use("/formation", routerFormationManagement)

app.use("/formation", routerFormationEdit)




/*
++++++

   end  admin

++++++
*/




app.listen(port, () => {
    console.log(nodeEnv);
    console.log(`app listening at http://localhost:${port}`);
});