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
    let flipOrder = Math.round(Math.random());
    let theText = "";
    if (flipOrder > 0) {
        theText = theArray[1] + " + " + theArray[0];
    }
    else {
        theText = theArray[0] + " + " + theArray[1];
    }
    theText +=  " = ____";
    if (theText.length < 15) {
        for (let j = 1; j <= (15 - theText.length); j++) {
            theText += "&nbsp;"
        }
    }
    let htmlText = document.createTextNode(theText);
    let div = document.createElement( "div" );
    div.classList.add('math-problem');
    div.appendChild(htmlText);
    toc.appendChild(div);
}
