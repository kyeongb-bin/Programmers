function solution(n) {
    let sum = 0;
    if((n % 2) == 0){ //even
        for(let i = 0; i <= n; i++){
            if((i % 2) == 0){
                sum += (i*i);
            }
        }
    } else{ //odd
        for(let j = 0; j <= n; j++){
            if((j % 2) == 1){
                sum += j;
            }
        }
    }
    return sum;
}