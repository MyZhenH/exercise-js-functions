// Segment 1: Functions with No Parameters and No Return Values 

//1. Create a function called greet that logs the string "Hello, World!" to the console.
// function greet() {
//     console.log("Hello World!");
// }

//2. Write a function named favoriteNumber that logs your favorite number (e.g., 42) to the console.




//3. Create a function called magicEightBall that logs a random response from the following list: "Yes", "No", "Maybe", or "Ask again later".
// function magicEightBall(){
//     const answerList = ["Yes", "No", "Maybe", "Ask again later"];
//     const randomAnswer = Math.floor(Math.random()* answerList.length);
//     console.log(answerList[randomAnswer]);

// }

//4. Write a function called getCurrentYear that logs the current year to the console using the Date object.
// function getCurrentYear(){
//     console.log(new Date);  

// }

//5. Create a function called tellJoke that logs a random joke from a predefined list of jokes to the console.
function tellJoke(){
    const listOfJokes = 
    ["What did one snowman say to the other snowman?", 
    "What did 20 do when it was hungry?",
    "Why is grass so dangerous?",
    "Why shouldn’t you fundraise for marathons?",
    "Why did the crab cross the road?"]
    const randomAnswer = Math.floor(Math.random()* listOfJokes.length);
    console.log(listOfJokes[randomAnswer]);    
}


// Segment 2: Functions with Parameters (One or More)

//6. Write a function named personalGreeting that takes a name as a parameter and logs a greeting string (e.g., "Hello, [name]!") to the console.
