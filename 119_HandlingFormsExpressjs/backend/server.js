import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
const app = express()
const port = 3000


app.use(cors())
app.use(bodyParser.json());
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get('/', (req, res) => {
    console.log(req.form)
  })
app.post('/',(req,res)=>{
    console.log(req.body);
    res.send("heelo");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})