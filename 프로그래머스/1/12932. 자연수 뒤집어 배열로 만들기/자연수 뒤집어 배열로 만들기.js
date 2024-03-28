function solution(n) {
    var answer = [];
    //n을 문자로 바꾸고 split로 나눈 다음 reverse로 뒤집고 map으로 answer을 숫자형으로 바꿈
    //parseInt = Number
    answer = String(n).split('').reverse().map(answer => parseInt(answer));  
    return answer;
}