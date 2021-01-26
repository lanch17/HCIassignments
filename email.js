document.addEventListener("DOMContentLoaded",
    function(event){
        
        function validate(event){
            var email = document.getElementById("email").value;
            var ending = email.substring(email.length - 4, email.length);
            if( email.includes("@") && ((ending === ".com")|| ending === ".edu")){
                console.log(email);
                console.log(ending);
                document.getElementById("message").innerHTML = "<h2>Email successfully recorded!</h2>";
            }
            else{
                console.log("false doesnt include it");
                document.getElementById("message").innerHTML = "<h2>Invalid email address</h2>";
            }
            
            event.preventDefault();
        }


        document.querySelector("button").addEventListener("click", validate);

    
    
    });
