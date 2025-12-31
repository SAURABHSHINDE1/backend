import {getuser}  from '../Models/usermodels.js'

export const getuserController =async(req , res)=>{

    try{

        let result  =  await getuser()

        res.json({success : true , data : result})
    }
    catch(err){

        res.json({success : false , message : "some error :- " + err})

    }

}