const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 8000
const path = require("path")
const hbs = require("hbs")
//___________Public_static_path_____
const static_path = (path.join(__dirname,"../public"));
const templatePath = path.join(__dirname, "../template/views")
const partialsPath = path.join(__dirname, "../template/partials")
console.log(partialsPath)

app.set('view engine','hbs');
app.set('views',templatePath)
hbs.registerPartials(partialsPath)
app.use(express.static(static_path))

//___________Routing________________
app.get("/",(req, res)=>{
    res.render('index')
});
app.get("/about",(req, res)=>{
    res.render('about')
});
app.get("/weather",(req, res)=>{
    res.render('weather')
});
app.get("*",(req, res)=>{
    res.render("404error")
});
app.listen(port, ()=>{
console.log(`listening to the port at ${port}`)
})