const nav = document.querySelector('.nav')

window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }

}

let valueDisplays = document.querySelectorAll('.num');
let interval = 5000;

valueDisplays.forEach((valueDisplay, index) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'));
    let duration = Math.max(50, Math.floor(interval / Math.abs(endValue - startValue)));

    // Adjust the step size for the last counter to make bigger jumps
    let step = index === valueDisplays.length - 1 ? 100000 : Math.ceil((endValue - startValue) / (interval / duration));

    let counter = setInterval(function () {
        startValue += step;
        if ((step > 0 && startValue >= endValue) || (step < 0 && startValue <= endValue)) {
            startValue = endValue;
            clearInterval(counter);
        }
        valueDisplay.textContent = startValue;
    }, duration);
});





const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })

}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function toggleMenu() {
    var x = document.getElementById("menu");
    x.classList.toggle("show");

    // Get the content element and toggle the class
    var content = document.getElementById("content");
    content.classList.toggle("menu-open");
}

function toggleMenu() {
    var x = document.getElementById("menu");
    x.classList.toggle("show");

    // Get the content element and toggle the class
    var content = document.getElementById("content1");
    content.classList.toggle("menu-open");
}