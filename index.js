const $ = (id) => document.getElementById(id)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// |       Screen Cover       |
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let screenIsOn = false

const cover = $('black-cover')

function toggleScreen() {
    if (screenIsOn) {
        turnOffScreen()
    } else {
        turnOnScreen()
    }
}

async function turnOnScreen() {
    cover.style.opacity = "0" // hide cover
    screenIsOn = true
    showAppIcons()
}
async function turnOffScreen() {
    cover.style.opacity = "1" // show cover
    screenIsOn = false
    hideAppIcons()
    hideMusicPage()
}



// ~~~~~~~~~~~~~~~~~~~~~~~~
// |       Buttons        |
// ~~~~~~~~~~~~~~~~~~~~~~~~

$('power-button').addEventListener('click', toggleScreen)
$('home-button').addEventListener("click", function() {
    hideMusicPage();
    hideNotesPage();
});




// ~~~~~~~~~~~~~~~~~~~~~~~~
// |      App Icons       |
// ~~~~~~~~~~~~~~~~~~~~~~~~

const musicApp = $('music-app')
const notesApp = $('notes-app')

function showAppIcons() {
    musicApp.classList.add('pop')
    notesApp.classList.add('pop')
}

function hideAppIcons() {
    musicApp.classList.remove('pop')
    notesApp.classList.remove('pop')
}

musicApp.addEventListener("click", () => {
    showMusicPage()
    hideAppIcons()
})

notesApp.addEventListener("click", () => {
    showNotesPage()
    hideAppIcons()
})





// ~~~~~~~~~~~~~~~~~~~~~~~~
// |      Music Page      |
// ~~~~~~~~~~~~~~~~~~~~~~~~

const musicPage = $('music-page-container')

function showMusicPage() {
    musicPage.style.opacity = "1";
    musicPage.style.transform = "scale(1, 1)"
    hideAppIcons()
}

function hideMusicPage() {
    musicPage.style.opacity = "0";
    musicPage.style.transform = "scale(0, 1)"
    if (screenIsOn) {
        showAppIcons()
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~
// |      Notes Page      |
// ~~~~~~~~~~~~~~~~~~~~~~~~

const notesPage = $('notes-page-container')

function showNotesPage() {
    notesPage.style.opacity = "1";
    notesPage.style.transform = "scale(1, 1)"
    hideAppIcons()
}

function hideNotesPage() {
    notesPage.style.opacity = "0";
    notesPage.style.transform = "scale(1, 0)"
    if (screenIsOn) {
        showAppIcons()
    }
}

// Hack to fix initial intro animation
showMusicPage()
hideMusicPage()
turnOnScreen()