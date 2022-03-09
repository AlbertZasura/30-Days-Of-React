let input=prompt("Enter your age:")
// if (input>=18) {
//   console.log('You are old enough to drive.')
// }else{
//   console.log('You are left with 3 years to drive.')
// }

//2
let a = 4
let b = 3

a>b ? console.log(`${a} is greater than ${b}`) :  console.log(`${a} is less than ${b}`)


//4
// if(input%2==0){
//   console.log(`${input} is an even number`)
// }else{
//   console.log(`${input} is an odd number`)
// }

//level 2
input=input.toLowerCase()
switch (input) {
  case 'saturday':
  case 'sunday':
    console.log(`${input} is a weekend.`)
    break;

  default:
    console.log(`${input} is a working day.`)
    break;
}