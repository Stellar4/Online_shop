require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models')
const cors = require("cors")
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 1234;  /// эту строчку, а также первую и шестую из .env не трогать

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router)


// app.get('/', (req, res) => {
//     res.status(200).json({message: "success"});
// })


app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log("server is listening"))
    }
    catch(e){
        console.log(e)
    }
}

start();