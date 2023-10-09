const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const learnMoreButton = document.querySelector(".learn-more-button");

    learnMoreButton.addEventListener("click", function (e) {
        e.preventDefault();

        // Scroll to the next section with smooth behavior
        const nextSection = document.querySelector("#next-section");
        nextSection.scrollIntoView({ behavior: "smooth" });
    });
});
