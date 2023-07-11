
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

document.addEventListener('DOMContentLoaded', function() {
    var phoneInput = document.getElementById('phone');

    // Apply input mask
    Inputmask({ mask: "+1(999) 999-9999" }).mask(phoneInput);

    phoneInput.addEventListener('input', function() {
        // Remove non-numeric characters
        var input = phoneInput.value.replace(/\D/g, '');

        // Set the value without formatting for form submission
        phoneInput.dataset.unmaskedValue = input;
    });
});

