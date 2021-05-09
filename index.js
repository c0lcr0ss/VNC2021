
/*===== MENU SHOW Y HIDDEN =====*/
var logo = document.querySelector(".hamburger");
var menux = document.querySelector(".menu");

logo.addEventListener('click', function(){
  menux.classList.toggle('showmenu');
});

/*===== GSAP ANIMATION =====*/
gsap.registerPlugin(ScrollTrigger);

// HOME
gsap.from('.homenav', {opacity: 0, duration: 1, delay:3.2, y: -40})
gsap.from('.homecontent', {opacity: 0, duration: 1, delay:5, y: 40})
gsap.from('.hometimer', {opacity: 0, duration: 1, delay:7.4, x: -30})
gsap.from('.homesubcontent', {opacity: 0, duration: 1, delay:8.2, x: 30})

// PROGRAM
gsap.from(".progtext", {opacity: 0, duration: 1.85, y: 200, scrollTrigger: ".progtext"})
gsap.from(".programmeimage", {opacity: 0, duration: 1.85, delay:5.2, y: -200, scrollTrigger: ".progtext"})

// VENUE
gsap.from(".venuetext", {opacity: 0, duration: 1.85, x: 200, scrollTrigger: ".venuetext"})
gsap.from(".venueimage", {opacity: 0, duration: 1.85, delay:5.2, x: -200, scrollTrigger: ".venuetext"})

// ABOUT
gsap.from(".navaboutus", {opacity: 0, duration: 2, x: 200, scrollTrigger: ".kolum"})
gsap.from(".abouttitle", {opacity: 0, duration: 2, y: -200, scrollTrigger: ".kolum"})
gsap.from(".people", {opacity: 0, duration: 2, y: 200, scrollTrigger: ".kolum"})

// THE TEAM
gsap.from(".teamheading", {opacity: 0, duration: 2, y: -200, scrollTrigger: ".gallery"})
gsap.from(".gallery", {opacity: 0, duration: 2, y: 200, scrollTrigger: ".gallery"})


/*===== countdown =====*/
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let birthday = "May 26, 2021 19:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
  
            headline.innerText = "It's VNC!";
            countdown.style.display = "none";
            content.style.display = "block";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());