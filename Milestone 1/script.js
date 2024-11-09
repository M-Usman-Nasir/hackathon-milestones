var toggleButton = document.getElementById("toggle-skills");
var skills = document.getElementById("skills");
toggleButton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
        toggleButton.textContent = "Hide Skills";
    }
    else {
        skills.style.display = "none";
        toggleButton.textContent = "Show Skills";
    }
    // Add a class to the button when it's clicked
    toggleButton.classList.toggle("clicked");
    // Add a click event listener to the button to remove the class when clicked again
    toggleButton.addEventListener("click", function () {
        toggleButton.classList.remove("clicked");
    });
    // Add a hover effect to the button when it's hovered over
    toggleButton.addEventListener("mouseenter", function () {
        toggleButton.classList.add("hovered");
    });
});
