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

