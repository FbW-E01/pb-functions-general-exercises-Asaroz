// Write a function that takes in one parameter and logs that parameter 3 times into the console.

function loop_log(a){
    console.log(a)
    console.log(a)
    console.log(a)
}


// Write a function that takes in one parameter and returns that parameter repeated five times. For the input "Cat" it would return "CatCatCatCatCat"

function loop_log_cat(a){
    console.log(a+a+a+a+a)
}
loop_log_cat("cat")

console.log("_______")
// Write a function that takes in two parameters, the first one should be a number and the 2nd one should be a string. 
// The functions returns the 2nd argument repeated as many times as the 1st argument defins. For the inputs 3 and "Woah" it should return WoahWoahWoah

function loop_log_x(x,a){
    let newstring = ""
    for (i=0;i<x;i++){
        newstring=newstring+a
    }
    return newstring
}
console.log(loop_log_x(3,"Cat"))
console.log("_______")
// Write a function that takes in an array of numbers as a parameter. It should return the largest number in the array. For the input [1,6,83,91,0,-4,1337,5] it should return 1337
let task_array=[1,6,83,91,0,-4,1337,5]
function largest_number(array){
    let biggest_number = array[0]
    for (i=0;i<array.length;i++){
        if (biggest_number < array[i]){
            biggest_number = array[i]
        }
    }
    return biggest_number
}
console.log(largest_number(task_array))
console.log("_______")

// This question has 2 parts

// Part a) write a function that takes in a number and does a console.log("Even 10!") if the number is evenly divisable by 10. Examples:

// printIfDivisibleByTen(1) --> no output
// printIfDivisibleByTen(2) --> no output
// printIfDivisibleByTen(32) --> no output
// printIfDivisibleByTen(10) --> "Even 10!" into the console
// printIfDivisibleByTen(30) --> "Even 10!" into the console
// printIfDivisibleByTen(90000) --> "Even 10!" into the console
// Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.

for (i=0;i<125;i++){
    is_even(i)
}

function is_even(a){
    if((a%10)==0){console.log(a," Even 10!")}
}

console.log("_______")
// Write an arrow function that takes in 5 numbers as its parameters and returns the largest one

const largerest_number = (a,b,c,d,e) =>{
    let array = [a,b,c,d,e]
    let biggest_number = array[0]
    for (i=0;i<array.length;i++){
        if (biggest_number < array[i]){
            biggest_number = array[i]
        }
    }
    return biggest_number
}

console.log(largerest_number(3,20,2,8,1))

console.log("_______")
// Write an arrow function that takes in one parameter and returns true if that parameter is a string.
const is_string = (string) => typeof string === 'string'

console.log(is_string("hello"))

console.log("_______")
// Write an arrow function that takes in two parameters and returns true if both of them are strings.

const is_string_2 = (string,string2) => typeof string === 'string' && typeof string2 === 'string'

console.log(is_string_2("hello","hey"))

console.log("_______")

// Write an arrow function that takes in one string. The function should return the first word in the string that was given to it. Examples:

// getFirstWord("Internetting is hard") --> "Internetting"
// getFirstWord("Hello World") --> "Hello"
// getFirstWord("Hello") --> "Hello"

const return_first = (string) => {
    if (string.indexOf(" ")!=-1){
       return string.slice(0,string.indexOf(" "))
    }
    return string
}

console.log(return_first("Hello"))


console.log("_______")
// HARD Write an arrow function that takes in one string. The function should return a new string that where each word in the input string is repeated by the amount of words in the input string. Examples:

// wordRepeater("bunny") --> "bunny"
// wordRepeater("Cat food") --> "Cat Cat food food"
// wordRepeater("I am groot") --> "I I I am am am groot groot groot"
// wordRepeater("O M G ?") --> "O O O O M M M M G G G ? ? ? ?"


const double_word=(string)=>{
    let split_string= string.split(" ")
    let new_string=""
    for (i=0;i<split_string.length;i++){
        new_string=new_string+split_string[i]+" "+split_string[i]+" "
    }
    return new_string
}
console.log(double_word("hello how are you"))


console.log("_______")
// Write a short (single line) arrow function that takes in one string and returns the first character of that string. Examples:
// firstLetter("cat") --> "c"
// firstLetter("quylthulg") --> "q"


const first_letter = (string) => string.charAt(0)
console.log(first_letter("Hallo"))

console.log("_______")
// Write an arrow function that takes in one string and returns a new string. The new string needs to be made from the first letter of each of the words in the input. Examples:

// firstLetters("cat") --> "c"
// firstLetters("What the fruit") --> "Wtf"
// firstLetters("MongoDB Express Node React") --> "MERN"
// firstLetters("What You See Is What You Get") --> "WYSIWYG"


const first_char_long=(string)=>{
    let split_string= string.split(" ")
    let new_string=""
    for (i=0;i<split_string.length;i++){
        new_string = new_string + split_string[i].charAt(0)
    }
    return new_string
}
console.log(first_char_long("hello how are you"))


console.log("_______")

// Write an arrow function that takes in one variable. If that variables is a string, it will return the length of the string. If that variable is an array, it returns the length of the array. If it is something else, it will return null. You might need to search Google to find out how can you identify if the parameter is an array - but there are other ways to solve this too!
const validate_parameter=(para) => {
    if (para.length){
        return para.length
    }
    return null
}
console.log(validate_parameter(task_array))
console.log(validate_parameter(2))
console.log(validate_parameter("hello"))
console.log("_______")

// Write an arrow function that takes in one variable. If the variable is not a string, return null.
//  If it is a string, return an array where each of the characters of that string is in individual array entry. Examples:

// explode("Cat") --> ["C", "a", "t"]
// explode(41) --> null
// explode("") --> []
// explode("R & D") --> ["R", " ", "&", " ", "D"]

const split_stringer=(string)=>{
    
     if(typeof string === 'string'){
        return string.split("")
     }
     return null
}

console.log(split_stringer("hhehehhe"))
console.log(split_stringer(""))
console.log(split_stringer(2323))
console.log(split_stringer("Hallo & wie gehts?"))
console.log("_______")
// Reverse engineering challenge 1. Write a function that does this (BONUS: write it as a short (one line) arrow function):




// foo("") -> false
// foo("a") -> false
// foo("o") -> true
// foo("Cat") -> false
// foo("Tomato") -> true
// foo("Potato") -> true
// foo("Blanket") -> false
// foo("1") -> false
// Reverse engineering challenge 2. Write a function that does this (BONUS: write it as a short (one line) arrow function):

const reverse_1 = (string) => Boolean(string.indexOf("o")+1)
console.log(reverse_1("halloo"))

console.log("_______")
// bar("") --> "Cat"
// bar("x") --> "Cat"
// bar("Cat") --> "Catt"
// bar("Foobar") --> "Catobar"
// bar("Potato") --> "Cattato"
// bar("Tomato") --> "Catmato"
// bar("International Space Station") --> "Catternational Space Station"

const reverse_2 = (string) => "Cat" + string.slice(2,string.length)
console.log(reverse_2(""))
console.log(reverse_2("X"))
console.log(reverse_2("Cat"))
console.log(reverse_2("Tomato"))