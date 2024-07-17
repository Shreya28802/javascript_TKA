//1.Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
var num1=prompt("Enter the first number");
var num2=prompt("Enter the 2nd number");
var num3=prompt("Enter the 3rd number");
var num4=prompt("Enter the 4th number");
var num5=prompt("Enter the 5th number");
var largest=Math.max(num1,num2,num3,num4,num5);
document.write(`Largest numers in five numbers :${largest}`);
alert("largestnumber",largest);

