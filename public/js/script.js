
var about_us = document.getElementById('about_us_js_section');
var contact = document.getElementById('contact_js_section');
var noise_text = document.getElementById('noise_description_text');

display_about_us = 'none'
about_us.style.display = display_about_us;

display_contact = 'none'
contact.style.display = display_contact;

display_noise_text = 'block'
noise_text.style.display = display_noise_text;


function toggleMenu() {
    if (display_about_us == 'none') {
        display_about_us = 'block';
        display_contact = 'none';
        display_noise_text = 'none';
    }
    else {
        display_about_us = 'none';
        display_contact = 'none';
        display_noise_text = 'block';
    }
    about_us.style.display = display_about_us;
    contact.style.display = display_contact;
    noise_text.style.display = display_noise_text;

    about_us_link.classList.toggle("about_us_link")
}

function toggleMenu2() {
    if (display_contact == 'none') {
        display_contact = 'block';
        display_about_us = 'none';
        display_noise_text = 'none';
    }
    else {
        display_contact = 'none';
        display_about_us = 'none';
        display_noise_text = 'block';
    }
    about_us.style.display = display_about_us;
    contact.style.display = display_contact;
    noise_text.style.display = display_noise_text;

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