// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
//check in a way that you can never have a closing bracket before an opening bracket
//make a counter , if it goes -1 then not balanced, if does not end at 0 then not balanced

const balanced = string => {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(') {
            count++;
        } else if (string[i] === ')') {
            count--;
        }
        if (count < 0) {return false}
    }
    if (count > 0) {return false}
    return true;
}

console.log(balanced(sample1));
console.log(balanced(sample2));
console.log(balanced(sample3));
console.log(balanced(sample4));

const balancedPs = string => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        (string[i] === '(') ? count++ : (string[i] === ')') ? count-- : null;
        if (count < 0) {return false}
    }
    return count === 0;
}

console.log(balancedPs(sample1));
console.log(balancedPs(sample2));
console.log(balancedPs(sample3));
console.log(balancedPs(sample4));



//Solution 3 - instructor for multiple bracket types
const balance = string => {
    let count = {
        "(": 0,
        ")": 0,
        "[": 0,
        "]": 0,
        "{": 0,
        "}": 0
    }
    for(let i = 0; i < string.length; i++) {
        for(let bracket in count) {
            if (string[i] === bracket) {
                count[bracket]++
            }
        }
    }
    return count["("] === count[")"] && count["["] === count["]"] && count["{"] === count["}"];
}

balance("((())){{}}}[[]]()()[[((}}))")