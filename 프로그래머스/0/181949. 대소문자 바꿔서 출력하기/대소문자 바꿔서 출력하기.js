const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    result = "";
    for (let i of str){
        if(i == i.toUpperCase()){ //대문자면 소문자로
            i = i.toLowerCase();
        } else {
            i = i.toUpperCase(); //소문자면 대문자로
        }
        result += i;
    }
    console.log(result);
});