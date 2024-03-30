function solution(arr) {
    let min = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[min] > arr[i+1]){
            min = i+1;
        }
    }
    if(arr.length == 1){
        arr.push(-1);
    }
    arr.splice(min, 1);
    return arr;
}