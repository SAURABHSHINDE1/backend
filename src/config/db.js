import mysql from 'mysql2/promise'
import dotenv from 'dotenv/config'

const db = mysql.createPool({
    host:process.env.DBHOST,
    user:process.env.DBUSER,
    password:process.env.DBPASS,
    database:process.env.DBDATABASE,
    waitForConnections:true,
    connectionLimit:10
})

export default db