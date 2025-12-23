document.addEventListener('DOMContentLoaded', () => {
    // 1. Randomize rotation for skill stickers to give a "slapped on" look
    const stickers = document.querySelectorAll('.skill-sticker');
    stickers.forEach(sticker => {
        // Random rotation between -3 and 3 degrees
        const randomRotation = (Math.random() * 6) - 3;
        sticker.style.transform = `rotate(${randomRotation}deg)`;

        // Add hover effect reset
        sticker.addEventListener('mouseenter', () => {
            sticker.style.transform = 'scale(1.1) rotate(0deg) z-index(10)';
            sticker.style.zIndex = '10';
            sticker.style.background = '#ffea00'; // Highlight color
            sticker.style.color = 'black';
        });

        sticker.addEventListener('mouseleave', () => {
            sticker.style.transform = `rotate(${randomRotation}deg)`;
            sticker.style.zIndex = '1';
            // Reset color based on nth-child is tricky in JS without re-reading styles, 
            // but we can just clear the inline style to let CSS take over (except transform)
            sticker.style.background = '';
            sticker.style.color = '';
        });
    });

    // 2. Add subtle parallax or movement to panels on scroll could be nice, but keeping it simple.

    // 3. Simple console message
    console.log('%c Hello! looking for the source code? ', 'background: #2c2c2c; color: #bada55; padding: 10px; font-size: 16px;');
});
