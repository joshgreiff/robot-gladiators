
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// Game States
// "WIN" - Player robot has defeated all enemy tobots.
//      ** Fight all enemy robots
//      ** Defeat each enemy robot
// "LOSE"
//      ** Player robot's health is zero or less

var fight = function(enemyName){
    while(enemyHealth > 0 && playerHealth > 0){

    promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP"){

        confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if(confirmSkip){
            window.alert(playerName + " has chosen to skip the fight!");

            playerMoney = playerMoney -10;
            console.log("playerMoney ", playerMoney);
            break;
        }
    }

       
            enemyHealth = enemyHealth - playerAttack;

            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining");

            if(enemyHealth <= 0){
            window.alert(enemyName + " has died!");
            break;
            }
            else{
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            playerHealth = playerHealth - enemyAttack;

            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
            if(playerHealth<=0){
            window.alert(playerName + " has died!");
            break;
            }
            else{
            window.alert(playerName + " still has " + playerHealth + " health remaining.");
            } 
        }
};



for(var i = 0; i < enemyNames.length; i++){
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(enemyNames[i]);
    }









// console.log(enemyNames[3]);

// for(var i = 0; i < enemyNames.length; i++){
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
// }