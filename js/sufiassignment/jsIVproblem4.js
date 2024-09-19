// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

const users = [
    {
        username: "adiba", password: "123435"
    },
    {
        username: "sufi", password: "asd"
    },
    {
        username: "anabiya", password: "asdasd"
    }
]

function userCanLogin(username, password) {

    let isUserExist = false;
    //flag set

    for (let i = 0; i <= users.length - 1; i++) {
        // console.log(i , users[i])
        let user = users[i]
        if (user.username == username) {
            isUserExist = true
            if (user.password == password) {
                console.log("user Login success")
            } else {
                console.log("Pass in correct")
            }

        }
    }


    if (isUserExist == false) {
        console.log("user not exist")
    }

}

userCanLogin("anabiyar", "asdasd")

// const arr = [1,21,5161, 4]
// console.log(arr.length)
// console.log(users[2])
// string "adiba"

// object { key : value }

// array [ {user : "asdasd"} , {user : "asdasd"}]