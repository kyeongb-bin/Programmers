function solution(s) {
    var answer = '';
    let max = 0;
    let min = 0;
    s = s.split(' ').map(s => parseInt(s));
    max = Math.max(...s);
    min = Math.min(...s);
    
    return `${min} ${max}`;
}