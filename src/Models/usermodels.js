import db from '../config/db.js'

export const getuser = ()=>{

return new Promise((resolve , reject)=>{

    let sql  = 'SELECT * FROM user'

    db.query(sql , (err , result)=>{

        if(err){
            reject(err)
        }
        else{
            resolve(result)
        }

    })
    
})

}

export const adduser = (id , name , salary , dept)=>{

    return new Promise((resolve , reject)=>{

        let sql = 'INSERT INTO user VALUES (?,?,?,?)'

        db.query(sql , [id , name , salary , dept] , (err , result)=>{
            if(err){
                reject("some err", err)
            }
            else{
                resolve(result)
            }
        })

    })

}

export const updateuser = (id , name , salary , dept , userid)=>{

   return new Promise ((resolve , reject)=>{

     let sql = 'update user set id = ? ,name =? , salary = ? , dept = ? where id = ?'

     db.query(sql , [id , name , salary , dept ,userid] ,(err , result)=>{

        if(err){
            reject(err)
        }
        else{
            resolve(result)
        }
     })

   })


}