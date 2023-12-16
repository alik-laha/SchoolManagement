const dotenv = require('dotenv')

dotenv.config()

const app = require('./app')


app.listen(process.env.PORT, () => {
    console.log(`server is runing on port ${process.env.PORT}`)
})
