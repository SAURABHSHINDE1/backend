import express from 'express'
import { adduserController, getuserController, updateuserController } from '../controllers/usercontroller.js'

const router = express.Router()

router.get('/user' , getuserController)

router.post('/add' , adduserController)

router.put('/update/:userid', updateuserController)

export default router