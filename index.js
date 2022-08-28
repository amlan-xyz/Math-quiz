var readlineSync=require('readline-sync');

let username=readlineSync.question('Enter your username : ');

console.log("Welcome "+username);

console.log("Are you ready to play this math quiz\n -----------------");

var level1=[
	{
		question:'what is 1+7 ? ',
		answer:'8',
	},
	{
		question:'what is 8 x 8 ? ',
		answer:'64',
	},
	{
		question:'what is 0 * 1 + 5 ? ',
		answer:'5'
	}
]

var level2=[
	{
		question:'what is 11 x 47 ? ',
		answer:'517',
	},
	{
		question:'what is 121 / 11 ? ',
		answer:'11',
	},
	{
		question:'what is 100 x 500 /20 ? ',
		answer:'2500'
	}
]

var level3=[
	{
		question:'what is 45 % 5 ? ',
		answer:'0',
	},
	{
		question:'what is (11+78)/(21-21) ? ',
		answer:'0',
	},
]


let score=0;

function play(question,answer,incrementScore,decrementScore){
	var userAns=readlineSync.question(question);
	if(userAns===answer){
		console.log("Correct");
		score+=incrementScore;
	}else{
		console.log("Incorrect");
		score-=decrementScore;
		if(score<0){
			score=0;
		}
	}
	console.log("==============");
}


if(score===0){	
	for(let i=0;i<level1.length;i++){
		play(level1[i].question,level1[i].answer,1,1);
	}
	console.log("Your score is = "+ score);

	if(score<3){
		console.log("You failed to eneter level 2. Better luck next time " +username);
	}

	if(score>=3 && score<9){
		console.log('Congrulation '+username+ ', Welcome to level 2');
	
		for(let i=0;i<level2.length;i++){
			play(level2[i].question,level2[i].answer,3,2);
		}
	
		console.log("Your score is = "+ score);
	
		if(score<7){
			console.log("You failed to eneter level 3. Better luck next time " +username);
		}


		if(score>=7){
			console.log('Congratulation '+username+ ', Welcome to level 3');
		
			for(let i=0;i<level3.length;i++){
				play(level3[i].question,level3[i].answer,5,3);
			}
		}
		
		if(score<15){
			console.log("You failed to complete level 3. Better luck next time " +username);
		}else{
			console.log('Congratulation '+username+ ', you have completed the game with a score of '+score);
		}
		
	}
}








