for(var num = 1; num<7; num=+2){
    console.log(num)
}
//conditional

var username = "Brianp"
var password = "123"
var age = "21"


//<, > , <=, >=, ==, !=(not equal to)
if(username == "Brianp"){
    console.log("Welcome Brian Paez")
}

if(age >= 18){
    console.log("You can vote and buy lottery tickets")
}
else if (age >= 21){
    console.log("You can vote and buy lottery tickets")
    console.log("You can purchase nicotine and alcohole")
}
else if (age >= 25){
    console.log("You can vote and buy lottery tickets")
    console.log("You can purchase nicotine and alcohole")
    console.log("rent a car")

}
else{
    console.log("You are a little young come back later")
}

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// given an array print the number of positive integers with given array
//Interate through the array(for loop)
// check to see if the numbers in array are greater or equal to 0(conditionls)
    
console.log("there are " + countPositives + " positive values");



