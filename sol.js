function solution(s) {
    s = Array.from(s);
    var answer = true;
    
    let zero_is_true = 0;
    
    while (s.length != 0) {
        if (s.pop() == '(' ) {
            if (zero_is_true == 0) {
                return false;
            }
            zero_is_true--;
        } else {
            zero_is_true++;
        }
    }
    zero_is_true == 0 ? answer = true : answer = false;
    return answer;
}

console.log(solution('(()'));