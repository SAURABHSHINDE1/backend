import db from './src/config/db.js'
import app from './src/middleware.js'

const port  = process.env.PORT || 5000


app.listen( port, ()=>{
    console.log(`Server is Runing on port ${port}`)
})