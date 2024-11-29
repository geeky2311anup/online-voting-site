document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("camera-preview");
    const retryBtn = document.getElementById("retry-btn");
    const confirmBtn = document.getElementById("confirm-btn");

    // Access the user's camera
    navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((err) => {
            console.error("Camera access denied:", err);
            alert("Unable to access the camera. Please check your permissions.");
        });

    // Retry button logic
    retryBtn.addEventListener("click", () => {
        alert("Please adjust your position and try again.");
    });

    // Confirm button logic
    confirmBtn.addEventListener("click", () => {
        alert("Face authentication successful! Proceeding...");
        window.location.href = "vote-success.html"; // Redirect to success page
    });
});
