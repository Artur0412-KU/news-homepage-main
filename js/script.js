document.addEventListener("DOMContentLoaded", function () {
    const menuBurger = document.querySelector(".burger-menu");
    const navContainer = document.querySelector(".nav-container");
    const menuClose = document.querySelector(".menu-close"); 
  
    menuBurger.addEventListener("click", function () {
        navContainer.classList.toggle("active");
    });

    menuClose.addEventListener("click", function() {
        navContainer.classList.remove('active')
    })
});

