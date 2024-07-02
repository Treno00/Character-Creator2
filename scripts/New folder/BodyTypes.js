document.addEventListener('DOMContentLoaded', function() {
    const eyeColors = [
        'Fit',
        'Skinny',
        'Muscular',
        'Chubby'
    ];

    const eyeColorSelect = document.getElementById('char-hair-color');

    eyeColors.forEach(color => {
        const option = document.createElement('option');
        option.value = color.toLowerCase();
        option.textContent = color;
        eyeColorSelect.appendChild(option);
    });
});
