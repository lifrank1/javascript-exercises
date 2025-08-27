const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

app.get("/", (req, res) => res.sendFile('index.html', { root: __dirname }));
app.get("/contact", (req, res) => res.sendFile('contact.html', { root: __dirname }));

const PORT = 3000;
app.listen(PORT, ()=>console.log("STARTED"))