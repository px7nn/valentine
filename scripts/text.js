const c_text = document.querySelector('.c-text')
const yesBTN = document.querySelector('.yes')
const noBTN = document.querySelector('.no')
const text = [
    "I miss you/"+ 
    "And I hate the/"+ 
    "distance between us/",

    "Every second without you/"+ 
    "feels longer than it should/",

    "So tell me…/",

    "Will you be mine?/"+
    "/"+
    "Will you be my valentine...??"
]

let indx = 0, isTyping = false;
ShowText()

yesBTN.addEventListener("click", () => {
    if(!isTyping) YesHandler();
})

function YesHandler(){
    if(indx >= text.length) return
    if(indx === text.length - 1){
        yesBTN.innerHTML = "Yes"
    }

    ShowText()

}
function ShowText(){
    c_text.innerHTML = "";
    isTyping = true;
    yesBTN.classList.add('hide'); 
    let delay = 50
    for(let ch of text[indx]){
        setTimeout(()=>{
            if(ch==="/")
                c_text.innerHTML += "<br>"
            else
                c_text.innerHTML += ch
        }, delay)
        delay += 50 + Math.random() * (100)
    }
    setTimeout(()=>{
        yesBTN.classList.remove('hide');
        if(indx === text.length - 1)
            noBTN.classList.remove('hide')
        indx++;
        isTyping = false;
    }, delay)

}


console.log(text);