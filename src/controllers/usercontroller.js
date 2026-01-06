import {adduser, getuser, updateuser} from '../models/usermodels.js'

export const getuserController = async(req, res)=>{

    try{

        let result  =  await getuser()

        res.json({success : true , Data : result})

    }
    catch(error){

     res.json({success : false , message : error})

    }


}

export const adduserController = async(req , res)=>{

    let {id , name , salary , dept} = req.body

    try{

        let result = await adduser(id , name , salary , dept)

        res.json({success : true , message :"user Added successfully !"})

    }
    catch(err){
        res.json({success :false , Error :err})
    }

}


export const updateuserController =async(req ,res)=>{

    try{

        let {userid} = req.params

        let {id , name , salary , dept} = req.body


        let result = await updateuser(id , name , salary , dept ,userid)

        res.json({success : true , message:"user updated sucessfully !"})

    }
    catch(err){

        res.json({success:false , message:"some err " + err})

    }
}