// Problem 1: If the number is divisible by 3, print a "multiple of 3".



function checkIsDivisibleOf3(num) {
    if (num % 3 == 0) {
        console.log(num, "is multiple of 3")
    } else {
        console.log(num, "is not multiple of 3")

    }

    // num % 3 == 0 ? console.log(num, "is multiple of 3") : console.log(num, "is not multiple of 3")
}

checkIsDivisibleOf3(10)
checkIsDivisibleOf3(3)
checkIsDivisibleOf3(12)