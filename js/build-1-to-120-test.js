function build1To120Test() {
    let numberList = [];
    for (let i = 1; i <= 120; i++) {
        numberList.push(i);
    }

    while (numberList.length > 0) {
        if (numberList.length > 1) {
            var aRandomPosition = Math.floor(Math.random()) * numberList.length + 1;
        }
        else {
            aRandomPosition = 0;
        }
        let aNumber = numberList.splice(aRandomPosition,1);
        if (aNumber.length < 1) {
            console.log(numberList)
        }
        else {
            console.log(aNumber);
        }
    }
}

build1To120Test();