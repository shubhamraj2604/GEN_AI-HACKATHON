import express from 'express'
import {getProducts , createProducts} from '../controllers/productcontroller.js'

const router = express.Router()

router.get('/' , getProducts)
router.post('/' , createProducts)


export default router;