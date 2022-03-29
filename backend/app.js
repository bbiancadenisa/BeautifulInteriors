
const express = require('express');
  
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })

app.get('/contact', (req, res) => {
    res.send('GET request to the homepage')
  })

app.get('/designs', (req, res) => {
    res.send('GET request to the homepage')
  })

 app.get('/aboutUs', (req, res) => {
    res.send('GET request to the homepage')
  })
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,  and App is listening on port "+ PORT)
    else 
        console.log("Error occured, server can't start", error);
    }
);