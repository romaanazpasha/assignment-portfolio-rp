var dice = {
    //a funtion that has six sides and returns a random number
    numbers: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.numbers) + 1;
      return randomNumber;
    }
  } 
  //dispalys dice roll result to the page
  function display(number) {
    var dice = document.getElementById('dice');
    dice.innerHTML = number;
  }
  //creates button to be able to roll dice once clicked
  var button = document.getElementById('button');
  button.onclick = function() {


    //displaying result after button is clicked
    var result = dice.roll();
    display(result);
  };
6