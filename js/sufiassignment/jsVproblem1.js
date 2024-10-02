// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties



function yearofbirth(age){
    if(age >= 13 && age <= 19){
        console.log(age, " is Teenage")
    }else if(age >= 20 && age <= 29){
        console.log(age, "Twenties")
    }
}

// yearofbirth(17)
yearofbirth(29)