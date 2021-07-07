const express=require("express")
const app= express()
const path=require("path")
const port =process.env.PORT||3000
//public folder's static path
const staticp=path.join(__dirname,"../public")
console.log(staticp)
app.set('view engine','hbs')
app.use(express.static(staticp));

//routing

app.get("",(req,res)=>
{
    res.render('index')
})
app.get("/about",(req,res)=>
{
    res.render('about')
})
app.get("/weather",(req,res)=>
{
    res.render('weather')
})
app.get("*",(req,res)=>
{
    res.render('error')
})

app.listen(port,(req,res)=>
{
    console.log("server is working fine")
})
