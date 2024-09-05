document.addEventListener("DOMContentLoaded", function() {
    const popupLink = document.getElementById("popupLink");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");

    popupLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        popup.style.display = "block"; // Show the popup
    });

    closePopup.addEventListener("click", function() {
        popup.style.display = "none"; // Hide the popup
    });

    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none"; // Hide the popup if clicked outside
        }
    });
});
