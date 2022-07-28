
const nav = ["MAIN", "ABOUT", "PRODUCTION", "CONCURENTS", "CONTACTS"];
const links = ["main.html", "about.html", "production.html", "concurents.html", "contacts.html."];

let navl = nav.length;
let navtxt = "<ul>";

for(let i=0; i<navl; i++){
    navtxt += '<li><a href="'+ links[i] + '">' + nav[i] + "</a></li>";
}

navtxt += "</ul>";

document.getElementById("nav").innerHTML = navtxt;

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

