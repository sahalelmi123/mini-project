/****************************
*variable and data types
*/

/*
var firstName = 'john';
console.log(firstName);

var lastName = 'smith'
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//Varable naming rules
var 3year = 3;
var johnMark = 'john and Mark';
var if = 23;
*/


/****************************
*variable and mutation and type coercion
*/
/*
var firstName = 'john';
var age = 28;

//type coercion
console.log(firstName + ' '+age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + 'year old' + job + '.Is he married? ' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lasName = prompt('What is his last Name?');
console.log(firstName + ' ' + lasName);

*/


/**********************
*Basic operators
*/
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


//Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


//typeof operator 
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older tha john');
var x;
console.log(typeof x);





/***********************************************************
*Operator precedence
**/

var now = 2018;
var yearJohn = 1969;
var fullAge =18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

//Grouping 
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6 ; // 8 * 4 - 6 //32 - 6 // 26

console.log(x, y);

//More operators 
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);


/************************************
*if / else statements
*/

var firstName = 'john';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :');
} 

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :');
    
    
    
    /********************************************
    *Boolean logic
    */
    
    var firstName = 'john';
    var age = 20;
    
    if (age < 13) {
        console.log(firstName + 'is a boy.');
    } else if (age >= 13 && age < 20) {
        console.log(firstName + ' is a teenager.');
    } else if (age >= 20 && age < 30) {
            console.log(firstName + ' is a young man.')
    } else {
        console.log(firstName + ' is a man.');
    }