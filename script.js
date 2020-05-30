//AW19 - Programming foundations, Tore Berg jan20FT



//Question 1. Create an array called petArray with 3 string items in it: "cat", "cow", "dog".

var petArray = ["cat", "cow", "dog"];

//Question 2. Console log the value of the second item in petArray.

var secondItem = petArray[1];
console.log(secondItem); //cow

//Question 3. Add the item "sheep" to petArray using the push method.

petArray.push("sheep");

//Question 4. Console log how many items there are now in petArray using the length method.

console.log(petArray.length); //4

//Question 5. Create an object called catObject with 3 properties: name, colour, age. Add appropriate values (and type of values) for each of these properties.

var catObject = {
    name: "Wilma",
    colour: "grey",
    age: 3
};

//Question 6. Console log the value of the third property of catObject.

console.log(catObject.age); //3

//Question 7. Take the value of catObject (the {} part) and place it inside an array called catArray.

var catArray = [
    {
        name: "Wilma",
        colour: "grey",
        age: 3
    }
];

//Question 8. Loop through catArray and console log each property of each object inside (there will be only 1 object inside).

for (var i=0; i <catArray.length; i++) {
    console.log(catArray[i]); //{name: "Wilma", colour: "grey", age: 3}
}

//Question 9. Create a function called logToConsole. The function should accept 1 argument. Decide on the name of the argument and console log its value inside the function.

function logToConsole(useFulLearning) {
    console.log(useFulLearning);
}

//Question 10. Call the logToConsole function and pass in the value "donkey".

logToConsole("donkey"); //donkey