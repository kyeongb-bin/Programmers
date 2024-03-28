function solution(n) {
    var answer = [];
    let result = '';
    let i = '';
    answer = String(n).split('').sort((a, b) => b - a).map(answer => parseInt(answer));
    for(i of answer){
        result += i;
    }
    return parseInt(result)
}