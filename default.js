var numberList = [];
var i = 1;
for (i; i <= 120; i++) {
    numberList.push(i);
}

while (numberList.length > 0) {
    var aNumber = numberList.splice(0,1);
    console.log(numberList);
}