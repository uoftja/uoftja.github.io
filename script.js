const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) { // Adjust this value as needed
        navbar.style.backgroundColor = "#333"; // Change to your desired background color
        navbar.style.transition = "background-color 0.15s ease-in-out"; // Add this line
    } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.transition = "background-color 0.15s ease-in-out"; // Add this line
    }
});
