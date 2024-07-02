document.addEventListener('DOMContentLoaded', function() {
    const eyeColors = [
        'Blond',
        'Black',
        'Brown',
        'Grey',
        'White',
        'Platinum'
    ];

    const eyeColorSelect = document.getElementById('char-hair-color');

    eyeColors.forEach(color => {
        const option = document.createElement('option');
        option.value = color.toLowerCase();
        option.textContent = color;
        eyeColorSelect.appendChild(option);
    });
});
