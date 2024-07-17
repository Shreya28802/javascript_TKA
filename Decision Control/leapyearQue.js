// To ask user that how many days in a leap year. 
// 	a. if user will get correct ans -
//         then print "You have cleared the first level" and ask again another que "What month has an extra day in leap year?" if user will      	get correct answer then display message "Congratulations !!You have cleared the test" otherwise "You have failed the test".

// b.otherwise print following msg-

//       "Your input is wrong, please try again."

var q1 =prompt("how many days in a leap year")
if(q1==366){
   document.write(`<h2 style='color:Green'>You have cleared the first level</h2>`) ;



var q2 =prompt("(What month has an extra day in leap year?")

if(q2=="feb"){
    document.write(` <h2 style='color:Green'>Congratulations!! You have cleared the test`);

}
else{
    document.write(` <h2 style='color:red'>You have failed the test`);
}
   }

else {
    document.write(` <h2 style='color:red'>Your input is wrong, please try again`)
}
   



