var num=parseInt(prompt("Enter a number"));
var rem;
var result=0;
var temp;
while(num>0){
    rem=parseInt(num%10);
    result=(result*10)+rem;
    num= parseInt(num/10);
}
if(result==temp){
    document.write(`number is pallindrome`);

}
else{
    document.write(`number is not pallindrome`);
}