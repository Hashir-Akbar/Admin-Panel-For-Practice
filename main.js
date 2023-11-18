import "boxicons";
import "/node_modules/perfect-scrollbar/css/perfect-scrollbar.css";
import "/style.css";
import PerfectScrollbar from "perfect-scrollbar";

let sideMenu = document.querySelector(".side-menu");


const ps = new PerfectScrollbar(".side-menu");

let dashboard = document.querySelector(".dashboard")
let innerList = document.querySelector(".inner-list")
let dashboardIcon = document.querySelector(".dashboard-icon")
console.log(dashboard);

dashboard.addEventListener("click", () => {
   // innerList.classList.remove("display-none")
   if (innerList.classList.contains("display-none") === false) {
      innerList.classList.add("display-none")


   } else {
      innerList.classList.remove("display-none")
   }
   if (dashboardIcon.classList.contains("icon-rotate") === false) {
      dashboardIcon.classList.add("icon-rotate")

   }
   else {
      dashboardIcon.classList.remove("icon-rotate")

   }

})
