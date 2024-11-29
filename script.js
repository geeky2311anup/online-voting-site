document.addEventListener("DOMContentLoaded", () => {
    const voteButtons = document.querySelectorAll(".vote-btn");

    voteButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const candidate = e.target.closest(".candidate").dataset.candidate;

            // Show an alert to confirm the vote
            alert(`You are voting for ${candidate}.`);
            
            // Redirect to the authentication page
            if (confirm(`Do you want to proceed with your vote for ${candidate}?`)) {
                window.location.href = "face-authentication.html";
            }
        });
    });
});
