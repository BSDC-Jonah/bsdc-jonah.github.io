// Entire program written by Jonah
// For use within Neil's Cloud Computing project.
// Should be called "Controller.js"
// Tested 16/10/2024 @ 09:00 (am): Full working order

function Radio() { // To convert Radio buttons to single value
    selectedValue = ""; // Local storage variable
    const Choices = document.getElementsByName('scaling'); // Gets elements for Scaling radio button from HTML
    for (const choice of Choices) { // For loop to check what radio button is selected
        if (choice.checked) { // If choice selected to decide if selected or to loop back around
            selectedValue = choice.value; // Sets local storage variable to whichever radio was selected
            return selectedValue;
        }
    }
}

function setOtherElements() {
    console.log('Not Implemented')
}

function sendRequest(Encode="") { // Encode has default value of "": Optional parameter but required, used to check for missing parameter
    if (Encode=="") {
        console.error('JS Controller: sendRequest() called with no parameter')
    } else {
        console.warn('JS Controller: sendRequest() called, Value sent to HTML and Console.')
        findElement = document.getElementById('Result'); // Finds HTML element paragraph for heading, Id: Result, Heading: Estimated on your entries, We suggest: {Ans}
        findElement.innerHTML = Encode; // Changes HTML Text and paragraph beneath above heading.
        findElement.style.visibility = "visible";
        document.getElementById('resTitle').style.visibility = "visible";
        console.info(Encode); // Prints Encode to console for logging.
        document.getElementById('submitb').style.visibility = "hidden";
        document.getElementById('resetb').style.visibility = 'visible';
    }
}

function getPoints() { // Main function - Collects all points based on element values
    bsize = document.getElementById('bsize').value; // Gets element value for Business Size from HTML
    budget = document.getElementById('budget').value; // Gets element value for Budget from HTML
    security = document.getElementById('security').value; // Gets element value for Security from HTML
    scale = Radio(); // Calls radio function to convert radio buttons to single element value from HTML
    internalPoints = 0; // Main local variable stores the total points, added by selected answer below
    // Business Size
    if (bsize=="smallMedium") {internalPoints=internalPoints+1} // Adds 1 point for Small/Medium on Business Size
    else if (bsize=="large") {internalPoints=internalPoints+2} // Adds 2 points for Large on Business Size
    else if (bsize=="national") {internalPoints=internalPoints+3} // Adds 3 points for National on Business Size
    else if (bsize=="international") {internalPoints=internalPoints+4} // Adds 4 points for International on Business Size
    
    // Budget
    if (budget=="low") {InternalPoints=internalPoints+1} // Adds 1 point for Low on Budget
    else if (budget=="medium") {internalPoints=internalPoints+2} // Adds 2 points for medium on Budget 
    else if (budget=="large") {internalPoints=internalPoints+3} // Adds 3 points for large on budget
    else if (budget=="vlarge") {internalPoints=internalPoints+4} // Adds 4 points for very large on budget
    
    // Security
    if (security=="low") {internalPoints=internalPoints+1} // Adds 1 point for low on Security
    else if (security=="medium") {internalPoints=internalPoints+2} // Adds 2 points for medium on Security
    else if (security=="high") {internalPoints=internalPoints+3} // Adds 3 points for high on Security

    // Scalability
    if (scale=="true") {internalPoints = internalPoints+1} // Adds 1 point for needing scalabilty
    else if (scale=="false") {internalPoints = internalPoints+2} // Adds 2 points for not needing scalability

    // Returns the total points global as an integer to callee (whatever called this function)
    return parseInt(internalPoints)
}
    
function getFinalJudgement(points) {
    // SaaS: 5 points or below
    // PaaS: 6-9 points
    // IaaS: 9-11 points
    // Premises: 11+
    let Judgement;
    if (points==null) {console.error('JS Controller: getFinalJudgement() called with no parameter'); stop()}
    else {
        if (points<=5) {Judgement='SaaS (Software as a Service)'} // Equal to or less than 5 is SaaS (Software as a Service)
        else if (points<=9) {Judgement='PaaS (Platform as a Service)'} // Equal to or less than 9 is PaaS (Platform as a Service)
        else if (points<=11) {Judgement='IaaS (Infrastructure as a Service)'} // Equal to or less than 11 is IaaS (Infrastructure as a Service)
        else if (points>11) {Judgement='Premises'} // Anything above 11 is Premises
        console.warn('JS Controller: Final Judgement sent')
        sendRequest(Judgement)
    }
}
    
function Submit() { // Function called by HTML Submit button to start the program
    bsize = document.getElementById('bsize').value; // Gets element value for Business Size from HTML
    budget = document.getElementById('budget').value; // Gets element value for Budget from HTML
    security = document.getElementById('security').value; // Gets element value for Security from HTML
    scale = Radio(); // Calls radio function to convert radio buttons to single element value from HTML
    console.info('JS Controller now active');
    if (bsize==null) {console.error('JS Controller: Business Size element blank.'); stop()}
    else if (budget==null) {console.error('JS Controller: Budget element blank'); stop()}
    else if (security==null) {console.error('JS Controller: Security element blank'); stop()}
    else if (scale==null) {console.error('JS Controller: Scale element blank'); window.alert('Please fill in "Does your business require scaling"'); stop()}
    else {console.warn('JS Controller: Submit() called. Program running'); getFinalJudgement(getPoints())} // Calls final judgement function with getPoints function as parameter, parameter becomes the return from getPoints()
}

function Reset() {location.reload()}
function redirectDocumentation() {location.assign('./HTML/Documentation.html')}
function backToForm() {location.assign('../index.html')}