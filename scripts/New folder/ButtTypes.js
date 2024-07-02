document.addEventListener('DOMContentLoaded', function() {
    const eyeColors = [
        'Small',
        'Medium',
        'Large',
        'Athletic'
    ];

    const eyeColorSelect = document.getElementById('char-butt');

    eyeColors.forEach(color => {
        const option = document.createElement('option');
        option.value = color.toLowerCase();
        option.textContent = color;
        eyeColorSelect.appendChild(option);
    });
});
