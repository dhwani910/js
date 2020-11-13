var age = prompt("how old you are?");
var is_subscribed = confirm("Do you have subscribtion");


if (age < 18 && is_subscribed == false){
    console.log("The user is younger than 18 and not subscribed");
}
else if(age >= 18 && is_subscribed == false){
    console.log("The user is 18 or older and not subscribed");
}
else if(age < 18 && is_subscribed == true){
    console.log("The user is younger than 18 and is subscribed");
}
else {
    console.log("The user is 18 or older and is subscribed")
}


