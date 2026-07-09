function typeText(elementId, text, speed) {
    const element = document.getElementById(elementId);
    element.textContent = "";

    let i = 0;

    const typing = setInterval(function() {
        element.textContent += text[i];
        i++;

        if (i >= text.length) {
            clearInterval(typing);
        }
    }, speed);
}
typeText("introText", "Access Granted.", 80);
function goToScreen(screenId) {
    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const nextScreen = document.getElementById(screenId);
    nextScreen.classList.add("active");

    if (screenId === "screen6") {
        startLoading();
    }
}
function showWrong() {
    goToScreen("wrongScreen");
    
    setTimeout(function(){
        goToScreen("screen2");
    }, 2000);
}

function revealInkblot() {
    goToScreen("screen3");
}

function startLoading() {
    typeText("loadingText", "measuring height...", 60);

    setTimeout(function() {
        typeText("loadingText", "tracking synapses...", 60);
    }, 2200);

    setTimeout(function() {
        typeText("loadingText", "counting neurons...", 60);
    }, 4200);

    setTimeout(function() {
        typeText("loadingText", "1...", 60);
    }, 6400);

    setTimeout(function() {
        typeText("loadingText", "2...", 60);
    }, 8400);

setTimeout(function() {
        typeText("loadingText", "that's all you have...?", 60);
    }, 10600);

setTimeout(function() {
        typeText("loadingText", "scanning brain activity...", 60);
    }, 13000);

setTimeout(function() {
    
        typeText("loadingText", "finalising diagnosis...", 60);
    }, 15400);
}

 setTimeout(function() {
        goToScreen("screen10");
           }, 18000);
 
       function goToScreen(screenId) {
    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const nextScreen = document.getElementById(screenId);
    nextScreen.classList.add("active");

    if (screenId === "screen9") {
        startLoading();
    }

    if (screenId === "screen10") {
        typeText("finalMessage", `christy, looking past your diagnosis, i'm so proud of the person you've grown to be, although its unbelievable that you're officially 20. i love you infinite amounts, and i want you to know you've shaped the person i am as well. my (amazing) sense of humour, my personality, my favourite shows, everything, is all thanks to you. i quite literally could not ask for a better older sister. i want you to know i cherish every moment we spend together, when i lay in your room and annoy you, when you raid my closet (and vice versa), or when we laugh together whenever you-know-who says something particularly stupid. you have so many amazing qualities, intelligence, humour, beauty, and i'm sure more people would notice if you didn't stink so much.. anyway, i'm running out of spaces on this code, but i love you sososososooooo much christy.

you'll always be my favourite.`, 35);
    }
} if (screenId === "screen10") {
        typeText("finalMessage", "christy, looking past your diagnosis, you are genuinely my favourite person. ", 35);
    }
 

    
