function solution(num_list) {
    var answer = 0;
    let sum = 0;
    let gop = 1;
    let i = 0;
    for(i of num_list){
        sum += i;
        gop *= i;
    }
    sum = sum * sum;
    if(sum > gop){
        answer = 1;
    } else{
        answer = 0;
    }
    
    return answer;
}