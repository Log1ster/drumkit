
 var btn=document.getElementsByTagName("button");
 for(var i=0;i<btn.length;i++){
     btn[i].addEventListener('click', function(){
        // console.log(this.innerText);
        var click = this.innerText;
        if(click==="w"){
            var audio = new Audio('/sounds/crash.mp3');
            audio.play();
        }else if(click==="a"){
            var audio = new Audio('/sounds/kick-bass.mp3');
            audio.play();
        }else if(click==="s"){
            var audio = new Audio('/sounds/snare.mp3');
            audio.play();
        }else if(click==="d"){
            var audio = new Audio('/sounds/tom-1.mp3');
            audio.play();
        }else if(click==="j"){
            var audio = new Audio('/sounds/tom-2.mp3');
            audio.play();
        }else if(click==="k"){
            var audio = new Audio('/sounds/tom-3.mp3');
            audio.play();
        }else{
            var audio = new Audio('/sounds/tom-4.mp3');
            audio.play();
        }
    document.getElementsByClassName(click)[0].classList.add("pressed");
        setTimeout(function(){
            document.getElementsByClassName(click)[0].classList.remove("pressed");
        },100)
     });
 }    
 document.addEventListener("keypress",function(event){
    var press=event.key;
    if(press==="w"){
        var audio = new Audio('/sounds/crash.mp3');
        audio.play();
    }else if(press==="a"){
        var audio = new Audio('/sounds/kick-bass.mp3');
        audio.play();
    }else if(press==="s"){
        var audio = new Audio('/sounds/snare.mp3');
        audio.play();
    }else if(press==="d"){
        var audio = new Audio('/sounds/tom-1.mp3');
        audio.play();
    }else if(press==="j"){
        var audio = new Audio('/sounds/tom-2.mp3');
        audio.play();
    }else if(press==="k"){
        var audio = new Audio('/sounds/tom-3.mp3');
        audio.play();
    }else{
        var audio = new Audio('/sounds/tom-4.mp3');
        audio.play();
    }
    document.getElementsByClassName(press)[0].classList.add("pressed");
        setTimeout(function(){
            document.getElementsByClassName(press)[0].classList.remove("pressed");
        },100)
     });
 