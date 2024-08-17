/*
 John and Mike both play basketball on different teams. In the latest three games:
 
 1- John's team scored 89, 120, and 103 points.
 2- Mike's team scored 116, 94, and 123 points.

 Calculate the average score for each team.
 Determine which team wins on average (highest average score), and print the winner to the console. Also, include the average score in the output.
 Then, change the scores to show different winners. 
*/


let johnScored =[89,120,103];
let mikeScored = [116,94,123];


let averageJohnTeam = johnScored.reduce((a,b)=>a+b/johnScored.length);
let averageMikeTeam = mikeScored.reduce((a,b)=>a+b/mikeScored.length);
console.log(averageMikeTeam);

console.log(averageJohnTeam);

if (averageJohnTeam>averageMikeTeam){
    console.log(`John's team are winner with an average score of ${averageJohnTeam} points`);
    
}else if (averageJohnTeam<averageMikeTeam){
    console.log(`Mike's team are winner with an average score of ${averageMikeTeam} points`);
}
