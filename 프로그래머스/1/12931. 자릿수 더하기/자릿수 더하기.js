function solution(n)
{
    var answer = 0;
    
    for(let i of `${n}`){
        answer += Number(i);
    }
    return answer;
}