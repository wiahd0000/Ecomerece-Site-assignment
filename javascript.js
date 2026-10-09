
const faqItems = document.querySelectorAll(".faq-item");

        faqItems.forEach(item => {

            const question = item.querySelector(".faq-question");

            question.addEventListener("click", () => {

                // Close other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove("active");
                    }
                });

                // Toggle selected item
                item.classList.toggle("active");

            });

        });
// DIFFER

const btn_shop = document.getElementById("btn-shop")
const btn = document.getElementById("btn")
const btnview = document.getElementById("btn-view")
const btnmore = document.getElementById("btn-more")
const btncontact = document.getElementById("btn-contact")
btncontact.addEventListener("click", ()=>{
  alert("Feel Free to Contact Us")
})
btn_shop.addEventListener("click", ()=>{
alert(" Not Available yet")
});

btn.addEventListener("click", ()=>{
  alert("We dont have sell yet")
});

btnview.addEventListener("click", ()=>{
  alert("You can view later")
});

// another code

const navbar = document.getElementById("nav");
const navbtn = document.getElementById("menus");

if (navbar && navbtn) {
    navbtn.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("active");
        navbtn.setAttribute("aria-expanded", String(isOpen));
    });

    navbar.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            navbtn.setAttribute("aria-expanded", "false");
        });
    });
}


// btnmore.addEventListener("click", ()=>{
//   alert("viwing of product will soon be here")
// });

// // menus handl burger
// const navbar = document.getElementById("nav");
// const navbtn = document.getElementById("menus");

// navbtn.addEventListener("click", ()=>{
//   navbar.classList.toggle("active");
// });