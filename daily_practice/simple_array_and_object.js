function reverseString(str){
    let reverseStr='';
    if(str.length <=1){
        return str;
    }
    for(let i=str.length-1;i>=0;i--){
        reverseStr+= str[i]
    }
    console.log(reverseStr)
}


reverseString("javascript")