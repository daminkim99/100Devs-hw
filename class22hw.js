//https://javascript.info/object HW 

//Hello Object 
let user ={};
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

//Check for emptiness

function isEmpty(obj){
    for (let key in obj){
        return false;
    } return true;
    }

//sum object properties 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let sum=0
for (key in salaries){
    sum += salaries[key]
} 
console.log(sum)

//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

function multiplyNumeric(obj) {
    for (key in obj){
        if (typeof(obj[key])=='number'){
            obj[key]= 2*obj[key]
        }
    } 
}
