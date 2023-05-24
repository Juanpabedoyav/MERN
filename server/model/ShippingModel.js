import mongoose from 'mongoose'

const ShippingSchema = new mongoose.Schema({
  placeDispatch: { type: String, required: true },
  placeDestination: { type: String, required: true },
  dateDispatch: { type: Date, required: false },
  EstimateDelivery: { type: Date, required: true }, 
})

export default mongoose.model('Shipping', ShippingSchema)