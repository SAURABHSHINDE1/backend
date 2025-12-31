import express from 'express'
import { getuserController } from '../controllers/usercontroller.js'

let router  = express.Router()

router.get('/' , getuserController)


export default router