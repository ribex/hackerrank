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
    
    var phoneMap = {};
    for (var k = 0; k < phoneBook.length; k++) {
        phoneMap[phoneBook[k][0]] = phoneBook[k][1];
    }
    
    // console.log(phoneMap);
    
    
    for (var j = 0; j < lookups.length; j++) {
        if (phoneMap.hasOwnProperty(lookups[j])) {
            console.log(lookups[j] + "=" + phoneMap[lookups[j]]);
        } else {
            console.log("Not found");
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