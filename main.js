let skills = document.querySelector(".our-skills");
let progressNum = document.querySelectorAll(".skill h3 span");
let progressBars = document.querySelectorAll(".the-progress span");

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
}