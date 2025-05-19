const express = require('express')
const app = express()
const port = 3000
const mongoose=require('mongoose')
const dotenv = require('dotenv')
const cors=require('cors')

dotenv.config({
  path: './.env'
})



app.use(cors())
app.use(express.json());


let Hostname = process.env.HOSTNAME 
let portname = process.env.PORT



app.get('/', (req, res) => {
  res.send('Hello World!')
})


mongoose.connect(process.env.MONGODBLOCAL_URL).then(()=>{
console.log(
"db is connected"
)
}).catch(()=>{
console.log("db is not connected")
})

app.use('/api',require('./router/productrouter'))



app.listen(portname, Hostname, () => {
  console.log(`Example app listening on port http://${Hostname}:${portname}`)
})


// let convertBase64String = (imageFile) => {
//   return new Promise((resolve, reject) => {
//       let fileReader = new FileReader();
//       fileReader.readAsDataURL(imageFile);
//       fileReader.addEventListener('load', () => {
//           if(fileReader.result){
//               resolve(fileReader.result);
//           }
//           else {
//               reject('Error Occurred');
//           }
//       })
//   });
// };

// updateImage
// let updateImage = async (event) => {
//   let imageFile = event.target.files[0];
//   let base64Image = await convertBase64String(imageFile);
//   setProduct({
//       ...product,
//       image : base64Image
//   });
// };