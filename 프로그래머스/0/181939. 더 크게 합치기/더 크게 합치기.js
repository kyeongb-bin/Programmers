function solution(a, b) {
    //Math.max 더 큰 숫자 반환 함 그래서 a랑 b 합친 후에 확인
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}