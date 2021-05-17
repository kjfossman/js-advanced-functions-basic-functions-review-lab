// Your code here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(boring='go to the office'){
    return `This Monday, I will ${boring}.`
}

function wrapAdjective(string="*"){
    return function(saying='special'){
        return `You are ${string}${saying}${string}!`
        
    }
}
let encouragingPromptFunction = wrapAdjective()()

let Calculator = {add: function(a,b){return a+b}, subtract: function(a,b){return a-b},
multiply: function(a,b){return a*b}, divide: function(a,b){return a/b}}

function actionApplyer(int, array){
    let a = int
    for(let i = 0; i < array.length; i++){
        a = array[i](a)
    }
    return a 
}