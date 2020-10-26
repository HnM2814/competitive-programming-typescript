

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

        result = Math.floor(sum/2)+result;
        carry = Math.floor(sum%2);

        i--;
        j--;
    }

    return result;
};

console.log("Binary Addition: ", addBinaryString("0010","1101"));