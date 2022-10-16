//call
var obj1 = {
    num:4
};
var adding = function(a,b,c){
    return this.num + a + b + c;
}
console.log(adding.call(obj1,3,4,5))

//apply
var obj1 = {
    num:4
};
var adding = function(a,b,c){
    return this.num + a + b + c;
}
var arr = [1,2,3];
console.log(adding.apply(obj1,arr));

//multiple objs
var obj1 = {
    num:4
};var obj2 = {
    num:8
};
var adding = function(a,b,c){
    return this.num + a + b + c;
}
var arr = [1,2,3];
console.log(adding.apply(obj1,arr));
console.log(adding.apply(obj2,arr));

//bind
var obj1 = {
    num:4
};
var adding = function(a,b,c){
    return this.num + a + b + c;
};
var bound = adding.bind(obj1);
 console.log(bound(1,3,4));

//Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.
var Student = {
    age:20
};
var printage = function(){
    return this.age;
}
var bound = printage.bind(Student);
console.log(bound());

//curring by bind
let multiply = function(x,y){
    console.log(x * y);
}

let multiplyby2 = multiply.bind(this, 2);
multiplyby2(3);

let multiplyby3 = multiply.bind(this, 3);
multiplyby3(5);

//curring by closures
let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyby2 = multiply(2);
multiplyby2(3);

let multiplyby3 = multiply(3);
multiplyby3(5);
