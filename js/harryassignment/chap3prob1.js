let obj = {
    harry : 98 ,
    rohan : 70,
    aakash : 7
}

for(let i=0; i<Object.keys(obj).length; i++){
    console.log("Marks of student", Object.keys(obj)[i], "are", obj[Object.keys(obj)[i]])
}