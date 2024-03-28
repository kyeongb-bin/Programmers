function solution(n) {
    //Math.sqrt는 제곱근을 알아냄
    const sqrt = Math.sqrt(n);
    //Number.isInteger는 정수인지 확인
    if (Number.isInteger(sqrt)) {
        //정수면 Math.pow로 1을 더하고 제곱 함
        return Math.pow(sqrt + 1, 2);
    }
    return -1;
}
