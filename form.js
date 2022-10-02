function ValidateName()
{
    console.log ("Validating Name");    
    var name1 = document.getElementById("name1");
    var username = /^admin$/;
    if(name1.value.trim().match(username))
    {
        name1_error.textContent = "";
        return true;
    }
    else
    {
        
        name1.style.marginBottom = 0 + "px";
        name1_error.textContent = "Incorrect Username";       
        document.form1.name1.focus();
        return false;
    }
}



  function ValidatePwd()
  {
      var pass1 = document.getElementById("pass1");
      var passformat = /^12345$/;
      if(pass1.value.trim().match(passformat))
      {
          
          pass1_error.textContent = "";
          return true;
      }
          else
      {

          pass1_error.textContent = "Incorrect Password";
           document.form1.pass1.focus();
          return false;
      }
  }

function Validate(callback)
{

    console.log("function called");
    var name1_b = ValidateName();
    var pass1_b = ValidatePwd();
    console.log(name1_b, pass1_b);

    if(name1_b && pass1_b)
    {
        callback();
        return true;
    }
    else
    {
        return false;
    }
    
}

function redirect() {
    console.log("Inside redirect");
    window.open('./todo.html');
    
}


$(document).ready(function() {
    $('#form1').submit(function(e){
        
        console.log("submit clicked");
        //Validate(redirect);
        var valid1 = Validate(redirect);
        if(!valid1) {
          e.preventDefault();
          //return false;
        }
        
      });

      
      
    });


    