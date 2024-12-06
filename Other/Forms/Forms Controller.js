const request = new XMLHttpRequest(); // Calls the HTTP request function built into JavaScript
let globalData; // Used for storing the data received from the API
const findName = document.getElementById('name'); // fetches name form element from HTML
const findEmail = document.getElementById('email');
const findRequest = document.getElementById('API');

function sendAPIRequest(endOfURL) {
    const URL = `https://swapi.dev/api/${endOfURL}`;
    request.open('get',URL,false); // Calls using HTTP Request to the API using async for promised return to prevent error.
    request.setRequestHeader('Accept', 'application/json'); // Sends a header to the API and asks for JSON return
    request.send(); // Sends the header to the URL as one bundle
    console.log("The requested API object was:", endOfURL);
};

request.onload = function() { // Runs when HTTP request is successfully processed
    globalData = JSON.parse(this.responseText); // converts the stored object or object array from JSON to JavaScript
    console.log(globalData); // Logs all data received
};

request.onerror = function(err) { // Runs when HTTP request encounteres an error
    console.error("Error Occured, Error:",err); // Console errors the encountered error
};

findName.addEventListener("input", function() { // Detects when an immediate change is performed on Name.
    console.log("Change detected on Name field");
});

document.getElementById("submit").addEventListener("click", function(event){ // Removes default submit behaviour
    event.preventDefault(); // Prevent default submit behaviour button.
    console.log('Submit called');
    if (findName.value != "") {
        if (findEmail.value != "") {
            const findTable = document.getElementById('storageTable');
            const newItem = document.createElement('tr');
            newItem.className = 'object';
            newItem.innerHTML = `
            <td class="object">${findName.value}</td>
            <td class="object">${findEmail.value}</td>`;
            findTable.appendChild(newItem);
            findName.value = "";
            findEmail.value = "";
        }
    }
});

function clearTable() {
    const findElements = document.getElementsByClassName('object');
    for (let a = 0; a<findElements.length; a++) {
        findElements[a].remove();
    }
    for (let a = 0; a<findElements.length; a++) {
        findElements[a].remove();
    }
    for (let a = 0; a<findElements.length; a++) {
        findElements[a].remove();
    }
};

document.getElementById("post").addEventListener("click", function(altEvent) { // Removes default submit behaviour
    altEvent.preventDefault(); // Prevent default submit behaviour button.
    console.log('post called');
    if (findRequest.value != "") {
        console.log('Post sent');
        sendAPIRequest(findRequest.value);
        findRequest.value = "";
    }
});


sendAPIRequest('planets/3');