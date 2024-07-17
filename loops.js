var n1=prompt("Enter the 1st number");
var n2=prompt("Enter the 2nd Number");

if(n1<n2) {
    for(var i=n1;i<=n2; i++){
        document.write(`${i}<br>`);
    }
}

    else 
    {
        for(var i=n1;i>=n2; i--){
  
          document.write(`${i}<br>`);
    }
}



