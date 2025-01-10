const Logins = [ // These are the logins, which are in 2 object pairs inside an array, which defines the logins
    {user:"Admin", pass:"Admin"},
];

let isSaved;
const errorPage = "/error";
const consolePage = "/console";

if (localStorage.getItem('managementSavedLogin') !=null) {
    isSaved = true;
}
else {
    isSaved="";
}

function pageLoad() { // Runs if Management Console is loaded, to ensure user is logged in.
    if (isSaved != null) {
        window.alert('User is logged in, Proceeding to console...');
        location.replace(consolePage);
    }
    else {
        localStorage.setItem('errorPage-Error', "Error 404 - Access Denied");
        localStorage.setItem('errorPage-Description', "You are attempting to access a resource which is restricted. Please login to gain access to this resource. Please see Splash Page and 'Admin' button to login to gain the access.");
        location.replace(errorPage);
    }
};

function updateLogins() {
    let getLogins = JSON.parse(localStorage.getItem('adminLogins'));
    for (let a = 0; a<Logins.length; a++) {
        for (let b = 0; b<getLogins.length; b++) {
            if (Logins[a].user == getLogins[b].user) {
                console.log('Same user detected, ignoring...');
            }
            else {
                Logins.push(getLogins[b]);
            }
        }
    }
    localStorage.setItem('adminLogins', JSON.stringify(Logins));
};

function Login() {
    // Get data
    let userElement = document.getElementById('loginPage-User');
    let passElement = document.getElementById('loginPage-Pass');
    let userData = userElement.Value;
    let passData = passElement.Value;
    updateLogins()
    // Check Data
    for (let c = 0; c<Logins.length; c++) {
        if (userData == Logins[c].user) {
            if (passData == Logins[c].pass) {
                localStorage.setItem('managementSavedLogin', true);
                console.warn('User has logged in, Proceeding to console...');
                location.assign(consolePage);
            }
        }
    }
};

function Logout() {
    updateLogins();
    localStorage.removeItem('managementSavedLogin');
    location.replace('/');
};

function createLogin(u="", p="") {
    if (u != "") {
        if (p != "") {
            Logins.push({user:u, pass:p});
            updateLogins();
        }
    }
}

function debugCreateLogin() {
    let userPrompt = window.prompt('Enter the desired username:');
    let passPrompt = window.prompt('Enter the desired password:');
    createLogin(userPrompt, passPrompt);
}