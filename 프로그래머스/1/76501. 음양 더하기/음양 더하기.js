function solution(absolutes, signs) {
    var answer = 0;
    for(let i = 0; i < signs.length; i++){
        if(signs[i] == false){
            absolutes[i] = absolutes[i] - absolutes[i]*2;
        }
    }
    for(let j = 0; j < absolutes.length; j++){
        answer += absolutes[j];
    }
    return answer;
}