import express from 'express'
import { getArtistProducts } from '../controllers/usercontroller.js'

const router = express.Router()

router.get('/user' , getArtistProducts)



export default router;