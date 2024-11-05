
        function validateForm() {
            // Get form elements
            var firstName = document.getElementById("firstName").value;
            var lastName = document.getElementById("lastName").value;
            var dob = document.getElementById("dob").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var tshirtSize = document.getElementById("tshirtSize").value;
            var favoriteColor = document.getElementById("favoriteColor").value;
            var aboutYourself = document.getElementById("aboutYourself").value;

            // Check for empty fields
            if (!firstName || !lastName || !dob || !email || !password || !tshirtSize || !favoriteColor || !aboutYourself) {
                alert("All fields are required.");
                return false;
            }

            // Validate email format
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return false;
            }

            // Validate password length (at least 6 characters)
            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return false;
            }

            // Validate date of birth (must be in the past)
            var today = new Date();
            var birthDate = new Date(dob);
            if (birthDate >= today) {
                alert("Date of birth must be in the past.");
                return false;
            }

            // All validations passed
            alert("Form submitted successfully!");
            return true;
        }
