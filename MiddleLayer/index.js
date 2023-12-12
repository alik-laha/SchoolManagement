const app = require('./app')
const dotenv = require('dotenv')


dotenv.config({ path: "./Config/config.env" })


app.listen(process.env.PORT, () => {
    console.log(`server is runing on port${process.env.PORT}`)
})
