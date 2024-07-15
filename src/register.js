let currentlyPage = "inbox"

let projectsList = []

function activeButton(flag) {
  const buttons = document.querySelectorAll(".btn-item")
  const inbox = document.querySelector("#inbox")
  const today = document.querySelector("#today")
  const week = document.querySelector("#week")

  if (flag != true) {
    inbox.classList.add("active");
  }
  
  buttons.forEach(button => {
    button.addEventListener("mousedown", () => {
      buttons.forEach(btn => btn.classList.remove("active"));
      
      button.classList.add("active");
    });
  });

  inbox.addEventListener("mousedown", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    inbox.classList.add("active");
  });

  today.addEventListener("mousedown", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    today.classList.add("active");
  });

  week.addEventListener("mousedown", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    week.classList.add("active");
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

  const btnItem = document.querySelectorAll(".btn-item")
  const today = document.querySelector("#today-page")
  const week = document.querySelector("#week-page")

  today.style.display = "none";
  week.style.display = "none";

  btnItem.forEach(btn => {
    btn.addEventListener("click", () => {
      activePage(btn.id)
    })
  })

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
    addContentItem(input, currentlyPage)
    resetElement(input)

    panelContent.style.display = "none";
    btnAddContent.style.display = "block"
  })
}

function addProjectItem(value) {
  const container = document.querySelector(".container")
  const item = document.createElement("button")

  if (value.value != "") {
    item.innerHTML = value.value
    item.id = value.value
    item.classList.add("btn-item")
    projectsList.push(value.value)
    
    item.addEventListener("click", () => {
      activeButton(true)
      activePage(item.id);
      
    });
  }
  else {
    return alert("The field must not be empty")
  }

  container.appendChild(item)
}

function addContentItem(value, currentlyPage) {
  const container = document.querySelector(`.items-${currentlyPage}`)
  const item = document.createElement("button")

  item.classList.add("item")

  if (value.value != "") {
    const i = document.createElement("input")
    i.classList.add("checkbox-input")
    i.type = "checkbox"
    item.appendChild(i)

    const p = document.createElement("p")
    p.innerHTML = value.value
    item.appendChild(p)

    const date = document.createElement("input")
    date.classList.add("input-date-item")
    date.type = "date"
    item.appendChild(date)
  }
  else {
    return alert("The field must not be empty")
  }

  container.appendChild(item)
}

function resetElement(element) {
  return element.value = ""
}

function resetPage(btn) {
  const allItems = document.querySelectorAll(".container-page")
  allItems.forEach(item => {item.style.display = "none";})

  btn.style.display = "block"
}

function activePage(btn) {
  const inbox = document.querySelector("#inbox-page")
  const today = document.querySelector("#today-page")
  const week = document.querySelector("#week-page")
  const customItems = document.querySelectorAll(".custom-items")

  console.log("active")

  if (btn == "inbox" || btn == "today" || btn == "week") {
    inbox.style.display = "none";
    today.style.display = "none";
    week.style.display = "none";
    customItems.forEach(item => {item.style.display = "none"})
    document.querySelector(`#${btn}-page`).style.display = "block"
    currentlyPage = btn
  }
  else {
    const container = document.querySelector(".content")
    const itemContent = container.querySelector(`.r${btn}`)
    if (!itemContent) {
      const btnAdd = document.querySelector(".add-item")

      const div = document.createElement("div")
      div.classList.add(`r${btn}`)
      div.classList.add("custom-items")
      div.classList.add("container-page")
      div.id = `${btn}-page`
      container.insertBefore(div, btnAdd)
      resetPage(div)

      const h1 = document.createElement("h1")
      h1.innerHTML = btn
      div.appendChild(h1)

      const items = document.createElement("div")
      items.classList.add("items")
      items.classList.add(`items-${btn}`)
      div.appendChild(items)

      currentlyPage = btn
    }
    else {
      resetPage(itemContent)
      itemContent.style.display = "block"
    }
  }
}

function updateScreen() {

}

module.exports = {
  activeButton,
  addProject
}