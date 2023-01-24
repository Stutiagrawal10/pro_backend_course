const express = require('express')
const app = express()
const format = require('date-format')
const PORT = 4000 || process.env.PORT

app.get('/', (req, res) => {
    res.status(201).send('<h1>Hello from Stuti!</h1>')
});  

app.get("/api/v1/instagram",(req,res)=>{
    const instaSocial = {
        username : "stutiagrawal10",
        followers: 500,
        follows: 700,
        date: new Date()
    };

    res.status(200).json({instaSocial});
});

app.get("/api/v1/facebook",(req,res)=>{
    const facebookSocial = {
        username : "stutiagrawal",
        followers: 200,
        follows: 300,
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    };

    res.status(200).json({facebookSocial});
});

app.get("/api/v1/linkedin",(req,res)=>{
    const linkedinSocial = {
        username : "stutiagrawal_10",
        followers: 1000,
        follows: 1100,
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    };

    res.status(200).json({linkedinSocial});
});

app.get("/api/v1/:token",(req,res)=>{
    console.log(req.params.token);
    res.status(200).json({param: req.params.token});
});

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
});