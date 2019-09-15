 <script>
        
        function story()  {
            
            var boy = document.getElementById("boy");
            
            var girl = document.getElementById("girl");
            
            var loc = document.getElementById("loc");
            
            var verb = document.getElementById('verb');
            
            var obj = document.getElementById('obj');
            
            var purpose = document.getElementById('purpose');
            
            var body = document.getElementById('body');
            
            var ing = document.getElementById('ing');
            
            var aboy = boy.value ;
            var agirl = girl.value ;
            var aloc = loc.value ;
            var averb = verb.value ;
            var aobj = obj.value ;
            var apurpose = purpose.value ;
            var abody = body.value ;
            var aing = ing.value ;
            
    if(aboy=="") {
        alert("please enter all the data first.");
        return false;
    }   
            else if(aboy.length<=2) {
     alert("min character should be 3"); return false;
}

    
     if(agirl=="") {
        alert("please enter all the data first.");
        return false;
    }    
            else if(agirl.length<=2) {
     alert("min character should be 3"); return false;
}

          
     if(aloc=="") {
        alert("please enter all the data first.");
        return false; 
    }     
            else if(aloc.length<=2) {
     alert("min character should be 3"); return false;
}
            
             if(averb=="") {
        alert("please enter all the data first.");
        return false;
    }  
            else if(averb.length<=2) {
     alert("min character should be 3"); return false;
}
            
            if(aobj=="") {
        alert("please enter all the data first.");
        return false;
    }     
            else if(aobj.length<=2) {
     alert("min character should be 3"); return false;
}
            
             if(apurpose=="") {
        alert("please enter all the data first.");
        return false;
    }     
            else if(apurpose.length<=2) {
     alert("min character should be 3"); return false;
}
            
             if(abody=="") {
        alert("please enter all the data first.");
        return false;
    }     
            else if(abody.length<=2) {
     alert("min character should be 3"); return false;
}
            
             if(aing=="") {
        alert("please enter all the data first.");
        return false;
    }     
            else if(aing.length<=4) {
     alert("min character of ing verb should be 5"); return false;
}    
            
            
            
            
            
         var amit = aboy + " and " + agirl + " went " + " to " + " the "  +  "<br/>" + aloc  + " to " + averb + " a " + aobj + "<br/>" + " for " + apurpose + ". " + "<br/>" + "<br/>" + aboy + " fell down and broke his " + "<br/>" + abody  + " and " + agirl + " came " + aing + "<br/>" + " after." ;  
            
        final.innerHTML = amit;   
    
        }
    
    </script>