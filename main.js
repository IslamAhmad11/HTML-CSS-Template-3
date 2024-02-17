let skills = document.querySelector(".our-skills");
let progressNum = document.querySelectorAll(".skill h3 span");
let progressBars = document.querySelectorAll(".the-progress span");
let stats = document.querySelector(".stats");
let spans = document.querySelectorAll(".stats .number");
let started = false; // function not yet started

window.onscroll = () => {
    // Animate bars width on scrolling
    if(window.scrollY >= skills.offsetTop -300){
        progressBars.forEach((bar) => {
            bar.style.width = bar.dataset.width;
        });
        progressNum.forEach((barNum) => {
            barNum.innerHTML = `${barNum.dataset.width}`;
        });
    }
    // Increase Numbers On Scrolling
    if(window.scrollY >= stats.offsetTop - 300){
        if(!started){
            spans.forEach((span) => {startCount(span)})
        }
        started = true
    }
}
// Increase Numbers On Scrolling
function startCount (num) {
    let goal = num.dataset.goal;
    let count = setInterval(() => {
        num.textContent++;
        if(num.textContent == goal){
            clearInterval(count);
        }
    },2000 / goal)
}

// Set event date
countDown = new Date("Feb 17, 2024 14:32:00").getTime();

let counter = setInterval (() => {
    // Get now date
    let dateNow = new Date().getTime();

    // Find the difference between now and countdown date
    let dateDiff = countDown - dateNow;

    // Get time units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if(dateDiff < 0) {
        clearInterval(counter);
        document.querySelector(".info .expired-event").innerHTML = "The event has concluded";
        document.querySelector(".days").innerHTML = "00"
        document.querySelector(".hours").innerHTML = "00";
        document.querySelector(".minutes").innerHTML = "00";
        document.querySelector(".seconds").innerHTML = "00";
    }
}, 1000);