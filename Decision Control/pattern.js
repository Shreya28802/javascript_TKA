//pattern program
// var count=parseInt(prompt("Enter range"))
// for(i=1;i<=count;i++){
//     for(j=1;j<=i;j++){
// document.write("*")
//     }
//     document.write("<br>")
// }


// var count=parseInt(prompt("Enter range"));
// for(i=1;i<=count;i++){
//     for(var k=count-i;k>=1;k--){
//         document.write("&nbsp; &nbsp");
//     }
//     for(j=1;j<=i;j++){
// document.write("&nbsp;*&nbsp;&nbsp;")
//     }
//     document.write("<br>");
// }

var count=parseInt(prompt("Enter range"));
for(i=1;i<=count;i++){
    for(var k=count-i;k>=1;k--){
        document.write("&nbsp; &nbsp");
    }
    for(j=1;j<=i;j++){
document.write("&nbsp;*&nbsp;&nbsp;")
    }
    document.write("<br>");
}