document.addEventListener('DOMContentLoaded', function() {
    const hobbiesList = [
        'Acting',
        'Archery',
        'Astrology',
        'Baking',
        'Bird Watching',
        'Blogging',
        'Board Games',
        'Bodybuilding',
        'Bowling',
        'Camping',
        'Canoeing',
        'Chess',
        'Collecting',
        'Cooking',
        'Cycling',
        'Dancing',
        'Drawing',
        'Embroidery',
        'Fishing',
        'Gardening',
        'Geocaching',
        'Golf',
        'Hiking',
        'Horseback Riding',
        'Ice Skating',
        'Jewelry Making',
        'Jogging',
        'Kayaking',
        'Knitting',
        'Model Building',
        'Mountain Biking',
        'Painting',
        'Photography',
        'Pottery',
        'Reading',
        'Rock Climbing',
        'Running',
        'Scrapbooking',
        'Sewing',
        'Sex',
        'Skiing',
        'Skydiving',
        'Snowboarding',
        'Surfing',
        'Swimming',
        'Table Tennis',
        'Tennis',
        'Traveling',
        'Video Games',
        'Volunteering',
        'Walking',
        'Woodworking',
        'Writing',
        'Yoga'
    ];

    const hobbiesSelect = document.getElementById('char-hobbies');

    hobbiesList.forEach(hobby => {
        const option = document.createElement('option');
        option.value = hobby;
        option.textContent = hobby;
        hobbiesSelect.appendChild(option);
    });
});
