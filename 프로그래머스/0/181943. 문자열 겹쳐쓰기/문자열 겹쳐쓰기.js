function solution(my_string, overwrite_string, s) {
    //slice는 자르는 지점
    return my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length);
    //slice s + length는 처음에 자르고 이어 붙이고 남은 것을 다시 이어 붙이는 과정
}