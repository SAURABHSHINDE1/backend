import express from 'express'
import { adduserContrller, getuserController } from '../controllers/usercontroller.js'


const router = express.Router()

router.get('/user/:id' , getuserController)

router.post('/add' , adduserContrller)


export default router