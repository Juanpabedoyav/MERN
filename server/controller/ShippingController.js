import Shipping  from '../model/ShippingModel.js'

// Get all shipping
export const getShipping = async (req, res) => {
  const shipping = await Shipping.find()
  res.json(shipping)
}

// Get shipping by id 
export const getShippingById = async (req, res) => {
  const shipping = await Shipping.findById(req.params.id)
  res.json(shipping)
}

// Create a new shipping
export const createShipping = async (req, res) => {
  const { placeDispatch, placeDestination, dateDispatch, EstimateDelivery} = req.body
  const newShipping = new Shipping({placeDispatch, placeDestination, dateDispatch, EstimateDelivery})
  await newShipping.save()
  return res.json(newShipping)
}

// Update shipping
export const updateShipping = async (req, res) => {
  const updateShipping = await Shipping.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })    
  return res.json(updateShipping)
}
