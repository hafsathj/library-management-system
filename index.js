const express = require("express");

const app = express();

const PORT= 8081;

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message: "HomePage :-)"
    })
})

app.use((req,res)=>{
    res.status(500).json({
        message: "Not built yet"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is up and running on http://localhost:${PORT}`);
    
})