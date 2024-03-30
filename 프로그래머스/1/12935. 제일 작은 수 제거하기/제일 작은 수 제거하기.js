function solution(arr) {
    if (arr.length == 1) {
        return [-1];
    }
    
    let min = 0;
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[min] > arr[i + 1]) {
            min = i + 1;
        }
    }
    
    arr.splice(min, 1);
    return arr;
}