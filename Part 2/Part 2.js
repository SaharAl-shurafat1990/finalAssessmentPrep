//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
 */

//writ your code here .....


function Player(name){
	var player={};
	player.name=name;
	player.addInfo=addInfo;
	player.age="" ;
	player.position="" ;
	player.level=0 ;
	player.availability= "";
	player.increaseLevel=increaseLevel;
	player.isAvailable=isAvailable;
	
	return player;
}

var addInfo=function(age, position, level, availability){
	this.age=age;
	this.position=position;
	this.level=level;
	this.availability=availability;
	}

	var increaseLevel=function(n){
	this .level=this.level+n;
		}

	var isAvailable=function(){
		if(availability){
			return true;

		}
		else{
			return false;
		}

	}

var player1=Player("jonny");
var player2=Player("Justin");
var player3=Player("Patrick");
var player4=Player("Rui");
var arrayOfPlayers=[];
arrayOfPlayers.push(player1,player2,player3,player4);
player1.addInfo(26,"captin",1,true);
player2.addInfo(32,"captin",1,true);
player3.addInfo(22,"b",1,false);
player4.addInfo(20,"c",1,true);
 	
 	var changeLevel=function(arrayOfPlayers){
 		arrayOfPlayers.forEach(function(element,i){
 			if(element.age>30){
 				++element.level;

 			}
 		});

 	}
 	function sortPalyerBy(arr,key){
 		arr.sort(function(a,b){
 			return a.key-b.key;

 		});

 	}
