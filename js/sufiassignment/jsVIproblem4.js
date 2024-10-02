// Problem 4: Print the average of even numbers from 1 to 100 (both included)


let a=1
let b=100
let sum=0
let even=0
let average=0

while(a<=b){
    if(a %2 ==0){
     sum +=a
     even++
    }
a++
average = (sum /  even)
}
console.log("average is =" ,average)

