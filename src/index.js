import "./style.css"
import "./assets/add.svg"
import * as btn from "./buttons"

const content = document.getElementById("content")

function start() {
  btn.activeButton()
  btn.addProject()
}

start()