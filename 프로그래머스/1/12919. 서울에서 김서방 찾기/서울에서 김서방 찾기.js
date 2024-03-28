function solution(seoul) {
    var answer = '';
    let value = 0;
    for(let i = 0; i < seoul.length; i++){
        if(seoul[i] == "Kim"){
            value = i;
        }
    }
    answer = `김서방은 ${value}에 있다`
    return answer
}