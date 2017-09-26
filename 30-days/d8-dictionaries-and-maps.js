// not working yet 9/25


function processData(input) {
    //Enter your code here
    var inputArray = input.split('\n');    
    var n = inputArray.shift();
    //console.log(inputArray);
    var entries = inputArray.slice(0, n);
    var lookups = inputArray.slice(n);
    //console.log(entries);
    //console.log(lookups);
    var phoneBook = [];
    for (var i = 0; i < entries.length; i++) {
        var nameNum = entries[i].split(' ');
        phoneBook.push(nameNum);
    }
    //console.log(phoneBook);
    
    for (var j = 0; j < lookups.length; j++) {
        if (phoneBook.contains(entries[j])) {
            console.log('hi');
        }
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