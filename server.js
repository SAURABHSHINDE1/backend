import db from './src/config/db.js'
import app from './src/middleware.js'

const port  = process.env.PORT || 5000

db.connect((error)=>{

    if(error){
        console.log("some err in db " + error )
    }

    else{
        console.log("Database is connected successfully !")
    }

})


app.listen( port, ()=>{
    console.log(`Server is Runing on port ${port}`)
})