/**
 *      Given two binary strings, return their sum (also a binary string).
        The input strings are both non-empty and contains only characters 1 or 0.

        Example 1:
        Input: a = "11", b = "1"
        Output: "100"

        Example 2
        Input: a = "1010", b = "1011"
        Output: "10101"
        

        Constraints:
        - Each string consists only of '0' or '1' characters.
        - 1 <= a.length, b.length <= 10^4
        - Each string is either "0" or doesn't contain any leading zero.
 */
const addBinaryString = (s1:string, s2:string) => {
    if(!s1 && s2) return s2;
    if(s1 && !s2) return s1;
    if(!s1 && !s2) return "";

    let result = "";
    let i = s1.length-1;
    let j = s2.length-1;
    let carry = 0;
    let sum = -1;

    while(i >= 0 || j >= 0){
        sum = carry;
        
        if(s1[i]){
            sum += Number(s1[i]);
        }

        if(s2[j]){
            sum += Number(s2[j]);
        }

        result = Math.floor(sum%2)+result;
        carry = Math.floor(sum/2);

        i--;
        j--;
    }

    if(carry) result = carry+result;

    return result;
};

console.log("Binary Addition: ", addBinaryString("1001","1101"));