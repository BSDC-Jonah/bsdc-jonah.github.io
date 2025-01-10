let theme = 'dark';

// Theme Change script

function loadSave() {
    if (localStorage.getItem('savedTheme') !=null) {theme=localStorage.getItem('savedTheme')}
    else {console.warn('Save not found')}
    enforceChange()
}

function themeChange() {
    if (theme == 'dark') {
        theme = 'light'
        document.getElementById('body').style.backgroundColor = 'white';
        const elements = document.getElementsByClassName('text')
        for (let a = 0; a<elements.length; a++) {
            elements[a].style.color = 'black'
        }
    }
    else {
        theme = 'dark'
        document.getElementById('body').style.backgroundColor = 'black';
        const elements = document.getElementsByClassName('text')
        for (let a = 0; a<elements.length; a++) {
            elements[a].style.color = 'white'
        }
    }
}

function enforceChange() {
    if (theme == 'light') {
        theme = 'light'
        document.getElementById('body').style.backgroundColor = 'white';
        const elements = document.getElementsByClassName('text')
        for (let a = 0; a<elements.length; a++) {
            elements[a].style.color = 'black'
        }
    }
    else {
        theme = 'dark'
        document.getElementById('body').style.backgroundColor = 'black';
        const elements = document.getElementsByClassName('text')
        for (let a = 0; a<elements.length; a++) {
            elements[a].style.color = 'white'
        }
    }
}

function saveTheme() {
    localStorage.setItem('savedTheme', theme)
}