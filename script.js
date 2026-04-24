document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const passportId = params.get('id');

    if (!passportId) {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('canvas-container').style.display = 'none';
        return;
    }

    // Initialize the PageFlip engine
    const pageFlip = new St.PageFlip(document.getElementById('passport-book'), {
        width: 400, 
        height: 550,
        size: "stretch",
        minWidth: 315,
        maxWidth: 1000,
        minHeight: 420,
        maxHeight: 1350,
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: false
    });

    // Define your passport pages. 
    // This assumes you name your images: ID_1.jpg, ID_2.jpg, etc.
    const images = [
        `passports/${passportId}_1.jpg`,
        `passports/${passportId}_2.jpg`,
        `passports/${passportId}_3.jpg`,
        `passports/${passportId}_4.jpg`
    ];

    // Load the images into the flipbook
    pageFlip.loadFromImages(images);
});
