document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");

    // Signup Form Submission
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("signup-name").value;
        const aadhar = document.getElementById("signup-aadhar").value;
        const dob = document.getElementById("signup-dob").value;

        // Calculate the age
        const birthDate = new Date(dob);
        const age = calculateAge(birthDate);

        if (age < 18) {
            alert("You are not eligible to vote. Age must be 18 or older.");
            return; // Stop the signup process if age is less than 18
        }

        if (localStorage.getItem(aadhar)) {
            alert("This Aadhar Number is already registered. Please log in.");
        } else {
            // Save user data to local storage
            localStorage.setItem(aadhar, JSON.stringify({ name, dob }));
            alert("Sign Up successful! You can now log in.");
            signupForm.reset();
        }
    });

    // Validate user login
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const aadhar = document.getElementById("login-aadhar").value;
        const user = localStorage.getItem(aadhar);

        if (user) {
            alert(`Welcome back! Redirecting to the candidates page.`);
            window.location.href = "index.html"; // Redirect to the candidate list page
        } else {
            alert("Aadhar Number not found. Please sign up first.");
        }
    });

    // Function to calculate age
    function calculateAge(birthDate) {
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            return age - 1;
        }
        return age;
    }
});
