
$(document).ready(function() {
    //$('#todo').click(function(e){
        //console.log("todo clicked");
        $.getJSON('https://jsonplaceholder.typicode.com/todos', function(data) {
            var items = [];
            items.push("<ol>");
             $.each( data, function( key, val ) {
                 var checked = (val.completed) == true ? "checked disabled" : "";
                 items.push("<li>" + `<input type = checkbox name="checkbox1" id = "checkbox1" ${checked}>` + val.title + "</li>");         
                 //console.log("<li>" + `<input type = checkbox name="checkbox1" id = "checkbox1" ${checked}>` + val.title + "</li>");
                 });
          // });
          items.push("</ol>");
          var checkboxes = document.getElementById("checkboxes");
          checkboxes.innerHTML = items;
          //items.forEach(function(value) {
          
              //console.log(value);
          //});

          });      
        });       

    var promise = new Promise(function(resolve,reject){

     window.onload = function() {
        setTimeout(loadAfterTime, 1500);
     }; 
  //window.onload = loadAfterTime();
    
     //loadAfterTime();

     function loadAfterTime(){
        var inputElems = document.querySelectorAll("#checkbox1");
        console.log(inputElems);

        if(inputElems)
        {
           console.log(inputElems);
    
        }
        else{
            console.log("empty");
        }     
        var count = 0;
            inputElems.forEach(function(checkbox) {
                checkbox.addEventListener('click', function() {
                    if (this.checked) {
                        console.log("Checkbox is checked..");
                        count++;
                    } else {
                        count--;
                        console.log("Checkbox is not checked..");
                    }
                    console.log(count);
                    if(count==5)
                    {
                        resolve("Congrats. 5 Tasks have been Successfully Completed");
                    }
                    
    
                });
            });
        
            promise.then(
                function(result) { alert(result);},
              );

    }
        
   // }
});
