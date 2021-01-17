//creating an object named employee
var employee = {
  //defining properties of the object
  //setting data values
  name : 'Joe',
  age : 28,
  designation : 'Developer',
  //function to display name of the employee
  displayName() {
    console.log("Name is:", this.name)
  }
}
//calling the method
// employee.displayName()


// Prototype Object

//creating an constructor function  named EmployeeConstructor
function EmployeeConstructor(_name,_age,_designation) {
   this.name = _name,
   this.age = _age,
   this.designation = _designation
}
//creating an object from EmployeeConstructor using "new" keyword
//The object created is stored in the variable employeeObj
var employeeObj = new EmployeeConstructor('Joe',22,'Developer')

// console.log('EMPLOYEE-OBJ');
// console.log(employeeObj);

// console.log('CONSTRUCTOR FUNCTION');
// console.log(EmployeeConstructor.prototype);

// console.log('adding a property: ');


// const em = new EmployeeConstructor('Anna', 12, 'Kid');

// EmployeeConstructor.prototype.company = 'Google';
// EmployeeConstructor.prototype.getCompany = function (){
//  return this.company;

// }

// console.log(em.getCompany());



//DATE ENCAPSULATATION

//constructor function called Employee
function Employee(name, age, designation){
  var _name = name
  var _age = age
  var _designation = designation

  //accessing the date using functions
  this.getName = function(){
    return _name;
  }

  //setting a new value
  this.setAge = function(newAge){
    _name = newAge;
  }
}
var employeeObj = new Employee('Joe',20,'Chef')
//accessing properties outside
console.log(employeeObj._name);
console.log(employeeObj._age);
console.log(employeeObj._designation);
console.log(employeeObj.getName());
console.log(employeeObj.setAge('John'));
console.log(employeeObj.getName());


/*
Exam question:
Get & Set
Study the code given below, which option correctly shows the output?
*/

// var op = {
//   arr : [2,4,8,9],
//   get last(){
//       return this.arr[this.arr.length - 1];
//   },
//   set lastVal(val){
//       this.arr[this.arr.length - 1] = val;
//   }
// }
// op.lastVal = 15;
// console.log(op.last);



function Parallelogram(base, height){
  //write your code here 
  this.base = base,
  this.height = height

  this.printArea = function(){
      return this.base * this.height;
  }
}

var parallelogram = new Parallelogram(4,5);
console.log(parallelogram.printArea());