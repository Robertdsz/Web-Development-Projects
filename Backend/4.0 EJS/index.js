import express from 'express';

const port = 3000;
const app = express();


const today = new Date();
const dayOfWeek = today.getDay();
var phrase = "";

if(dayOfWeek > 0 && dayOfWeek < 6){
    phrase = "a weekday, it's time to work hard!";
} else{
    phrase = "the weekend, it's time to have fun!";
}

app.get("/", (req, res) =>{
    res.render("index.ejs",
    {phrase:  phrase});
})


app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})