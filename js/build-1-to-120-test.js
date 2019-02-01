function build1To120Test() {
    let numberList = [];
    for (let i = 1; i <= 120; i++) {
        numberList.push(i);
    }

    while (numberList.length > 0) {
        if (numberList.length > 1) {
            var aRandomPosition = Math.floor(Math.random() * (numberList.length - 1)) + 1;
        }
        else {
            aRandomPosition = 0;
        }
        let aNumber = numberList.splice(aRandomPosition,1);
        console.log(get2NumberSum(aNumber) + "=" + aNumber);
    }
}

function get2NumberSum (theTotal) {
    // What 2 numbers sum to theTotal without using carrying.
    var aRandomDigit = Math.floor(Math.random() * (10));
    var theDifference = 10 - aRandomDigit;
    return [aRandomDigit, theDifference]
}

build1To120Test();