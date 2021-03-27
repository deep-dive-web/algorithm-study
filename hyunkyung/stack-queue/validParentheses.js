/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const newMap = new Map();
    newMap.set(')','(');
    newMap.set(']','[');
    newMap.set('}','{');

    const stack = [];
    for (let i=0; i<s.length; i++){
        const el = s.charAt(i);
        if(el === ')' || el === ']' || el === '}'){
            const stackLength = stack.length;
            if(stackLength>0 && stack[stackLength-1] === newMap.get(el))
                stack.pop();
            else return false;
        }
        else stack.push(el);
    }
    if(stack.length > 0 ) return false;
    return true;
};