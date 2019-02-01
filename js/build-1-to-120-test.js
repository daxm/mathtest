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
        let theSummedNumbers = get2NumberSum(aNumber);
        htmlListMathProblems(theSummedNumbers)
    }
}

function get2NumberSum (theTotal) {
    // What 2 numbers sum to theTotal without using carrying.

    // Get the 1s digit from theTotal
    let lastDigit = theTotal % 10;

    // Compute a random number between zero and the lastDigit
    let aRandomDigit = Math.floor(Math.random() * (lastDigit));

    // Find and return the 2 numbers.
    let theDifference = theTotal - aRandomDigit;
    return [aRandomDigit, theDifference]
}

function htmlListMathProblems(theArray) {
    let toc = document.getElementById("test-1-to-120");

    // Create divs... 1 master and 1 for each section of the problem.
    let divMaster = document.createElement( "div" );
    divMaster.classList.add('math-problem');
    let divLeft = document.createElement( "div" );
    divLeft.classList.add('problem');
    let divRight = document.createElement( "div" );
    divRight.classList.add('problem');
    let divPlus = document.createElement( "div" );
    divPlus.classList.add('problem');
    let divAnswer = document.createElement( "div" );
    divAnswer.classList.add('problem');

    // Build text parts
    let plusSymbol = "+";
    let plus = document.createTextNode(plusSymbol);

    let numLeft = "";
    let numRight = "";
    let flipOrder = Math.round(Math.random());
    if (flipOrder > 0) {
        numLeft = theArray[0];
        numRight = theArray[1];
    }
    else {
        numLeft = theArray[1];
        numRight = theArray[0];
    }
    let leftNum = document.createTextNode(numLeft);
    let rightNum = document.createTextNode(numRight);

    let theAnswer = document.createTextNode(" = ____");

    // Associate text to divs
    divLeft.appendChild(leftNum);
    divPlus.appendChild(plus);
    divRight.appendChild(rightNum);
    divAnswer.appendChild(theAnswer);

    // glue them together
    divMaster.appendChild(divLeft);
    divMaster.appendChild(divPlus);
    divMaster.appendChild(divRight);
    divMaster.appendChild(divAnswer);
    toc.appendChild(divMaster);
}
