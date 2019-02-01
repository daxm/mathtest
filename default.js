var numberList = [];
var i = 1;
for (i; i <= 120; i++) {
    numberList.push(i);
}

while (numberList.length > 0) {
    var aRandomPosition = Math.floor(Math.random() * numberList.length) + 1;
    var aNumber = numberList.splice(aRandomPosition,1);
    console.log(numberList);
}