// const about_us = document.getElementById("about_us_js_section")
// const about_us_link = document.getElementById("about_us_link")

var about_us = document.getElementById('about_us_js_section');

visibility_var = 'hidden'
about_us.style.visibility = visibility_var;

function toggleMenu() {
    if (visibility_var == 'hidden') {
        visibility_var = 'visible';
    }
    else {
        visibility_var = 'hidden';
    }
    about_us.style.visibility = visibility_var;

      
    about_us_link.classList.toggle("about_us_link")
}

about_us_link.addEventListener("click", toggleMenu)