/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, activeplayer, roundscore, gameplaying,preDice;
int();

// console.log(dice);

//document.querySelector("#current-" + activeplayer).textContent = dice;
// document.querySelector("#current-" + activeplayer).innerHTML = '<em>' + dice + "</em>"

document.querySelector(".btn-roll").addEventListener('click', function(){
   if(gameplaying) { //1.make random number
    Dice = Math.floor(Math.random() * 6) +1;

    //2. change images
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "img/dice-" + Dice +".png";
    
    if(Dice === 6 && preDice === 6){
        scores[activeplayer]='0';

        document.querySelector("#score-" + activeplayer).textContent = '0';

        nextPlayer();
    }
    //3. update the round score if the rolled number was not a 1
    if (Dice !== 1) {
        //Add score
        roundscore += Dice;
        document.querySelector('#current-' + activeplayer).textContent = roundscore;
    }else{
        //next player
        nextPlayer();
        //document.querySelector(".player-0-panel").classList.remove("active");
        //document.querySelector(".player-1-panel").classList.add("active");
    }

}
preDice = Dice;

});
document.querySelector(".btn-hold").addEventListener('click',function(){
    if(gameplaying){
//add the roundscores to global score
 scores[activeplayer] += roundscore;

 //update the ui
  document.querySelector("#score-" + activeplayer).textContent = scores[activeplayer];
var winningscore ;
 var input = document.querySelector('.Final').value;
if(input){
    winningscore = input;
}else{
    winningscore = 100;
}
  
  //if the player win the game
    if(scores[activeplayer] >= winningscore){
        document.querySelector("#name-" + activeplayer).textContent = 'Winner';
        document.querySelector(".dice").style.display= 'none';
        document.querySelector(".player-"+activeplayer+'-panel').classList.add('winner');
        document.querySelector(".player-"+activeplayer+'-panel').classList.remove('active');
        gameplaying = false;
    }else{
        nextPlayer();
    }
}
    
});

document.querySelector(".btn-new").addEventListener('click',int );





function int (){
    scores = [0,0];
    roundscore = 0;
    activeplayer = 0;
    gameplaying = true;
    document.querySelector(".dice").style.display = "none";
document.getElementById("score-0").textContent ="0";
document.getElementById("score-1").textContent ="0";
document.getElementById("current-1").textContent ="0";
document.getElementById("current-0").textContent ="0"; 
document.querySelector("#name-0").textContent = 'Player 1';
document.querySelector("#name-1").textContent = 'Player 2';
document.querySelector(".player-0-panel").classList.remove('winner')
document.querySelector(".player-1-panel").classList.remove('winner')
document.querySelector(".player-0-panel").classList.remove('active')
document.querySelector(".player-1-panel").classList.remove('active')
document.querySelector(".player-0-panel").classList.add('active')
}



function nextPlayer(){
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
        roundscore = 0;

        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-1").textContent = "0";
        
        document.querySelector(".player-0-panel").classList.toggle('active');
        document.querySelector(".player-1-panel").classList.toggle('active');
};


