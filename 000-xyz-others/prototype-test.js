
class Polygon {
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }
    // this.name = 123;
    sayName() {
        console.log(`Hi, I am a ${this.name}!`);
    }
}

let p = new Polygon(300, 400);
// Polygon {name: "Polygon", height: 300, width: 400}

p.name;
// "Polygon"

p.height;
// 300

p.width;
// 400

p.sayName();
// Hi, I am a Polygon!



Polygon.init = function(){console.log(`initing...!`);}
// ƒ (){console.log(`initing...!`);}
p.init();
// Uncaught TypeError: p.init is not a function
Polygon.init();
// initing...!


Polygon.prototype.init = function(){console.log(`initing...!`);}
// ƒ (){console.log(`initing...!`);}
p.init();
// initing...!
Polygon.init();
// initing...!


p.__proto__;


/* 

1. Polygon.init 

> add to Class's property function!

2. Polygon.prototype.init

> add to it's constructor function!
> add to it's prototype chain!

*/






const Polygon = (name = 'Polygon', height = 100, width = 100) => {
    this.name = name;
    this.height = height;
    this.width = width;
    let sayName = () => {
        console.log(`Hi, I am a ${this.name}!`);
    }
    let showHeight = () => {
        console.log(`height = ${this.height}!`);
    }
    let showWidth = () => {
        console.log(`width = ${this.width}!`);
    }
    return {
        sayName,
        showHeight,
        showWidth
    };
};

let p = new Polygon(`NP`, 300, 400);
// Polygon {name: "Polygon", height: 300, width: 400}




Polygon.init = function(){console.log(`initing...!`);}
// ƒ (){console.log(`initing...!`);}

Polygon.init();
// initing...!
pp.init();
// Uncaught TypeError: pp.init is not a function


Polygon.prototype;
// undefined
Polygon.prototype.init = function(){console.log(`initing...!`);}
// Uncaught TypeError: Cannot set property 'init' of undefined

Polygon.__proto__.init = function(){console.log(`initing...!`);}
// ƒ (){console.log(`initing...!`);}

Polygon.init();
// initing...!
pp.init();
// Uncaught TypeError: pp.init is not a function






// function Polygon(args) {}
// var Polygon = function Polygon(args) {}
function Polygon(args) {
    /* arguments: Arrary-like to Array */
    var args1 = Array.prototype.slice.call(arguments);
    console.log(`args1 = ${args1}!`);
    // args1 = NP,300,400!
    var args2 = [].slice.call(arguments);
    console.log(`args2 = ${args2}!`);
    // args2 = NP,300,400!
    // ES2015
    const args3 = Array.from(arguments);
    console.log(`args3 = ${args3}!`);
    // args3 = NP,300,400!
    const args4 = [...arguments];
    console.log(`args4 = ${args4}!`);
    // args4 = NP,300,400!
    // var args = arguments;
    var args = Array.from(arguments);
    console.log(`args = ${args}!`);
    // [object Arguments]!
    console.log(`arguments = ${arguments}!`);
    // [object Arguments]! ???
    var name = args[0],
        height = args[1],
        width = args[2];
    var sayName = function(){
        console.log(`Hi, I am a ${name}!`);
        console.log(`args[0] = ${args[0]}!`);
        console.log(`arguments[0] = ${arguments[0]}!`);
    };
    var showHeight = function(){
        console.log(`height = ${height}!`);
    };
    var showWidth = function(){
        console.log(`width = ${width}!`);
    };
    return {
        sayName: sayName,
        showHeight: showHeight,
        showWidth: showWidth
    };
    // Polygon.prototype.init ??? no return init
};



var p = new Polygon(`NP`, 300, 400);
// Polygon {name: "Polygon", height: 300, width: 400}

p.showHeight();
// height = 300!
p.showWidth();
// width = 400!

p.sayName();
// Hi, I am a NP!
// args[0] = NP!
// arguments[0] = undefined!

Polygon.init = function(){console.log(`initing...!`);}
// ƒ (){console.log(`initing...!`);}

Polygon.init();
// initing...!
p.init();
// Uncaught TypeError: p.init is not a function

Polygon.prototype.init = function(){console.log(`initing...!`);}
// ƒ (){console.log(`initing...!`);}

Polygon.init();
// initing...!
p.init();
// Uncaught TypeError: p.init is not a function
