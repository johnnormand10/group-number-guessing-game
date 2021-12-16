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


let numArray = {
  // store our guessing numbers
};


app.get('/random', (req, res) => {
  console.log('in GET /random');
  res.send(numArray);
})



app.post('/random', (req, res) => {
  console.log('in POST', req.body);
  // numArray.push(req.body);

  res.sendStatus(201);
})

//creating random number
let randomNum = Math.floor(Math.random() * (1 + 3 - 1)+ 1);
  randomNum = randomNum.toString();
  console.log(randomNum);

  // app.get('/random-number', (req, res) =>{
  //   console.log('in GET /random-number');
  //   res.send(randomNum);
  // })

  // app.post('/random-number', (req, res) =>{
  //   console.log('in POST /random-number',req.body);
    

  //   res.sendStatus(201);
  // })
  app.get('/guess-random', (req, res) => {
    console.log(req.data);
    
      // if(newArray.playerOne.val() === randomNum){
      //   console.log(req.query.playerOne.val());
      //   res.send('Player One has guessed correctly')
      //   }
      //   else if(`${guess.playerTwo}` === randomNum){
      //     console.log('Player Two has guessed correctly');
      //     res.send('Player Two has guessed correctly')
      //   }
      //   else if(`${guess.playerThree}` === randomNum){
      //     console.log('Player Three has guessed correctly');
      //     res.send('Player Three has guessed correctly')
      //   }
      //   else {
      //     console.log('No one has guessed correctly');
      //     res.send('No one has guessed correctly')
      //   }
      // }
  })
  