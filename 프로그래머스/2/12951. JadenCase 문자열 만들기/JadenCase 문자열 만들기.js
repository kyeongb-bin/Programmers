function solution(s) {
    let result = s.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase());
    return result.join(' ');
}