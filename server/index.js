import {connectDB} from './database.js'
import app from './app.js'
// const path = require('path');

connectDB()


//Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server is running on port  ${app.get('port')}`)
})