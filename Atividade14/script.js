document.addEventListener("DOMContentLoaded", function() {
    const inputText = document.getElementById('inputText');
    const upperCaseCheckbox = document.getElementById('upperCase');
    const lowerCaseCheckbox = document.getElementById('lowerCase');

    upperCaseCheckbox.addEventListener('change', function() {
        if (this.checked) {
            inputText.value = inputText.value.toUpperCase();
            lowerCaseCheckbox.checked = false;
        }
    });

    lowerCaseCheckbox.addEventListener('change', function() {
        if (this.checked) {
            inputText.value = inputText.value.toLowerCase();
            upperCaseCheckbox.checked = false;
        }
    });
});
