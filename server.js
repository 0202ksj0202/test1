var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var path = require("path");
var app = express();


app.get("/", (req, res) => {
    res.send("<h2>Declaration (Instruction: text size in heading 2):</h2> <p>I declare that this this is my own work in accordnce with Seneca Academic Policy. No part of this test has been copied manually or electronically from any other source.</p> <p>Name: <mark>Seongjun Kim</mark></p> <p>Student Number: <mark>157681206</mark></p> <a href='/test1'>Go to Test 1</a>"
    );
});

app.get("/test1", function(req,res){
    res.sendFile(path.join(__dirname,"/pages/test1.html"));
});

app.use((req, res) => {
    res.status(404).send("Page Not Found");
  });

app.listen(HTTP_PORT);

