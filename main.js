const cars = ["Ford", "Subaru", "Chevy", "Hyundai"]
console.log("cars length: ", cars.length)

const moreCars = ["BMW", "Kia", "Mercedes", "Honda"]
const totalCars = cars.concat(moreCars)
console.log("concat two cars arrays: ", totalCars)

console.log("Index of Honda: ", totalCars.indexOf("Honda"))
console.log("lastIndexOf Ford: ", totalCars.lastIndexOf("Ford"))

const stringOfCars = (totalCars.join())
console.log("string of cars: ", stringOfCars)

let carsFromString = stringOfCars.split(",")
console.log("use split to convert to array: ", carsFromString)

const carsInReverse = totalCars.reverse()
console.log("cars array reversed: ", carsInReverse)

const sortedCars = carsInReverse.sort()
console.log("I think BMW will be the first, alphabetically: ", carsInReverse.indexOf('BMW'))
console.log("Alphabetical order: ", sortedCars)

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
const reptiles = pets.slice(4,6)
console.log("These are reptiles: ", reptiles)
console.log("These are the current pets, after slicing reptiles: ", pets)
const removedReptiles = pets.splice(4,2, "hamster")

console.log("Removed reptiles: ", removedReptiles)
console.log("And added hamster: ", pets)

const removedPet = pets.pop()
console.log("Removed pet using pop:", removedPet, "...and here's the resulting array: ", pets)

const putPetBack = pets.push(removedPet)
console.log("Don't get rid of the bird, put him back: ", pets)

console.log("First pet using shift: ", pets.shift(0))
console.log("Length of array after unshift turtle: ", pets.unshift("turtle"))
console.log("Resulting array after unshift: ", pets)

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
numbers.forEach(element =>console.log(element +2))

//BELOW: tried to figure it out using num, index, arr and it may be close, but it's been an hour, the above function does the same thing, and I need to move on
// const addTwo = (index, num) => {
//     console.log(`index: ${index} , number: ${num}`)
// }
// //console.log("addTwo function w two random numbers: ", addTwo(5, 4))
// console.log("This is numbers.forEach using current addTwo as parameter: ", numbers.forEach(addTwo))
