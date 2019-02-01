document.addEventListener('DOMContentLoaded', function() {
    build1To120Test();
} );

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
        let the3Numbers = get2NumberSum(aNumber);
        the3Numbers.push(aNumber);
        htmlListMathProblems(the3Numbers)
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

function htmlListMathProblems(theArray) {
    let toc = document.getElementById("test-1-to-120");
    let htmlText = theArray[0] + " + " + theArray[1] + " = " + theArray[2];
    let div = document.createElement( "div" );
    div.appendChild( htmlText );
    toc.appendChild( div );
}

try {
    module.exports = htmlListMathProblems();
} catch (e) {
    // module.exports is not defined
}

