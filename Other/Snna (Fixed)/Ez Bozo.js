console.log('hi')

console.log("EFJIJIEF")

const inputName = document.getElementById('input1')
const inputEmail = document.getElementById('input2')
const outputTable = document.getElementById('firstTable')

document.getElementById("submitButton1").addEventListener("click", function(event) {
    event.preventDefault();
    const newRow = document.createElement("tr")
    newRow.innerHTML = `<td>${inputName.value}</td><td>${inputEmail.value}</td>`;
    outputTable.appendChild(newRow)

    inputName.value = "";
    inputEmail.value = "";
})