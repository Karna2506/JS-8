                            // Named function -> Anonymous fun -> Arrow fun
                   
                   // Task-1
    
    function sayHello() { 
    console.log('Hello!'); 
    }
    sayHello();



    var sayhello = function(){
        console.log('Hello World !')
    }
    sayhello();



    var sayhello =() =>{
        console.log('Hello There !')
    }
    sayhello();

                    // Task-2
                    
 function printNumber() { 
    console.log(5); 
    }
    printNumber();



    var printNumber = function(){
        console.log(55); 
    }
    printNumber();
    


    var printNumber = () =>{
        console.log(555); 
    }
    printNumber();
    
    
                       // Task-3

function addAndPrint() { 
    console.log(4 + 3); 
    }
    addAndPrint()  ; 



    var addAndPrint = function(){
        console.log(70 + 7); 
    }
    addAndPrint(); 



    var addAndPrint = () =>{
        console.log(770 + 7); 
    }
    addAndPrint(); 
    
    
                      // Task-4

 function subtract(a, b) { 
    return a - b; 
    }
var result = subtract(20,10)
console.log(result)



var subtract= function(a, b) { 
   return a - b; 
   }
var result = subtract(20,10)
console.log(result)



var subtract= (a, b) =>{ 
    return a - b; 
    }
var result = subtract(20,10)
console.log(result)                     

                        
                       //Task-5

function subtract(a, b) { 
    return a - b; 
    }
var result = subtract(20,10)
console.log(result)



var subtract= function(a, b) { 
   return a - b; 
   }
var result = subtract(20,10)
console.log(result)



var subtract= (a, b) =>{ 
    return a - b; 
    }
var result = subtract(20,10)
console.log(result)

                     //Task-6


function double(x) { 
    return x + x; 
    }
var result = double(38.5);
console.log(result);


var double = function(x) { 
    return x + x; 
    }
var result = double(38.5);
console.log(result);


var double = (x) => { 
    return x + x; 
    }
var result = double(38.5);
console.log(result)


                   // Task-7

function square(x) { 
    return x * x; 
    }
var result = square(5)
console.log(result)

var square = function (x) { 
    return x * x; 
    }
var result = square(5)
console.log(result);


var square = (x) => { 
    return x * x; 
    }
var result = square(5)
console.log(result)

                      // Task-8

 function isPositive(x) { 
    return x > 0;
    }
var result = isPositive(5)
console.log(result);
     

var isPositive = function(x) { 
    return x > 0;
    }
var result = isPositive(5)
console.log(result);


var isPositive = (x) => { 
    return x > 0;
    }
var result = isPositive(5)
console.log(result);
     

                       //Task-9

function absolute(x) { 
    if (x < 0) { 
    return 0 - x; 
    }
     return x; 
    }
var result = absolute(-5);
console.log(result);    


var absolute = function(x) { 
    if (x < 0) { 
    return 0 - x; 
    }
     return x; 
    }
var result = absolute(-5);
console.log(result);    

var absolute = (x) =>{ 
    if (x < 0) { 
    return 0 - x; 
    }
     return x; 
    }
var result = absolute(-5);
console.log(result);    


                    //Task-10

 function max(a, b) { 
    if (a > b) { 
    return a;
    } 
    return b;
     }
var result = max(1,1);
console.log(result)    

var max = function(a, b) { 
    if (a > b) { 
    return a;
    } 
    return b;
     }
var result = max(1,1);
console.log(result)    


var max = (a, b) => { 
    if (a > b) { 
    return a;
    } 
    return b;
     }
var result = max(1,1);
console.log(result)                       