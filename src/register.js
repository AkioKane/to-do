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

  btn.addEventListener("click", () => {
    panel.style.display = "block";
    btn.style.display = "none";
  })
  btnAdd.addEventListener("click", () => {
    // function add project
    panel.style.display = "none";
    btn.style.display = "flex";
  })
  btnCancel.addEventListener("click", () => {
    panel.style.display = "none";
    btn.style.display = "flex";
  })
}

function addContainer() {
  const container = document.querySelector(".container-projects")

  
}

module.exports = {
  activeButton,
  addProject
}