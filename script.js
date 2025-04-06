// Select DOM elements
const colorBox = document.getElementById('colorBox');
const colorPicker = document.getElementById('colorPicker');
const resetButton = document.getElementById('resetButton');

// Load the last selected color from localStorage
const savedColor = localStorage.getItem('selectedColor');
if (savedColor) {
    colorBox.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
}

// Change the background color of the div when the color input changes
colorPicker.addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    colorBox.style.backgroundColor = selectedColor;
    localStorage.setItem('selectedColor', selectedColor); // Save the selected color
});

// Reset the color to default (white)
resetButton.addEventListener('click', () => {
    colorBox.style.backgroundColor = '#ffffff';
    colorPicker.value = '#ffffff'; // Reset the color picker
    localStorage.removeItem('selectedColor'); // Remove the saved color
});