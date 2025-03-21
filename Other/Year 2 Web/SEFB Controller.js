console.log('UwU');
let currTheme = document.getElementById('currTheme')
let savedTheme = document.getElementById('savedTheme')

// Theme Change script; Creds to Jonah and Karl (us)
let theme = 'dark';
function loadSave() {if (localStorage.getItem('savedTheme') !=null) {theme=localStorage.getItem('savedTheme')} else {console.log('Save not found')}; enforceChange()}
function themeChange() {if (theme == 'dark') {theme = 'light';enforceChange()} else if (theme == 'light') {theme = 'dark';enforceChange()}}

function enforceChange() {
    if (theme == 'light') {
        theme = 'light'
        document.getElementById('body').style.backgroundColor = 'white';
        const elements = document.getElementsByClassName('text')
        const elements2 = document.getElementsByClassName('button')
        for (let a = 0; a<elements.length; a++) {
            elements[a].style.color = 'black'
        }
        for (let b = 0; b<elements2.length; b++) {
            elements2[b].style.color = '#3498db'
        }
        currTheme.innerText = 'Your current theme is: Light'
        savedTheme.innerText = 'Your current saved theme is: Light'        
    }
    else {
        theme = 'dark'
        document.getElementById('body').style.backgroundColor = 'black';
        const elements = document.getElementsByClassName('text')
        const elements2 = document.getElementsByClassName('button')
        for (let a = 0; a<elements.length; a++) {
            elements[a].style.color = 'white'
        }
        for (let b = 0; b<elements2.length; b++) {
            elements2[b].style.color = '#3498db'
        }
        currTheme.innerText = 'Your current theme is: Dark'
        savedTheme.innerText = 'Your current saved theme is: Dark'
    }
}

function saveTheme() {localStorage.setItem('savedTheme', theme)}