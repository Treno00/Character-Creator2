document.addEventListener('DOMContentLoaded', function() {
    const eyeColors = [
        'Blue',
        'Green',
        'Brown',
        'Hazel',
        'Amber',
        'Gray',
        'Red',
        'Violet'
    ];

    const eyeColorSelect = document.getElementById('char-job');

    eyeColors.forEach(color => {
        const option = document.createElement('option');
        option.value = color.toLowerCase();
        option.textContent = color;
        eyeColorSelect.appendChild(option);
    });
});
