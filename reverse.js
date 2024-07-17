var num=prompt("Enter a number");
var rs=0;
var rem;
 while(num>0){
    rem=parseInt(num%10);
    rs=(rs*10)+rem;
    num=parseInt(num/10);
    
 }
 document.write(`reverse number:${rs}`);