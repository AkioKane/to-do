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

  btn.addEventListener("click", () => {
    panel.style.display = "block";
    btn.style.display = "none";
  })
}

module.exports = {
  activeButton,
  addProject
}