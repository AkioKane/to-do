function activeButton() {
  const buttons = document.querySelectorAll(".btn-item")
  const inbox = document.querySelector("#inbox")
  const today = document.querySelector("#today")
  const week = document.querySelector("#week")

  // default active btn
  inbox.classList.add("active")

  buttons.forEach(button => {
    button.addEventListener("mousedown", () => {
        if (inbox.classList.contains("active")) {
          inbox.classList.remove("active")
        }
        else if (today.classList.contains("active")) {
          today.classList.remove("active")
        }
        else if (week.classList.contains("active")) {
          week.classList.remove("active")
        }
        button.classList.add("active")
    })
  });
}

function addProject() {
  const btn = document.querySelector(".add-project")
  const panel = document.querySelector(".added-project")
  const btnAdd = document.querySelector(".btn-add")
  const btnCancel = document.querySelector(".btn-cancel")

  const btnAddContent = document.querySelector(".add-item")
  const panelContent = document.querySelector(".add-panel-content")
  const btnAddItem = document.querySelector(".btn-add-item")

  btn.addEventListener("click", () => {
    panel.style.display = "block";
    btn.style.display = "none";
  })
  btnAdd.addEventListener("click", () => {
    // function add project
    const input = document.querySelector(".input-project")
    addProjectItem(input)
    resetElement(input)
    
    panel.style.display = "none";
    btn.style.display = "flex";
  })
  btnCancel.addEventListener("click", () => {
    panel.style.display = "none";
    btn.style.display = "flex";
  })
  btnAddContent.addEventListener("click", () => {
    panelContent.style.display = "block";
    btnAddContent.style.display = "none";
  })
  btnAddItem.addEventListener("click", () => {
    const input = document.querySelector(".input-content")
    addContentItem(input)
    resetElement(input)

    panelContent.style.display = "none";
    btnAddContent.style.display = "block"
  })
}

function addProjectItem(value) {
  const container = document.querySelector(".container")
  const item = document.createElement("button")

  item.classList.add("item-project")

  if (value.value != "") {
    item.innerHTML = value.value
  }
  else {
    return alert("The field must not be empty")
  }

  container.appendChild(item)
}

function addContentItem(value) {
  const container = document.querySelector(".items")
  const item = document.createElement("button")

  item.classList.add("item")

  if (value.value != "") {
    item.innerHTML = value.value
  }
  else {
    return alert("The field must not be empty")
  }

  container.appendChild(item)
}

function resetElement(element) {
  return element.value = ""
}

module.exports = {
  activeButton,
  addProject
}