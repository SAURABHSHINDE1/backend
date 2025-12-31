import db from '../config/db.js'

// export const getuser = ()=>{

// return new Promise((resolve , reject)=>{

//     let sql = 'select * from user'

//     db.query(sql , (err , result)=>{

//         if(err){
//             reject(err)
//         }
//         else{
//             resolve(result)
//         }

//     })
   
// })

// }


export const getuser = async () => {

    const sql = 'SELECT * FROM user'

    const [rows] = await db.execute(sql)

    return rows
}
