document.addEventListener("DOMContentLoaded",
    function(event){


        function openVideo(event) {
            event.preventDefault();
            document.getElementById("overlay-video").style.display = "block";
            document.getElementById("enlargedvideo").src = event.target.src;
            console.log(event.target.src);
            
          }
        function closeVideo(event) {
            console.log(event.target.getAttribute('class'));
            if((event.target.getAttribute('class') == "overlay-s-style")){
                document.getElementById("overlay-video").style.display = "none";
            }
          }


    
        document.getElementById('overlay-video').addEventListener('click', closeVideo);

        var v = document.getElementById('video1');
        v.addEventListener(
            'play', 
          function() { 
             //event.preventDefault();
          }, 
        false);
        v.onclick = function(event) {
            openVideo(event);
            
      
         };
         document.getElementById('video2').addEventListener(
            'play', 
          function() { 
             event.preventDefault();
          }, 
        false);
        document.getElementById('video2').onclick = function(event) {
            openVideo(event);
      
         };
         document.getElementById('video3').addEventListener(
            'play', 
          function() { 
             event.preventDefault();
          }, 
        false);
        document.getElementById('video3').onclick = function(event) {
            openVideo(event);
      
         };
         document.getElementById('video4').addEventListener(
            'play', 
          function() { 
             event.preventDefault();
          }, 
        false);
        document.getElementById('video4').onclick = function(event) {
            openVideo(event);
      
         };

 

    }
    
);