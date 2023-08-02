//Write a JavaScript program that defines a variable that stores a Number. The program should print out the String "even" 
//if the Number is even, and the String "odd" if the Number is odd. Hint: You may need to do some extra research on the remainder 
//operator (%) to solve this challenge.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (var i = 0; i < 10; i++) {
        if (i % 2) {
            console.log(numbers[i] + " is even")

        }
       else {
        console.log(numbers[i] + " is odd")
       }
    }