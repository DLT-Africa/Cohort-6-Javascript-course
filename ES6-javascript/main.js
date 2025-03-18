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
