import "boxicons";
import "/node_modules/perfect-scrollbar/css/perfect-scrollbar.css";
import "/style.css";
import PerfectScrollbar from "perfect-scrollbar";

let sideMenu = document.querySelector(".side-menu");


const ps = new PerfectScrollbar(".side-menu");

let dashboard = document.querySelector(".dashboard")
let innerList = document.querySelector(".inner-list")
let dashboardIcon = document.querySelector(".dashboard-icon")

$(document).ready(() => {

   function menuToggler(clickItem, displayOne, icon) {
      $(displayOne).hide();
      $(clickItem).on("click", (e) => {
         $(displayOne).slideToggle()
         if ($(icon).hasClass("icon-rotate") === false) {
            $(icon).addClass("icon-rotate")

         }
         else {
            $(icon).removeClass("icon-rotate")

         }
      })
   }
   menuToggler(".layouts", ".inner-list-layout", ".layouts-icon")
   menuToggler(".dashboard", ".inner-list-dashboard", ".dashboard-icon")
   menuToggler(".frontPages", ".inner-list-frontPages", ".frontPages-icon")

   function windowClick(item) {
      $("body").on("click", (e) => {
         if (!item.is(e.target) && item.has(e.target).length === 0) {
            item.hide();
         }
      })
   }

   function tooltip(clickItem, displayOne) {
      $(displayOne).hide();
      $(clickItem).on("click", (e) => {
         $(displayOne).toggle()

      })


   }
   tooltip(".theme-change", ".theme-change-tooltip")


})
// $(".inner-list-layout").hide()
// $(".layouts").on("click", (e) => {


//    $(".inner-list-layout").toggle()
//    if ($(".icon").hasClass("icon-rotate") === false) {
//       $(".icon").addClass("icon-rotate")

//    }
//    else {
//       $(".icon").removeClass("icon-rotate")

//    }

// if (innerList.classList.contains("display-none")) {
//    $(".layouts .inner-list").removeClass("display-none")


// } else {
//    $(".layouts .inner-list").addClass("display-none")

// }


