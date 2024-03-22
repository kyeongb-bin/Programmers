function solution(arr) {
    var answer = 0;
    let sum = 0;
    let i;
    for(i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    answer = sum/i;
    return answer;
}