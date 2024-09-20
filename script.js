let currentLink = ''; // Variable to store the current link

function confirmLink(event, website) {
    event.preventDefault(); // Prevent the default action
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const confirmButton = document.getElementById('confirm-button');
    const cancelButton = document.getElementById('cancel-button');

    modalMessage.textContent = `Are you sure you want to go to ${website}?`;
    modal.style.display = 'block'; // Show the modal
    modal.setAttribute('aria-hidden', 'false'); // Set aria-hidden to false

    // Store the link URL in the currentLink variable
    currentLink = event.currentTarget.href;

    confirmButton.onclick = function() {
        window.open(currentLink, '_blank'); // Open the link in a new tab
    };

    cancelButton.onclick = function() {
        modal.style.display = 'none'; // Hide the modal
        modal.setAttribute('aria-hidden', 'true'); // Set aria-hidden to true
    };
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true'); // Set aria-hidden to true
    }
};

