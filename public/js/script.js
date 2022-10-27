
var about_us = document.getElementById('about_us_js_section');
var contact = document.getElementById('contact_js_section');

visibility_about_us = 'hidden'
about_us.style.visibility = visibility_about_us;

visibility_contact = 'hidden'
contact.style.visibility = visibility_contact;

function toggleMenu() {
    if (visibility_about_us == 'hidden') {
        visibility_about_us = 'visible';
        visibility_contact = 'hidden';

    }
    else {
        visibility_about_us = 'hidden';
        visibility_contact = 'hidden';
    }
    about_us.style.visibility = visibility_about_us;
    contact.style.visibility = visibility_contact;
    about_us_link.classList.toggle("about_us_link")
}

function toggleMenu2() {
    if (visibility_contact == 'hidden') {
        visibility_contact = 'visible';
        visibility_about_us = 'hidden';

    }
    else {
        visibility_contact = 'hidden';
        visibility_about_us = 'hidden';
    }
    about_us.style.visibility = visibility_about_us;
    contact.style.visibility = visibility_contact;
    contact_link.classList.toggle("contact_link")
}

var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }

function timer(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
}
var timerInterval = setInterval(timer, 1000);

  

function play_pause(player) {

    var audio_player = document.getElementById(player);
    paused = false;

    if (audio_player.paused) {
      audio_player.play();
    timerInterval = setInterval(timer, 1000);

    } else {
      audio_player.pause();
      clearInterval(timerInterval);

    }
}


about_us_link.addEventListener("click", toggleMenu)
contact_link.addEventListener("click", toggleMenu2)