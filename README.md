# ilusm. . .
A small interactive Valentine experience built with HTML, CSS, and JavaScript.  
A confession typed slowly — one fragile word at a time.  
### Experience It Here
https://px7nn.github.io/ilusm/

## About
This project is a short interactive love letter.

It uses:
* A typewriter-style text animation
* Soft randomized typing sound effects
* A minimal retro window UI
* Gradual emotional progression through dialogue
  
The experience is meant to feel:
* Soft
* Liminal
* Slightly fragile
* Honest

# How It Works
### Text System
The dialogue is stored in an array:
```
const text = [
   "Valentine’s Day feels strange/",
   ...
];
```
Special symbols used:
* `/` → Line break
* `//` → Slight pause feeling
* `///` → Longer emotional pause

Each character is printed using setTimeout() with random delay:
```
delay += Math.random() * (100)
```
This creates a natural, imperfect typing rhythm.

### Typing Sound System
Each character (except spaces and line breaks) plays a slightly randomized sound:
```
soundClone.playbackRate = 0.9 + Math.random() * 0.2;
soundClone.volume = 0.1;
```
This prevents robotic repetition and keeps it organic.

## Technologies Used
HTML5  
CSS3  
Vanilla JavaScript  
Google Fonts (Pixelify Sans)  

## License
This project is personal and expressive.  
Feel free to fork and modify — just don’t remove the feeling from it.
