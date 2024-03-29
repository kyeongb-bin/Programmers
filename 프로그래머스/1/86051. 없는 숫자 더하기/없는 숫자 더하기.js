function solution(numbers) {
    var answer = 0;
    let total = 45;
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    answer = total - sum;
    return answer;
}