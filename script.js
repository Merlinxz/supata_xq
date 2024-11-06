document.addEventListener('DOMContentLoaded', function() {
    // Function to show element, type text, and hide it after a delay
    function showTypeAndHide(elementId, typedElementId, text, delay, hideDelay) {
        setTimeout(function() {
            let element = document.getElementById(elementId);
            if (element) {
                element.style.display = 'block';

                var options = {
                    strings: [text],
                    typeSpeed: 60,
                    backSpeed: 0,
                    loop: false,
                    showCursor: true,
                    cursorChar: "|",
                    onComplete: function() {
                        setTimeout(function() {
                            element.style.display = 'none';
                        }, hideDelay);
                    }
                };

                new Typed(typedElementId, options);
            }
        }, delay);
    }

    // Show, type, and hide each heading one by one
    showTypeAndHide('title1', '#typed-title1', 'สุขสันต์วันเกิด!', 0, 1000); // Hide after 1 second
    showTypeAndHide('title2', '#typed-title2', 'วันเกิดของคนพิเศษ', 4000, 1000); // Show after 4 seconds and hide after 1 second
    showTypeAndHide('title3', '#typed-title3', 'วันที่ 6 เดือน 11', 8000, 1000); // Show after 8 seconds and hide after 1 second    

    // Show typing section after all headings
    setTimeout(function() {
        let typedSection = document.getElementById('typed-section');
        if (typedSection) {
            typedSection.style.display = 'block';

            var options = {
                strings: [
                    "วันเกิดแฟนปีนี้<br>ขอให้เธอมีความสุขมากๆ<br>ประสบความสำเร็จในทุกสิ่ง<br>ขอให้เก๋ๆแข็งแรง เรียนเก่งๆ<br>ขอให้วันนี้และทุกๆวัน<br>เต็มไปด้วยความสุขและความรัก<br>รักเธอมากกว่าาา"
                ],
                typeSpeed: 60,
                backSpeed: 0,
                loop: false,
                showCursor: true,
                cursorChar: "|",
                contentType: 'html',
                onComplete: function() {
                    let giftButton = document.getElementById('gift-button');
                    let imageContainer = document.getElementById('image-container');

                    if (giftButton) {
                        giftButton.style.display = 'block';
                    }
                    if (imageContainer) {
                        imageContainer.style.display = 'flex'; // Show the image container
                        imageContainer.style.animation = 'fadeInZoom 1s ease forwards'; // Apply custom CSS animation
                    }
                }
            };

            new Typed('#typed-text', options);
        }
    }, 12000);
});

// AOS Initialization
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true
    });
});