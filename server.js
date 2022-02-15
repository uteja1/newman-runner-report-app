const path = require("path")
const express = require('express');
// express instance details
const app = express();
const PORT = 8080;

app.get('/index', (req, res)=>{
    res.sendFile(path.join(__dirname,'report/index.html'));
});

app.get('/index/create_dia_report', (req, res)=>{
    res.sendFile(path.join(__dirname,'report/create_dia_report.html'));
});

app.get('/index/delete_dia_report', (req, res)=>{
    res.sendFile(path.join(__dirname,'report/delete_dia_report.html'));
});


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else 
        console.log("Error occured, server can't start", error);
    }
);

