console.log("test");
const futuramaQuote: string = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."
// now we log the string 
console.log("Das ist der String, den wir splitten werden", futuramaQuote);
// we define a new variable for the array we want to create out of a string 
// the split is the array and we can use the string as a array 
const futuraQuoteArray : string [] = futuramaQuote.split(".");
// now we test the array in console 
console.log("Das ist der neue Array", futuraQuoteArray);
const futuraQuoteNew: string [] = futuramaQuote.split(" ");
console.log("Das ist eine andere Splitversion, die du benutzen kannst", futuraQuoteNew );
// above we tested different split methods
// now we use the include() method 
let sentence: string = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";
// now we search for "Piper"
console.log(sentence.includes("Piper"));
// the result is true
// now we search for "piper"
console.log(sentence.includes("piper"));
// the result is false bc case sensitive 
// we solve the problem with .toLowerCase()
console.log(sentence.includes("piper"));
// false bc case sensitive 
console.log(sentence.toLowerCase().includes("piper"));
// sucessfull with .toLowerCase
console.log(sentence.includes("peck"));
// now we search for "speck", 50 (index)
// it will be false
console.log(sentence.includes("peck", 50));
// now we write a function with split, reverse, join
const reverseNames : string [] = ["Sergio", "Hannah", "Regalllager", "Reliefpfeiler", "Rentner"];
console.log(reverseNames);
// now we reverse 
console.log(reverseNames.reverse());
// you can see the order has changed
// now we write a function which returns arrays 
function reverseNamesArray(inputArray: string []): string[]{
    return inputArray.split('').reverse().joint(''));
}









