

let screen=document.getElementById("screen");
let screenValue="";
buttons=document.querySelectorAll("button");
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText)
        if(buttonText=="AC"){
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText=="⌫"){

            screenValue=screen.value.slice(0,-1);
            screen.value=screenValue;
            
        }

        else if (buttonText == '*') {
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText=="="){
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}