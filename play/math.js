function spitSquareOfGreaterNum(a,b){
    if(a>b){
        return a*a
    }
    else{
        return b*b
    }
}

function nonsenseFunction(a, b){
    console.log("I will only return 5, no matter what you input")
    return 5
}

module.exports = {spitSquareOfGreaterNum, nonsenseFunction}