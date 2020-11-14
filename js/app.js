

var age = [
    23,
    12,
    56,
    13,
    
    
    
];
var is_subscribed = [
    'true',
    'false',
    'true',
    'false',
    
];








 for (var i = 0; i < age.length; i++){
    if (age[i] < 18 && is_subscribed[i] == 'false'){
        console.log("The user is younger than 18 and not subscribed");
    }
    else if(age[i] >= 18 && is_subscribed[i] == 'false'){
        console.log("The user is 18 or older and not subscribed");
    }
    else if(age[i] < 18 && is_subscribed[i] == 'true'){
        console.log("The user is younger than 18 and is subscribed");
    }
    else {
        console.log("The user is 18 or older and is subscribed")
    }
    
     
 }

//  for (var i = 0; i < is_subscribed.length; i++){
//      console.log(is_subscribed[i]);
//  }


