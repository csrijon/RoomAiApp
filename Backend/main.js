import express from "express"


const app = express()
const port = 3000

app.use(express.json())

app.get("/",(req,res)=>{
  res.send("hello guys")
})
app.post("/signup",(req,res) => {
  const {fullname,usermail,signuppass}= req.body
  console.log(fullname,usermail,signuppass)
  res.send({success:true,message:"alldone"})
}
)

app.listen(port,()=>{
    console.log(`app is running ${port}`)
})