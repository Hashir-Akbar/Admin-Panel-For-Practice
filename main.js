import "boxicons";
import "/node_modules/perfect-scrollbar/css/perfect-scrollbar.css";
import "/style.css";
import PerfectScrollbar from "perfect-scrollbar";




$(document).ready(() => {
   const ps = new PerfectScrollbar(".side-menu");
   const ps2 = new PerfectScrollbar(".notification-tooltip");

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
   menuToggler(".ecommerce", ".inner-list-ecommerce", ".ecommerce-icon")
   menuToggler(".academy", ".inner-list-academy", ".academy-icon")
   menuToggler(".logistics", ".inner-list-logistics", ".logistics-icon")
   menuToggler(".invoice", ".inner-list-invoice", ".invoice-icon")
   menuToggler(".users", ".inner-list-users", ".invoice-users")
   menuToggler(".rolesandpermissions", ".inner-list-rolesandpermissions", ".rolesandpermissions-icon")
   menuToggler(".pages", ".inner-list-pages", ".pages-icon")
   menuToggler(".authentication", ".inner-list-authentication", ".authentication-icon")
   menuToggler(".wizard", ".inner-list-wizard", ".wizard-icon")
   menuToggler(".cards", ".inner-list-cards", ".cards-icon")
   menuToggler(".user-interface", ".inner-list-user-interface", ".user-interface-icon")
   menuToggler(".extended-ui", ".inner-list-extended-ui", ".extended-ui-icon")
   menuToggler(".icons", ".inner-list-icons", ".icons-icon")
   menuToggler(".charts", ".inner-list-charts", ".charts-icon")

   function windowClick(clickItem, item) {

      $(document).on("click", function (event) {
         let $a = $(item);
         let $b = $(clickItem);
   


         if ($a !== event.target && !$a.has(event.target).length && $b !== event.target && !$b.has(event.target).length) {
            $a.hide();
         } 
      })
   }


   function tooltip(clickItem, displayOne, close) {


      let cc =  $(displayOne)
      $(displayOne).hide();

      $(clickItem).on("click", (e) => {
         $(displayOne).toggle()

      })
      windowClick(clickItem, displayOne)

      $(close).on("click", (e) => {
         $(e.target).closest(".parent").addClass("remove");           
      
         $(displayOne).toggle()

         
      })

   }


   tooltip(".theme-change", ".theme-change-tooltip")
   tooltip(".customize", ".customize-change-tooltip")
   tooltip(".notification", ".notification-tooltip", ".close-icon")






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


