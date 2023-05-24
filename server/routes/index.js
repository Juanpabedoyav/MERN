import { Router } from 'express'
import {getShipping, getShippingById, createShipping, updateShipping} from '../controller/ShippingController.js'
const router = Router()

//get all shipping
router.get('/', getShipping)

//get shipping by id
router.get('/:id', getShippingById)

//create a new shipping
router.post('/', createShipping)

//update shipping
router.put('/:id', updateShipping)



export default router