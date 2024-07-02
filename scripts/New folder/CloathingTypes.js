document.addEventListener('DOMContentLoaded', function() {
    const clothingTypes = [
        'Casual',
        'School Uniform',
        'Formal Wear',
        'Sportswear',
        'Sleepwear',
        'Swimwear',
        'Business Attire',
        'Traditional Wear',
        'Costume',
        'Outerwear',
        'Party Dress',
        'Work Uniform',
        'Beachwear',
        'Loungewear',
        'Athleisure',
        'Festival Outfit',
        'Streetwear',
        'Military Uniform',
        'Gothic Fashion',
        'Vintage Clothing',
        'Winter Wear',
        'Summer Outfit'
    ];

    const clothingSelect = document.getElementById('char-clothing');

    clothingTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        clothingSelect.appendChild(option);
    });
});
