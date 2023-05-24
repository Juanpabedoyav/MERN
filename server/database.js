import  mongoose from 'mongoose'

const password = '1qvYGTcA58DShQ9W'
const URI = `mongodb+srv://bedoyavascojuanpablo:${password}@cluster0.mu2bzt1.mongodb.net/shipping?retryWrites=true&w=majority`

export const connectDB = async () => {
  try{
    const conecction = await mongoose.connect(URI)
    console.log('DB is connected', conecction.connection.host)
  }catch(err){
    console.error(err)

  }

}
