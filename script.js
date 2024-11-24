document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            alert(`You clicked on the ${section.querySelector('h2').textContent} section`);
        });
    });
});