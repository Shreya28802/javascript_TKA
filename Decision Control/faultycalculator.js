// 4 - Design Half Faulty Calculator-

// Design a calculator which will correctly solve all the problems except
// # the following ones:

// # 45 * 3 = 555, 56+9 = 77, 56/6 = 4  

  
// # Your program should take operator  and the two numbers as input from the user
// # and then return the result


var num1=prompt("Enter your first number:");
var operator=prompt("Enter operator");
var num2=prompt("Enter your second number:");
var result;

if(num1==45 && operator=="*" && num2==3){
    result=555;
}

else if(num1==56 && operator=="+"&& num2==9){
result=77;
}
else if(num1==56 && operator=="/" && num2==6){
result=4;
}


else{
    if( `<h2 style='color:blue'> operator=='+'</h2>`){
        result=num1+num2;

    }
    else if( operator=='-'){
        result=num1-num2;
    }
    else if( operator=='*') {
        result=num1*num2;
    }
    else if( operator=='/') {
    result=num1/num2;}

    else {"Invalid input "}
}
    



