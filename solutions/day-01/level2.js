// 1
import { webTechs } from "./webTech.js"
import { countries } from "./countries.js"
console.log(webTechs,countries)

//2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text=text.split(' ')
console.log(text)
console.log(text.length)

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart)
shoppingCart.push('Sugar')
console.log(shoppingCart)
shoppingCart.splice(shoppingCart.indexOf('Honey'),1)
console.log(shoppingCart)
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart)

//4
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA')
}else{
  countries.push('Ethiopia')
  console.log(countries)
}

//5
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess')
}else{
  webTechs.push('Sass')
  console.log(webTechs)
}

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
let fullStack= frontEnd.concat(backEnd)
console.log(fullStack)