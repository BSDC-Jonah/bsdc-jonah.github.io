console.info('CC Controller: Running')
let newGlobal;
let Objects;

const logins = []


const globalFunctions = {
    returnFunctions: function() {
        // Code
        console.warn('Returned functions:', globalFunctions)
    },
    createLogin: function(u="", p="") {
        if (u != "") {
            for (let a = 0; a<logins.length; a++) {if (logins[a].user = u) {console.warn('CC Controller: Login already exists!')}; stop()}
            if (p != "") {
                // Code
                logins.push({user: u, pass: p})
            }
        }
    },

}


function download(fileName, text="Blank File") {
    const blob = new Blob([text], {type:'text/plain'});
    const objURL = URL.createObjectURL(blob)
    const dl = document.createElement('a')
    dl.id = "dl"
    dl.href = objURL
    dl.setAttribute('download', fileName)
    document.body.appendChild(dl)
    dl.click()
    document.getElementById('dl').remove()
};

function loadFile() {
    let global;
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _ => {
              let files = Array.from(input.files);
              console.log(files);
              global = files
              const fileManager = new FileReader();
              fileManager.onload = (evt) => {
                  console.log(evt.target.result)
                  newGlobal = evt.target.result
              };
              fileManager.readAsText(global[0])
          };
    input.click();
};

function testFile() {
    if (newGlobal != null) {
        download("", JSON.stringify(newGlobal))
    }
}