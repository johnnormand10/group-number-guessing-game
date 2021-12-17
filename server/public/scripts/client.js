$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")

  $('#guessForm').on('submit', onSubmit);


}

let ajaxOption = {
  method: 'GET',
  url: '/random'
}

function onSubmit(event) {
  event.preventDefault();

  let guess = {
    playerOne: $('#playerOne').val(),
    playerTwo: $('#playerTwo').val(),
    playerThree: $('#playerThree').val()
  }
  console.log('guess', guess);
  
  $.ajax({
    method: 'POST',//sends to server.js
    url: '/random',
    data: guess
  })
    .then((response) => {
      console.log('POST response', response);
      refresh(response);
      render(response);
      //checkGuess();
    })

    $('#playerOne').val('');
    $('#playerTwo').val('');
    $('#playerThree').val('');
    
}

function refresh() {
  let ajaxOption = {
    method: 'GET',
    url: '/random'
  };

  $.ajax(ajaxOption)
    .then((response) => {
      
      console.log('response request', response);
    })
}
  
  function render(response){
    $('#answer').empty();

    $('#answer').append(`
      <div id = "right">
        ${response}
      </div>
    `)
  }

/* function checkGuess(){
  let ajaxOption = {
    method: 'GET',
    url: '/guess-random',
  };
  $.ajax(ajaxOption)
    .then((respond) =>{
      console.log('respond request', respond);
    });
  //$('#answer').append(respond)
  } */
  




