// In the exercises below, wr ite your own code where indicated to achieve the desired result.
// One example is already completed. Your task is to complete any remaining prompt.
// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
console.log("Is numberTeachers equal to stringTeachers?", numberTeachers === stringTeachers);
// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("Is numberTeachers not eaqual to numberStudents?", numberTeachers != numberStudents);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("Is numberStudents 21 or greater?", numberStudents >= 21)




// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a comment,in English, explaining what that line of code is doing, including what the comparison will evaluate to.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);

// YOU DO: Explain.

// Are there more friends than siblings? The log should read true since the console.log reads friends > siblings and there are
// 6 friends to only 2 siblings.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.

// Console.log shows that attendees is not equal to meals. This is true since there are 9 attendees to 8 meals. 

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);

// This will read false. The user is hungry but not finished their homework. Both are needed to read true. 

// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

// This will read true. The user is hungry but not finished there homework. Only one variable needs to be true in this instance.

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats

console.log(lovesToPlay && lovesTreats);

//True

// YOU DO:
// Determine if the dog loves to play or loves the dog park

console.log(lovesToPlay || lovesDogPark)

//False

// YOU DO:
// Determine if the dog loves to play and is a puppy
// HINT: Use the age variable and assume that a puppy is less than 2 years old

console.log(lovesToPlay && age <= 2)

//True