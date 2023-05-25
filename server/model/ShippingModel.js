import mongoose from 'mongoose'

const ShippingSchema = new mongoose.Schema({
  placeDispatch: { type: String, required: true },
  placeDestination: { type: String, required: true },
  dateDispatch: { type: String, required: false },
  EstimateDelivery: { type: String, required: true }, 
},
{
  timestamps: true,
})

export default mongoose.model('Shipping', ShippingSchema)