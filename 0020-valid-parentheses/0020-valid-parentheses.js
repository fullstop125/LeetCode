/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    
    const mapping = {
        
        '(': ')',
        
        '{': '}',
        
        '[': ']'
        
    };
    
    for (let i =0; i <s.length; i ++){
        
        if(s[i] in mapping){
            stack.push(s[i]);
        }
        else {
            const popped = stack.pop();
            
            if (mapping[popped] !== s[i]){
                return false;
            }
        }
    }
    
    
    return stack.length ===0;
    
    
};