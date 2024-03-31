function solution(s) {
    let center = s.length / 2;
    
    if ((s.length % 2) == 0) {
        return s[center - 1] + s[center];
    }
    
    center += 0.5;
    return s[center - 1];
}