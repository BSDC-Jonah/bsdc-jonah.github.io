const inputBox = document.getElementById("todo_input");
let listContainer = document.getElementById("todo_list");
document.addEventListener("DOMContentLoaded", function () {showList();}); // Useful for Ersatz Enterprise project

function AddTask() {
  const inputBox = document.getElementById("todo_input");
  let listContainer = document.getElementById("todo_list");
  console.log("AddTask() Started");
  if (inputBox.value === "") {
    alert("you must write something to resolve this error");
  } else {
    console.log("entry detected");
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    console.log(listContainer);
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "X";
    li.appendChild(span);
    inputBox.value = "";
  }
  inputBox.value = "";
  saveData();
  console.log(localStorage);
}

document.addEventListener("click",function (e) {
    console.log("click registered");
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
      console.log(localStorage);
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
      console.log(localStorage);
    }
  },
  false
);

function saveData() {
  console.log("saveData");
  localStorage.setItem("data", todo_list.innerHTML);
}
function showList() {
  console.log(localStorage.getItem("data"));

  listContainer = localStorage.getItem("data");
  console.log(listContainer);
  document.getElementById("todo_list").innerHTML = listContainer;
}

document.addEventListener("change", function () {
  let allItems = document.querySelectorAll("li");
  allItems.forEach((item) => {
    if (filtertodo.value === "all") {
      console.log("filterAll");
      item.style.display = "block";
    } else if (filtertodo.value === "done") {
      console.log("filterComplete");
      if (item.classList.contains("checked")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    } else {
      console.log("filterIncomplete");
      if (!item.classList.contains("checked")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  });
});

function breakJonah() {
  let findEle = document.getElementById('todo_input')
  for (let q = 0; q<1025; q++) {
    findEle.value = `${q}`
    AddTask()
  }
}