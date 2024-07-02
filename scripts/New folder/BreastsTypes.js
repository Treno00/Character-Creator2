document.addEventListener('DOMContentLoaded', function() {
    const eyeColors = [
        'Flat',
        'Small',
        'Medium',
        'Large',
        'XXL',
        'Silicone'
    ];

    const eyeColorSelect = document.getElementById('char-breasts');

    eyeColors.forEach(color => {
        const option = document.createElement('option');
        option.value = color.toLowerCase();
        option.textContent = color;
        eyeColorSelect.appendChild(option);
    });
});
