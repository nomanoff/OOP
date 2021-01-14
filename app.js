
// //FACTORY FUNCTION

// function createCircle(radius){
//     return {
//         radius,
//         draw: function(){
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);




// //CONSTRUCTORY FUNCTIONS

// function Circle(radius){
//     this.radius = radius;
//     this.draq = function(){
//         console.log('drawing');
//     };
// }

// const another = new Circle(2)



//PRIMITIVES AND OBJECTS

// let num = 10;

// function Circle(radius){
//     this.radius = radius;
//     this.draq = function(){
//         console.log('drawing');
//     };
// }


//HOW TO DELETE A PROPERTY OR A METHOD AND USE [IN] LOOP

// const another = new Circle(2);

// for(let key in another){
//     key === 'radius' ? delete another.draq : null
// }

// console.log(another);



// ABSTRACTION



// function Circle(radius){ //no abstraction
//     this.radius = radius;
//     this.defaultLocation = { x: 0, y: 0}
//     this.computerOptimumLocation = function(factor){
//         //...
//     };

//     this.draw = function(){
//         this.computerOptimumLocation(0.1);
//         console.log('draw');
//     };
// }

// const circle = new Circle(10);
// circle.draw();


// function Circle(radius){ // abstraction
//     this.radius = radius;
//     let defaultLocation = { x: 0, y: 0}
//     let computerOptimumLocation = function(factor){
//         //...
//     };

//     this.draw = function(){
//         computerOptimumLocation(0.1);
//         console.log('draw');
//     };
// }

// const circle = new Circle(10);
// circle.draw();




//SETTERS AND GETTERS

// function Circle(radius){ // abstraction
//     this.radius = radius;
//     let defaultLocation = { x: 0, y: 0}
    
//     this.getDefaultLocation = function(){  //This is one way(Not a great option)
//         return defaultLocation;
//     }

    
//     this.draw = function(){
//         console.log('draw');
//     };
// }

// const circle = new Circle(10);
// circle.draw();



// experiment regarding the Object.defineProperties
// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties

// const object1 = {};

// Object.defineProperties(object1, {
//   property1: {
//       value: 1
//   },
//   property2: {
//       value: 2
//   }
// });

// console.log(object1);
// // expected output: 42

// const object2 = {
//     property3: 3,
//     property4: 4
// }

// console.log(object2);


//STOPWATCH EXAMPLE USING OBJECT

function Stopwatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if (running)
            throw new Error('Stopwatch has already started.');

        running = true;

        startTime = new Date();
    };

    this.stop = function(){
        if (!running)
            throw new Error('Stopwatch is not started. ');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;

        console.log(seconds);
    };

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function(){ return duration; }
    })
}





var personOne = {
    name: 'Adam',
    age: 21,
    studies: function () {
        console.log('coding');
    }
}

var newPerson = Object.create(personOne);


var employee = {
    firstName: 'Joe', 
    lastName : 'Adams',
    age: 23,
    sex: 'male',
    designation: 'chef'
  }
  
  //using for..in loop to iterate over the properties
  for (x in employee){

    
  }

