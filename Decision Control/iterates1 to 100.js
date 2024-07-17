// 3.Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Bizz". For numbers multiples of both three and five print "FizzBizz".


for(var i=1;i<100;i++){
     if(i%3==0 && i%5==0){
        console.log(`FizzBizz <br>`);
        document.write(`FizzBizz <br>`);
      }
  else if(i%3==0){
    console.log(`Fizz <br>`);
    document.write(`Fizz <br>`);}

    else if(i%5==0){
        console.log(`Bizz <br>`);
        document.write(`Bizz <br>`);
    
      }


 
  else{
    console.log(i);
    document.write(`${i}<br>`);
  }
}
