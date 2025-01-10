let scriptOnLoad = true;
const errorTitleSave = "errorPage-Error";
const errorPage = "/error";
const errorDescriptionSave = "errorPage-Description";
const errorPageReturnURL = "errorPage-ReturnURL"
const findTitleElement = document.getElementById('errorTitle')
const findDescriptionElement = document.getElementById('errorDescription')

function checkForError() {
    if (localStorage.getItem(errorTitleSave) !=null) {
        if (localStorage.getItem(errorDescriptionSave) !=null) {
            findTitleElement.innerText = localStorage.getItem(errorTitleSave);
            findDescriptionElement.innerText = localStorage.getItem(errorDescriptionSave);
        }
        else {
            location.replace('/')
        }
    }
    else {
        location.replace('/')
    }
}

function unload() {
    localStorage.removeItem(errorTitleSave)
    localStorage.removeItem(errorDescriptionSave)
    localStorage.removeItem(errorPageReturnURL)
}

function returnFunc() {
    if (localStorage.getItem(errorPageReturnURL) !=null) {
        let url = localStorage.getItem(errorPageReturnURL)
        console.warn('Redirecting to origin...')
        unload()
        location.replace(url)
    }
    else {
        const Ok = window.confirm('No return origin has been set for this error, Press "Ok" to redirect to Home Page or "Cancel" to stay on this page')
        if (Ok == true) {unload(); location.replace('/')}
        else {scriptOnLoad=false}
    }
}

checkForError()