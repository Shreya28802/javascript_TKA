var Student_name=prompt("Enter the Name of Student");
var rno=prompt("Enter the roll number of studnet");
var m1=parseInt(prompt("Enter marks of m1"));

var m2=parseInt(prompt("Enter marks of m2"));
var m3=parseInt(prompt("Enter marks of m3"));
var total=m1+m2+m3;
var per=parseInt(total/3);

var grade;
if(per>=70){
    grade="A";

}
else if(per>=60 && per<70){
    grade="B";

}
else if (per>=50 && per<60){
    grade="C";

}
else if(per>=40 && per<50){
    grade="D";
}
else{
    grade="f";
}
document.write("<table  border=2 align=Center width '300px' cellpadding=5 >  <tr> <th>Roll no</th>  <th>Name</th>  <th>M1</th> <th>M2</th>  <th>M3</th>  <th>Total</th>  <th>Percantage</th>  <th>Grade</th>   <tr>  ");
document.write("<tr><td>" +rno+"</td> <td>" +Student_name+ "</td> <td>"  +m1+ "</td> <td>"    +m2+ "</td> <td>"   +m3+ "</td> <td>"   +total+ "</td> <td>"  +per.toFixed(2)+ "</td> <td>"  +grade+ "</td> </tr>");
