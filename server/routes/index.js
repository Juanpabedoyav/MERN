import { Router } from 'express'
import {getShipping, getShippingById} from '../controller/ShippingController.js'
const router = Router()

//get all shipping
router.get('/', getShipping)

//get shipping by id
router.get('/:id', getShippingById)

//create a new shipping

//update shipping



export default router