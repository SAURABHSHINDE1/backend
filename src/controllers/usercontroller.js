import { adduser, getAlluser } from "../models/usermodels.js"


export const getuserController = async(req , res)=>{

    let {id} = req.params

    try{

        let result = await getAlluser(id)

        res.json({success : true , data : result})

    }
    catch(err){
    
        res.json({success : false , data : err})
    }

}

export const adduserContrller = async(req , res)=>{

    try{
        let {id ,name , salary , dept} = req.body

        let result = await adduser(id ,name , salary , dept)

        res.json({success : true , message : "user added successfully ! "})

    }
    catch(err){

         res.json({success : false , message : "some err will occur" , err})

    }

}