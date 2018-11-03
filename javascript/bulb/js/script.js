//
// mijnscript.js
//

// Initiële status van de lamp - boolean waarde.
let bulbIsOn = false;

/**
 * Functie die de lamp aanzet als hij uit was, en uit doet als hij aan was.
 */
function toggleBulb() {
    if (bulbIsOn){
        // De output van console zie je in de inspector van de browser.
        // Gebruik dit voor jezelf om feedback uit je programma te krijgen.
        console.log('Bulb was on, turning it off')
        bulbIsOn = false;
        document.getElementById('myImage').src = './images/pic_bulboff.gif'
        document.getElementById('btnBulb').innerHTML = 'Turn on the light'
    } else {
        console.log('Bulb was off, turning it on')
        document.getElementById('myImage').src = './images/pic_bulbon.gif'
        document.getElementById('btnBulb').innerHTML = 'Turn the light off'
        bulbIsOn = true;
    }
}

