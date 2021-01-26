document.addEventListener("DOMContentLoaded",
    function(event){

        function open(event) {
            document.getElementById("overlay-image").style.display = "block";
            document.getElementById("enlarged").src = event.target.src;
            console.log(event.target.src);
            
          }

        function closeImage(event) {
            console.log(event.target.getAttribute('class'));
            if((event.target.getAttribute('class') == "overlay-s-style")){
                document.getElementById("overlay-image").style.display = "none";
            }
          }
    
        document.getElementById('overlay-image').addEventListener('click', closeImage);
        for (var i=1; i<7; i++) {
            var name = "Img"+i;
            document.getElementById(name).addEventListener('click', open);
            //document.getElementById("enlarged").src = document.getElementById(name).src;
        }

    }
    
);
