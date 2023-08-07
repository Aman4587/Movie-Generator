
function cp() {
    console.log("1+1")
    var rn = Math.round(Math.random() * 5+ 1);
     var image="";
     if(rn == 1) {
        image = "kd.jpeg"
     }
     if(rn == 2) {
        image = "NC.jpeg"
     }
     if(rn == 3) {
        image = "Jess.jpeg"
     }
     if(rn == 4) {
        image = "marvel.jpg"
     }
     if(rn == 5) {
        image = "black panther.jpeg"
     }
    
     if(rn == 6) {
        image = "BARBIE G4HRL.jpeg"
     }
     console.log(image)
     document.querySelector("img").src = image;
    
    
    
    
    
    
    
    
    
    
    }