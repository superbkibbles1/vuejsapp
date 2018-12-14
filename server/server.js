const port = process.env.PORT || 3000
const express = require("express")
const path = require("path")

const app = express();

var publicPath = path.join(__dirname , "../public")

app.use(express.static(publicPath))

app.get("/", (req, res)=>{
  res.sendFile(publicPath + "/main.html")
})


app.listen(port, ()=>{
  console.log(`app is on ${port}`)
})
