
/* Typerwriter animation */
const text = document.querySelector('.sec-text');
const words = ['Developer', 'Designer', '3D Modeler'];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // Adjust typing speed as desired (in milliseconds)

function type() {
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
        // Delete characters faster by decreasing the typingSpeed value
        typingSpeed = 100; // Adjust deleting speed as desired (in milliseconds)
        text.textContent = currentWord.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        // Add characters
        text.textContent = currentWord.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    if (!isDeleting && currentCharIndex === currentWord.length) {
        // Pause at the end of a word
        typingSpeed = 3000; // Adjust pause duration as desired (in milliseconds)
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        // Move to the next word
        typingSpeed = 100; // Adjust typing speed as desired (in milliseconds)
        isDeleting = false;
        currentWordIndex++;
        if (currentWordIndex === words.length) {
            currentWordIndex = 0;
        }
    }

    setTimeout(type, typingSpeed);
}

window.addEventListener('DOMContentLoaded', type);

// Phone Logic


const phoneInput = document.getElementById("phone");
const submitButton = document.getElementById("submitButton");

// Function to format the phone number as it is typed in
function formatPhoneNumber() {
    const phoneNumber = phoneInput.value.replace(/\D/g, ''); // Remove all non-numeric characters
    const areaCode = phoneNumber.substring(0, 3);
    const middlePart = phoneNumber.substring(3, 6);
    const lastPart = phoneNumber.substring(6, 10);

    if (phoneNumber.length > 6) {
        phoneInput.value = `(${areaCode}) ${middlePart}-${lastPart}`;
    } else if (phoneNumber.length > 3) {
        phoneInput.value = `(${areaCode}) ${middlePart}`;
    } else if (phoneNumber.length > 0) {
        phoneInput.value = `(${areaCode}`;
    } else {
        phoneInput.value = '';
    }
    
    // Enable or disable the submit button based on the phone number length

    if (phoneInput.value.replace(/\D/g, '').length === 10) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}


// Event listener for the input event to handle formatting and restrict to numbers only
phoneInput.addEventListener("input", formatPhoneNumber);


// Enable or disable the submit button based on the phone number length
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById("submitButton");
    
    phoneInput.addEventListener("input", () => {
        const phoneNumber = phoneInput.value.replace(/\D/g, ''); // Remove all non-numeric characters
        if (phoneNumber.length === 10) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    });
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Check if any of the required fields are empty
    if (!nameInput.value.trim() || !emailInput.value.trim() || !phoneInput.value.trim() || !messageInput.value.trim()) {
        // Prevent the form submission if any of the required fields are empty
        event.preventDefault();

        // Show an error message or perform other actions to notify the user that all fields are required
        // For example, you can display an error message below the form:
        const errorMessageElement = document.getElementById("errorMessage");
        errorMessageElement.innerText = "Please fill in all required fields.";
    } else {
        // All required fields have values, the form can be submitted
        // You can also remove the error message if it was shown before:
        const errorMessageElement = document.getElementById("errorMessage");
        errorMessageElement.innerText = "";
    }
});