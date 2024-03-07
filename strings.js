//Extract the last four characters from the string below;"extravaganza"
let a = "extravaganza"
console.log({character: a[8]});
console.log({character: a[9]});
console.log({character: a[10]});
console.log({character: a[11]});


//Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"
const food = "The quick fox jumped over the lazy dog";
const insertString = "eat"
const secondfood = food.substring(0,4) + insertString + food.substring(4);
console.log(secondfood)

//Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
const string4 = "The quick brown fox jumps over the lazy dog";
console.log((string4.match(/the/g)).length);
console.log((string4.match(/brown/g)).length)

//Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
const string1 = "The pupils are reading in the library"
const string2 = "The child was sitting on the table before it fell"
console.log({index:string1.indexOf('are')});
console.log({index:string2.indexOf('sitting')});


//Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"
let text1 = "wonderful"
let text2 = "amazing"
let text3 = "UndERneath"
let text4 = "A wonderful world"
console.log(text1.toUpperCase());
console.log(text2.toLowerCase());
console.log(text3.toLowerCase())






