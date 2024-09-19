//  If a person is allowed to drive in India print "Apply for a license" or "NA"

function allowedToDrive(personAge){
    personAge >= 18 ? console.log(personAge, "Apply for license") : console.log(personAge, "NA")
        
}

allowedToDrive(55)
allowedToDrive(17)
allowedToDrive(76)
allowedToDrive(18)
