// Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit


let a=1
let b=50
let sum=0

while(a<b){
    if(a % 3==0){
        console.log(a)

        sum +=a 
    }
    a++
}
console.log("sum of all multiples of 3 to the given number is", sum)
