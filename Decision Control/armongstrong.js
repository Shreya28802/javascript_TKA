
var num=parseInt(prompt("Enter a number"));
var rem;
var sum=0;
var result;
var temp;
while(num>0){
    
rem=parseInt(num%10);
result=rem*rem*rem;
sum=sum+result;
num=parseInt(num/10);

}
if(temp==sum){
    document.write(`The number is Armstrong`);
}
else{
    document.write(`The number is not Armstrong`);   
}

