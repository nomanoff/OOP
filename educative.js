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

console.log('EMPLOYEE-OBJ');
console.log(employeeObj);

console.log('CONSTRUCTOR FUNCTION');
console.log(EmployeeConstructor.prototype);

console.log('adding a property: ');

EmployeeConstructor.prototype.company = 'Google';

const em = new EmployeeConstructor('a', 12, 'Kid');

console.log(em.company);
