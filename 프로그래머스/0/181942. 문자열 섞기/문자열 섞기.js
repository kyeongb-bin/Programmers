function solution(str1, str2) {
    var answer = '';
    for(let i = 0; i < str1.length; i++){
        answer += str1[i];   //str1 먼저
        answer += str2[i];   //str2 다음
    }
    return answer;
}