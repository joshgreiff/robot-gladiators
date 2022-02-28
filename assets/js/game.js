var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attck = 10;
    }
};


var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  while (playerInfo.health > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    enemyHealth = Math.max( 0, enemyHealth - playerInfo.attack);
    console.log(
      playerInfo.name + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerInfo.health = Math.max( 0, playerInfo.health - damage);
    console.log(
      enemyName + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};
var startGame = function(){
    playerInfo.reset();
    for (var i = 0; i < enemyNames.length; i++) {
    if (playerInfo.health > 0) {
        window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = randomNumber(40, 60);
        fight(pickedEnemyName);
        if(playerInfo.health > 0 && i < enemyNames.length - 1){
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

            if(storeConfirm){
                shop();
            }
        }
    }
    else {
        window.alert('You have lost your robot in battle! Game Over!');
        break;
    }
}
// startGame();
endGame();
};

var endGame = function(){
    window.alert("The game has now ended. Let's see how you did!");
 
    if(playerInfo.health>0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else{
        window.alert("You've lost your robot in battle.");
    }
    
}

var shop = function(){
    shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADEE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.")

    switch(shopOptionPrompt){
        case "REFILL":
        case "refill": 
            if(playerInfo.money >= 7){
                window.alert("Refilling player's health by 20 for 7 dollars.");

                playerInfo.health = playerInfo.health + 20;
                playerInfo.money = playerInfo.money -7;
            }
            else{
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if(playerInfo.money >= 7){
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
            
                playerInfo.attack = playerInfo.attack + 6;
                playerInfo.money = playerInfo.money -7;
            }
            else{
                window.alert("You don't have enough money!");
            }
            break;
        case "LEAVE":
        case "leave": 
            window.alert("Leaving the store");

            break;
        
        default:
            window.alert("You did  not pick a valid option, try again.");

            shop();
            break;


    }

};

var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}

startGame();