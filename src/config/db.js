import mysql from 'mysql2/promise'
import dotenv from 'dotenv/config'

const db = mysql.createPool({
        host:process.env.DBHOST,
        user:process.env.DBUSER,
        password:process.env.DBPASS,
        database:process.env.DBDATABASE,
        waitForConnections:true,
        connectionLimit:10
});

(async()=>{

        try{
        
                let result = await db.query("select 1")

                console.log("Databaase is connected successfully !")

        }
        catch(err){

                console.log("some errr in db ", err)

        }

}) ();

export default db