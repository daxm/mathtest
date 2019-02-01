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


    // glue them together
    divMaster.appendChild(leftNum);
    toc.appendChild(div);
    divMaster.appendChild(plus);
    toc.appendChild(div);
    divMaster.appendChild(rightNum);
    toc.appendChild(div);
    divMaster.appendChild(theAnswer);
    toc.appendChild(div);
    toc.appendChild(div);
}
