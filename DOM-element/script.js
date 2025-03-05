// Accessing elements

// className 

// const anate = document.getElementsByClassName("body")

// console.log(anate)

// Id 

// const header = document.getElementById("header")

// console.log(header)

// tag name

// const hOne = document.getElementsByTagName("h1")

// console.log(hOne)


// QuerySelector 

// const classElements = document.querySelector(".body")

// console.log(classElements)

// document.querySelector
// document.querySelectorAll

// const all = document.querySelectorAll("h1")

// console.log(all)

// Dom manipulation

// textcontent
// innerhtml
// styling
// adding & removing classes
// event listener 


// TEXTCONTENT 

const header = document.getElementById("header")

header.textContent = "Hello Universe!"

const p = document.querySelector("p")

p.textContent = "I am a tutor"


//INNERHTML

const container = document.querySelector('div')

container.innerHTML = `
    <h1> I do read</h1>
    <p> and play football </p>
`

// STYLING

container.style.backgroundColor = "black"
container.style.color = "white"


// ADDING AND REMOVING CLASSES



const h6 = document.querySelector('h6')

h6.textContent = "I enjoy teaching"

// ADDING A CLASS TO H6

h6.classList.add("subheader")

p.classList.remove("body")

const bodyElements = document.getElementsByClassName("body")

console.log(bodyElements)


// ADDING EVENT LISTENER

// click event 

document.querySelector("button").addEventListener("click", 
    function(){
    
    const message = document.getElementById("message")

    if(message.textContent === "Hello!"){

        message.textContent = "Button Clicked"

    }else{
        message.textContent = "Hello!"
    }

} )


// Mouse event 

document.getElementById("box").addEventListener("mouseover", function(){
    document.getElementById("box").style.backgroundColor = "yellow"
})

document.getElementById("box").addEventListener("mouseout", function(){
    document.getElementById("box").style.backgroundColor = "black"
})

// KeyUp

document.getElementById("textInput").addEventListener("",function(event){
    document.getElementById("output").textContent = 'you pressed:' + event.key
})


function greet(name){
    alert("hello, " + name + "!");
}

document.getElementById("greetBtn").addEventListener("click",() => greet("aliyu"))



const newBox =document.createElement('div')

newBox.textContent = "How are you doing Today"

document.body.appendChild(newBox)

const box = document.getElementById("box")

const newH1 = document.createElement("h1")

newH1.textContent = "Bro"
newH1.style.color = "white"

box.appendChild(newH1)