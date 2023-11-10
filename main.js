import "boxicons";
import "/node_modules/perfect-scrollbar/css/perfect-scrollbar.css";
import "/style.css";
import PerfectScrollbar from "perfect-scrollbar";

let sideMenu = document.querySelector(".side-menu");

// sideMenu.addEventListener("mouseout", () => {
// 	sideMenu.classList.remove("scrollbar");
// });
// sideMenu.addEventListener("mouseover", () => {
// 	sideMenu.classList.add("scrollbar");
// });

// or just with selector string
const ps = new PerfectScrollbar(".side-menu");
