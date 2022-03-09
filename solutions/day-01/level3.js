import { countries } from "./countries.js"

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//1
ages.sort()
console.log(Math.min(...ages),' ',Math.max(...ages))
console.log(ages[Math.round((ages.length-1)/2)])
let total=0
for(let i=0; i<ages.length;i++){
  total+=ages[i];
}
let average = total/ages.length;
console.log(average)
console.log(Math.max(...ages)-Math.min(...ages))
console.log(Math.abs(Math.min(...ages)-average))
console.log(Math.max(...ages)-average)

//2
console.log(countries.slice(0,10))

//3
console.log(countries[Math.round(countries.length/2)])

//4
let first=countries.splice(0,Math.round(countries.length/2))
console.log(countries.length)
console.log(first.length)

//testing IF
let num =3
if (num>0) {
  console.log(`${num} is a positive number`)
}