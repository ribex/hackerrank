function processData(input) {
    //Enter your code here
    var array = input.split('\n');
    //console.log(array);
    var numCases = array.shift();
    //console.log(numCases);
    for (var j = 0; j < numCases; j++) {
        var newString1 = "";
        var newString2 = "";
        for (var i = 0; i < array[j].length; i++) {
            if (i % 2 === 0) {
                newString1 += array[j][i];
            } else {
                newString2 += array[j][i];
            }
        }
    console.log(newString1 + " " + newString2);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
