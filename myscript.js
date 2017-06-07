function exbtw() {
       
    var bedrag = document.getElementById("bedrag1").value;
    var bedrag1 = bedrag.replace(",", ".");    
        
    if (document.getElementById('6group1').checked) {
  var btw = document.getElementById('6group1').value; }  
    if (document.getElementById('21group1').checked) {
  var btw = document.getElementById('21group1').value;
}   
          
    var x = Math.round((+bedrag1 * +btw)*100)/100;
    var y = Math.round((+x - +bedrag1)*100)/100;
    
    if (+bedrag1 == 0){
    document.getElementById("btwhoeveelheid1").innerHTML = " ";
    document.getElementById("uitkomst1").innerHTML = " ";
    }
    else {  
    document.getElementById("btwhoeveelheid1").innerHTML = y;
    document.getElementById("uitkomst1").innerHTML = x; 
    }
      }
        
        


function incbtw() {
    var bedrag3 = document.getElementById("bedrag2").value;
        var bedrag2 = bedrag3.replace(",", ".");
          
        if (document.getElementById('6group2').checked) {
  var btw = document.getElementById('6group2').value;
}  
       if (document.getElementById('21group2').checked) {
  var btw = document.getElementById('21group2').value;
}
          
        var x = Math.round((+bedrag2 / +btw)*100)/100;
          
        var y = Math.round((+bedrag2 - +x)*100)/100;
          
        if (+bedrag2 == 0) {
    document.getElementById("btwhoeveelheid2").innerHTML = " ";
    document.getElementById("uitkomst2").innerHTML = " ";
    }
    else {
        
        document.getElementById("btwhoeveelheid2").innerHTML = y;
        document.getElementById("uitkomst2").innerHTML = x; 
    }
      }

