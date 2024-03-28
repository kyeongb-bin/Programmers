function solution(x) {
    var answer = true;
    let hsd = String(x).split('').map(x => parseInt(x));
    let sum = 0;
    for(let i = 0; i < hsd.length; i++){
        sum += hsd[i];
    }
    if((x % sum) != 0){
        answer = false;
    }
    return answer;
}