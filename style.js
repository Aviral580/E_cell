// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Button functionality remains unchanged
const boxes = document.querySelectorAll('.btns');
const resetBox = boxes[8];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box === resetBox) {
            boxes.forEach(b => b.style.backgroundColor = 'rgb(62, 34, 224)');
        } else {
            box.style.backgroundColor = 'rgb(146, 12, 12)';
        }
    });
});
