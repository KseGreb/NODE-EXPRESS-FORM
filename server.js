const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/index.html")
})

app.post("/form-submitted", (req, res)=> {
    const answers = req.body.name + " " + req.body.address + " " + req.body.email + " " + req.body.order + " " + req.body.subscribe;
    res.send("Your answers are: " + " " + answers);
})

app.listen(3000, ()=> {
    console.log(`It's working`);
})