function build1To120Test() {
    let numberList = [];
    for (let i = 1; i <= 120; i++) {
        numberList.push(i);
    }

    while (numberList.length > 0) {
        let aRandomPosition = 0;
        if (numberList.length > 1) {
            aRandomPosition = Math.floor(Math.random() * (numberList.length - 1)) + 1;
        }
        else {
            aRandomPosition = 0;
        }
        let aNumber = numberList.splice(aRandomPosition,1);
        let theSummedNumbers = get2NumberSum(aNumber);
        console.log(theSummedNumbers)
    }
}

function get2NumberSum (theTotal) {
    // What 2 numbers sum to theTotal without using carrying.
    let maxNumber = 0;
    if (theTotal > 10) {
        maxNumber = 10;
    }
    else {
        maxNumber = theTotal;
    }
    let aRandomDigit = Math.floor(Math.random() * (maxNumber));
    let theDifference = theTotal - aRandomDigit;
    return [aRandomDigit, theDifference]
}

build1To120Test();
