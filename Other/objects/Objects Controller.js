console.info('Object Controller is running')

// Script

const register = [
    {name:"Karl", present:true, age: 17, marked:"22/11/2024"},
    {name:"Jonah", present:true, age: 17, marked:"22/11/2024"},
    {name:"James", present:true, age: 18, marked:"22/11/2024"},
    {name:"Oliver", present:false, age: 17, marked:"22/11/2024"},
]

class person {
    constructor(name="", age=0, present=null, marked="") {
        this.name = name;
        this.present = present;
        this.age = age;
        this.marked = marked;
    }
    create() {
        const temp = {
            name: this.name,
            age: this.age,
            present: this.present,
            marked: this.marked,
        }
        register.push(temp)
        updateTable()
    }
    insertHTML() {
        const getHTML = document.getElementById('registerTable');
        const newElement = document.createElement('tr');
        let regMark;

        if (this.present == true) {regMark = "Present"}
        else {regMark = "Absent"}
        newElement.className = "register";
        newElement.innerHTML = `
        <td class='register'>${this.name}</td>
        <td class='register'>${this.age}</td>
        <td class='register'>${regMark}</td>
        <td class='register'>${this.marked}</td>`
        getHTML.appendChild(newElement)
    }
}

function updateTable() {
    clearElements()
    for (let c = 0; c<register.length; c++) {
        let data = register[c]
        new person(data.name, data.age, data.present, data.marked).insertHTML()
    }
}

function clearElements() {
    // Needed 3 times
    const getE = document.getElementsByClassName('register')
    for (let f = 0; f<getE.length; f++) {
        getE[f].remove()
    }
    for (let f = 0; f<getE.length; f++) {
        getE[f].remove()
    }
    for (let f = 0; f<getE.length; f++) {
        getE[f].remove()
    }
}

function insertPerson() {
    let namePro = window.prompt('Enter the persons name');
    let agePro = window.prompt('Enter the persons age');
    let markPro = window.prompt('Enter the persons mark: (true/false)')
    let 
}

updateTable()

// const test = new log(Name, Present, Age, Marked).createNew()