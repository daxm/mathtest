function build1To120Test() {
    let numberList = [];
    let i = 1;
    for (i; i <= 120; i++) {
        numberList.push(i);
    }

    while (numberList.length > 0) {
        if (numberList.length > 1) {
            var aRandomPosition = Math.floor(Math.random() * numberList.length) + 1;
        }
        else {
            aRandomPosition = 0;
        }
        let aNumber = numberList.splice(aRandomPosition,1);
        console.log(aNumber);
    }
}

build1To120Test();