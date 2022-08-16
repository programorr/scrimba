let homeScore = 0
let guestScore = 0
let homeScoreText = document.getElementById("home-score");
let guestScoreText = document.getElementById("guest-score");
homeScoreText.textContent = homeScore;
guestScoreText.textContent = guestScore;


function newGame(){
  console.log("New Game!");
  homeScore = 0;
  guestScore = 0;
  console.log(homeScore);
  console.log(guestScore);
  document.getElementById("home-score").textContent = homeScore;
  document.getElementById("guest-score").textContent = guestScore;
  scoreLeader(homeScore, guestScore);
}
// Home Plus One
function homePlusOne(){
    //console.log("Home +1 Clicked!");
    homeScore = homeScore + 1;
    document.getElementById("home-score").textContent = homeScore;
    scoreLeader(homeScore, guestScore);
}
// Home Plus One
function homePlusTwo(){
    //console.log("Home +2 Clicked!");
    homeScore = homeScore + 2;
    document.getElementById("home-score").textContent = homeScore;
    scoreLeader(homeScore, guestScore);
}
// Home Plus One
function homePlusThree(){
    //console.log("Home +3 Clicked!");
    homeScore = homeScore + 3;
    document.getElementById("home-score").textContent = homeScore;
    scoreLeader(homeScore, guestScore);
}
// Guest Plus One
function guestPlusOne(){
    //console.log("Guest +1 Clicked!");
    guestScore = guestScore + 1;
    document.getElementById("guest-score").textContent = guestScore;
    scoreLeader(homeScore, guestScore);
}
// Guest Plus One
function guestPlusTwo(){
    //console.log("Guest +2 Clicked!");
    guestScore = guestScore + 2;
    document.getElementById("guest-score").textContent = guestScore;
    scoreLeader(homeScore, guestScore);
}
// Guest Plus One
function guestPlusThree(){
    //console.log("Guest +3 Clicked!");
    guestScore = guestScore + 3;
    document.getElementById("guest-score").textContent = guestScore;
    scoreLeader(homeScore, guestScore);
}

function scoreLeader(homeScore, guestScore){

    if (homeScore === guestScore){
        console.log("Game Tied");       
        document.getElementById("board-title-home").style.color = "white";
        document.getElementById("board-title-guest").style.color = "white";
        document.getElementById("guest-score").style.border = "5px solid Black";
        document.getElementById("home-score").style.border = "5px solid Black";
    } else if (homeScore > guestScore){
        console.log("Home is in the lead");
        document.getElementById("board-title-home").style.color = "#F94F6D";
        document.getElementById("board-title-guest").style.color = "#FFFFFF";
        document.getElementById("home-score").style.border = "5px solid #F94F6D";
        document.getElementById("guest-score").style.border = "5px solid Black";
    } else if (guestScore > homeScore) {
        console.log("Guest is in the lead");
        document.getElementById("board-title-guest").style.color = "#F94F6D";
        document.getElementById("board-title-home").style.color = "#FFFFFF";
        document.getElementById("guest-score").style.border = "5px solid #F94F6D";
        document.getElementById("home-score").style.border = "5px solid Black";
 
    }
}

scoreLeader(homeScore, guestScore);

