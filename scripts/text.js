const c_text = document.querySelector('.c-text')
const yesBTN = document.querySelector('.yes')
const noBTN = document.querySelector('.no')
const typeSound = document.getElementById("typeSound")

document.querySelector('.click-to-start').addEventListener("pointerdown", () => {
    document.querySelector('.click-to-start').remove();
    ShowText()
})

const text = [
    "Valentine’s Day feels strange/",
    "when the one I love/"+
    "is miles away./",

    "I am happy with you,//"+
    "truly, I am.///"+

    "But happiness makes me fragile—/",

    "Love makes me fragile—//"+
    "Cause it doesn’t always stays./"+
    "It fades.//"+
    "And I’m scared"+
    " of watching it disappear.",

    "So I promise. . ./",
    "I’ll hug you tight—/",
    "maybe a little tighter./",

    "Tight enough to keep you close,//"+
    "but loose enough/"+
    "so you can still breathe.///"+
    "I promise. . ./",

    "I promise I’ll fight my fate//"+
    "if it ever tries/"+
    "to take you away./",

    "I trust you.//"+
    "I really do./",

    "But my mind. . .//"+
    "it writes cruel little stories//"+
    "where I’m the one///"+
    "left behind./",

    "Still—///"+
    "I stay./",

    "Because loving you//"+
    "feels worth the fear,///"+
    "even if my hands shake/"+
    "while holding on to something/"+
    "precious./",

    "I don’t want perfect./",
    "I don’t want grand gestures./",

    "I just want us—//",

    "choosing each other////"+
    "again and again./",

    "So tell me. . ./",
    "will you walk with me?/",

    "Tell me—//"+
    "am I worthy of this place that I'm asking for. . .//",

    "Tell me—/",
    "Am I worthy of your heart?/",

    "Not just for today.//"+
    "Not just for tomorrow./",

    "But for the end of time…/",

    "Can I be your Valentine?/"
];


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
    let delay = 0
    for(let ch of text[indx]){
        setTimeout(()=>{
            if(ch==="/")
                c_text.innerHTML += "<br>"
            else
                c_text.innerHTML += ch

            if(ch !== " " && ch !== "/")
                PlayeType();
        }, delay)
        delay += Math.random() * (100)
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
    soundClone.playbackRate = 0.9 + Math.random() * 0.2;
    soundClone.volume = 0.1;
    soundClone.play();
}