import db from '../config/db.js'

export const getAlluser = async(id)=>{

    let sql = 'select * from user where id = ?'

    let [rows] =await db.execute(sql , [id])

    return rows

}

export const adduser = async(id , name , salary , dept)=>{

    let sql = 'insert into user values (?,?,?,?)'

    let [rows] = await db.execute(sql , [id , name , salary , dept])

    return rows

}