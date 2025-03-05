// Function declaration 


// function myName (){
//     return "hello world"
// }


// // Function Expression
// const myWorld = function(){
//     return "hello world"
// }

// // Arrow Function
// const myName = () => {
//     return 'hello world'
// }


function kayBee (a,b) {

    return a*b;
}

console.log(kayBee(1,2))



function jamb (age){
    if (age > 30) {
        return "You are too old to register"
    } else if (age < 30 && age > 18) {
        return "you are qualified to register"
        
    }else{
        return "too young to register"
    }
}


console.log(myName)
 var myName = "Anate"



//Hoisting
// var
// function declaration


function everyDay (day) {
    switch (day){
        case "monday":
            return "A bright day";
           
        case "tuesday":
            return "A sunny day indeed";
          
        case "wednesday":
            return "frosty"
        case "thursday":
            return "hectic"
        case "friday":
            return "wet"
        case "saturday":
            return "yaayyy its the weekend"
        case "sunday":
            return '"ugh tommorow is monday"'
        default:
            "ehhhh"
    }
}

console.log(everyDay("sunday"))



const checknumber = (num) => {
    if (num > 0) {
        return 'positive'
    } else if (num < 0) {
        return "negative"
    }else{
        return "zero"
    }
}

console.log(checknumber(0))
console.log(checknumber(4))
console.log(checknumber(-4))

const isEven = (num) => num %2 === 0 ? "even" : "odd"

console.log(isEven(4))


const login = (username, password, isAdmin) => {

    if (!username || !password) return "please fill the required fields";

    if (isAdmin) return "admin login successful";

    return username === "user" && password === "pass123" ? "user login successful": "invalid credentials";
}

console.log(login('user', "", true))


// Write a function that handles Registration

const registration = (username, password, country, state, email) => {
    if(!username || !password) return "please fill the required fields"

    if (password.lenght < 6) return "minimum of 6 characters";

    return username === "anate" && password === "pass123" ? "user already exits": `${username} succefully registered`

}


console.log(registration("anate", "pass123", "Nigeria", "Kogi", 'email'))


// SCOPE

//GLOBAL SCOPE


let globalVar = "i am global"

function showVar(){
    console.log(globalVar)
}

showVar()

//Local Scope


function showLocalVar(){
    let localVar = "i am soft"
    console.log(localVar)
}

showLocalVar()

// Lexical scope
function outterFunc (){
    let outerVar ="i am outer";

    function innerFunc(){
    

        function innerMost () {
            console.log(outerVar)
        }

        innerMost()

    }

    innerFunc()

}

outterFunc()


function getName(name){
    function greet(){
        console.log(`Good day ${name}`)
    }

    greet()
}

getName("Anate")