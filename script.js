window.addEventListener("scroll", function() {
    const header = document.querySelector ("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItem = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItem.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});

const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function() {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});

scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", reveral);

function reveral() {
    var reverals = document.querySelector(".reveral");

    for (var i = 0; 1 < reverals.length; i++){
        var windowHeight = window.innerHeight;
        var reveralTop = reverals[i].getBoundingClientReact().top;
            var reveralPoint = 50;

        if (reveralTop < windowHeight - reveralPoint) {
            reverals[i].classList.add("active");
        }
    }
}