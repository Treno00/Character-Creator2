document.addEventListener('DOMContentLoaded', function() {
    const eyeColors = [
        'Straight',
        'Braids',
        'Bangs',
        'Curly',
        'Bun',
        'Short',
        'Long',
        'Ponytails',
        'Pigtrails',
        'Wavy'
    ];

    const eyeColorSelect = document.getElementById('char-hair-type');

    eyeColors.forEach(color => {
        const option = document.createElement('option');
        option.value = color.toLowerCase();
        option.textContent = color;
        eyeColorSelect.appendChild(option);
    });
});
