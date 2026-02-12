const c_text = document.querySelector('.c-text')
const yesBTN = document.querySelector('.yes')
const noBTN = document.querySelector('.no')
const typeSound = document.getElementById("typeSound")

document.querySelector('.click-to-start').addEventListener("pointerdown", () => {
    document.querySelector('.click-to-start').remove();
    ShowText()
})

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

            if(ch !== " " && ch !== "/")
                PlayeType();
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

function PlayeType(){
    const soundClone = typeSound.cloneNode();
    soundClone.playbackRate = 0.9 + Math.random() * 0.1;
    soundClone.volume = 0.05;
    soundClone.play();
}