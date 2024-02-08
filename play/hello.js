const importedFunctions= require('./math')

console.log("the formula does its magic and returns this for 5 and 7: ", importedFunctions.spitSquareOfGreaterNum(5, 7))


console.log("Trying to hit the nonsense function", importedFunctions.nonsenseFunction(4, 6))