// JavaScript "Controller" used across HTMLs
// Handles the programming for HTML
// Global Controller

var redirectError = function(Title="",Description="",returnURL="") {
    // Title, Description, (optional) returnURL
    if (Title !="" && Description !="") {
        // Runs once both parameters met
        localStorage.setItem('errorPage-Error', Title)
        localStorage.setItem('errorPage-Description', Description)
        if (returnURL !="") {
            localStorage.setItem('errorPage-ReturnURL', returnURL)
        }
        location.replace('/error')
    }
    else {
        console.error('redirectError() called but missing either Title or Description. Line 9,10')
    }
}

var removeAllLocalStorage = function() {
    for (let p = 0; p<localStorage.length; p++) {
        let key = localStorage.key(p)
        localStorage.removeItem(key)
    }
}