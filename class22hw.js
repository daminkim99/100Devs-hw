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

//Creating a calculator 

let calculator = {
    read(){
        const a = prompt("Put a value")
        const b = prompt("Put a value")
        this.a =a
        this.b=b
    }
    sum(){
        return this.a+this.b
    }
    read(){
        return this.a*this.b
    }
}
//Chaining 

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };

//create a new calculator 

function Calculator() {
    this.read = function(){
        this.a = prompt("Value one :") 
        this.b = prompt("Value two :")
    }
    this.sum = function(){
        return this.a + this.b
    }
    this.mul = function() {
        return this.a*this.b
    }
    
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//create New Accumulator

function Accumulator(startingValue){
    this.value = startingValue
    
    this.read = function(){
        this.value += Number(prompt("Enter a value:"))

    }
}
let accumulator = new Accumulator(1); // initial value 1

accumulator.read(3); // adds the user-entered value
accumulator.read(5); // adds the user-entered value

alert(accumulator.value);