
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
    
    window.alert("Welcome to Robot Gladiators");

    promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


        if(promptFight === 'fight' || promptFight === "FIGHT"){
            enemyHealth = enemyHealth - playerAttack;

            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining");

            if(enemyHealth <= 0){
            window.alert(enemyName + " has died!");
            }
            else{
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            playerHealth = playerHealth - enemyAttack;

            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
            if(playerHealth<=0){
            window.alert(playerName + " has died!");
            }
            else{
            window.alert(playerName + " still has " + playerHealth + " health remaining.");
            } 
        }
        else if (promptFight === "skip" || promptFight === "SKIP"){

            confirmSkip = window.confirm("Are you sure you'd like to quit?");

            if(confirmSkip){
                window.alert(playerName + " has chosen to skip the fight!");

                playerMoney = playerMoney -2;
            }
            else{
                fight();
            }

            

        }
        else{
            window.alert("You need to choose a valid option. Try again!.");
        }
};



for(var i = 0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
    }









// console.log(enemyNames[3]);

// for(var i = 0; i < enemyNames.length; i++){
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
// }