import "/style.css";
import "boxicons";

let sideMenu = document.querySelector(".side-menu")

sideMenu.addEventListener("mouseover", () => {
   sideMenu.classList.add("scrollbar")
})
sideMenu.addEventListener("mouseout", () => {
   sideMenu.classList.remove("scrollbar")
})