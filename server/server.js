const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GET & POST Routes go here


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})


let numObject = {
  // store our guessing numbers
};
console.log(numObject);//seeing what is in numObject


app.get('/random', (req, res) => {
  console.log('in GET /random');
  res.send(numObject);
})



app.post('/random', (req, res) => {
  console.log('in POST', req.body);// req.body === guess{}
  // numArray.push(req.body);
  newObject = {
    playerOne: req.body.playerOne,
    playerTwo: req.body.playerTwo,
    playerThree: req.body.playerThree
  }

    
  if(newObject.playerOne === randomNum){
    console.log(newObject.playerOne);
    res.send('Player One has guessed correctly')
    }
    else if(newObject.playerTwo === randomNum){
      console.log('Player Two has guessed correctly');
      res.send('Player Two has guessed correctly')
    }
    else if(newObject.playerThree === randomNum){
      console.log('Player Three has guessed correctly');
      res.send('Player Three has guessed correctly')
    }
    else {
      console.log('No one has guessed correctly');
      res.send('No one has guessed correctly')
    }
})

//creating random number
let randomNum = Math.floor(Math.random() * (1 + 25 - 1)+ 1);
  randomNum = randomNum.toString();
  console.log(randomNum);

// app.get('/guess-random', (req, res) => {
//   console.log(req.data);
  
/* 
app.post('/guess-random', (req, res) =>{
  console.log(req.data);
  
}) */