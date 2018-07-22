// javascript / jquery....

// $(document).ready(function() {
var randomResult;
var losses;
var win;
// var userTotal;
var random;
losses = 0;
win = 0;

// creating random challenge number and displaying on the screen.
var randomResult = Math.floor(Math.random() * 102) + 19;
$("#random-div").html("<h6>Challenge Number!</h6>");
$("#random-div").append(randomResult);
$("#Wins").html("<h6>Wins:</h6>");
$("#Lose").html("<h6>Losses:</h6>");
$("#Score").html("<h6>Your Total Score:</h6>")

// Assinging random number to four crystal buttons.
var crystal0 = Math.floor(Math.random() * 12) + 1;
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
userTotal = 0;


// when 1st crystal clicked, add the value to user total. 
function crystalClick0() {
    userTotal = userTotal + crystal0;
    tScore();
};

//  when 2nd crystal clicked, add the value to user total. 
function crystalClick1() {
    userTotal = userTotal + crystal1;
    tScore();
};

//  when 3rd crystal clicked, add the value to user total. 

function crystalClick2() {
    userTotal = userTotal + crystal2;
    tScore();
};

//  when 4th crystal clicked, add the value to user total. 

function crystalClick3() {
    userTotal = userTotal + crystal3;
    tScore();
};

// Check if user socre is equal or greater than random number for win or lose
function tScore() {
    $("#totalScore").text(userTotal);
    
    if (userTotal === randomResult) {
         winner();
    }
    else if (userTotal > randomResult) {
        loser();
    }
}
// increment win counter and display the value on screen.
function winner() {
    win++;
    $("#Wins").html("Wins:" + win);
    userTotal = 0;
    reset();
}
// decrement lose counter and display the value on screen.
function loser() {
    losses++;
    $("#Lose").html("Losses:" + losses);
    userTotal = 0;
    reset();
}
// Reset the variables and randomly assign the value to callenge number and crystal buttons.
function reset() {

    randomResult = Math.floor(Math.random() * 102) + 19;
    $("#random-div").html("<h6>Challenge Number!</h6>");
    $("#random-div").append(randomResult);
    crystal0 = Math.floor(Math.random() * 12) + 1;
    crystal1 = Math.floor(Math.random() * 12) + 1;
    crystal2 = Math.floor(Math.random() * 12) + 1;
    crystal3 = Math.floor(Math.random() * 12) + 1;
    userTotal = 0;
    $("#totalScore").text(userTotal);

}



// end of crystalclick

// speudocoding----

// creating four crystal buttons.
// every crystal has a different number of hidden value, between 1 - 12.
// create a box to show a random number between 19 - 120. 
// and create another box to keep track of user WIN and LOST.
// each time player win or lose number will be keep changing in random number box and in four crystal buttons.
//  when clicking Crystal, it should be adding with the previos click crystal and keep adding to the total score generate by the random number.
// if user score is less than the challenge number, keep prompting user to click the crystal buttons.
// if user's total score goes over the random numbers increment lose counter and start over.
// if user's total score equal to the random numbers increment win counter and start over.
