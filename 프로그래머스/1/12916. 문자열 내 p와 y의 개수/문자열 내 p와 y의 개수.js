function solution(s){
    var answer = true;
    var arr = [];
    let pcount = 0;
    let ycount = 0;
    arr = s.split('').map(arr => arr);
    for(let i of arr){
        if((i == 'p') || (i == 'P')){
            pcount++;
        } else if((i == 'y') || (i == 'Y')){
            ycount++;
        }
    }
    if(pcount != ycount){
        answer = false;
    }
    return answer;
}