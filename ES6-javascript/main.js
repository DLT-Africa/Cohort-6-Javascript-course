import { simpleInterest, circleAreaCircum } from "./math.js"




//calculate simple interest on the principal #50,000. Provided that the rate is 5%  for a period of 2 months
const accumulatedInterest = simpleInterest(50000, 5, 2, "month")

console.log({accumulatedInterest})



//circumference of a circe and its area

//radius = 10cm
const area = circleAreaCircum(10, "area")

console.log(area)

const circum = circleAreaCircum(10, "circum")

console.log(circum)


const circumArea = circleAreaCircum(10, "areacircum")

console.log(circumArea)


const anything = circleAreaCircum(10, "baba Tee")

console.log(anything)


// setItem()
// getItem()

localStorage.setItem("name", "Dolapo");
let result = document.getElementById("result").innerHTML = localStorage.getItem("name")
console.log(result)


document.addEventListener("DOMContentLoaded", function(){

    // Retrive the save count from local storage or initialize to 0 if not present
    let count = localStorage.getItem("clickCount") ? parseInt(localStorage.getItem("clickCount")) : 0;
    const counterElement = document.getElementById("counter")

    // Display the current count
    counterElement.textContent = count

    // Add a click event listenner to the button
    document.getElementById("increment").addEventListener("click", function() {
        count++;
        counterElement.textContent = count

        // save updated count back into localstorage

        localStorage.setItem("clickCount", count)
    })
})



