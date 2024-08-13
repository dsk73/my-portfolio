document.addEventListener("DOMContentLoaded", function() {
    let roleIndex = 0;
    const roles = ["Computer Engineer", "Graphics Designer"];
    const roleElement = document.getElementById("role-animation");

    function changeRole() {
        roleElement.innerHTML = roles[roleIndex];
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setInterval(changeRole, 3000);
    changeRole();

    // Auto sliding animation for graphics images
    const graphicsSlider = document.querySelector('.graphics-slider');
    let scrollAmount = 0;
    const scrollStep = 2;
    const scrollInterval = 30; // ms

    function slide() {
        const sliderWidth = graphicsSlider.scrollWidth;
        const visibleWidth = graphicsSlider.clientWidth;
        const maxScroll = sliderWidth - visibleWidth;

        if (scrollAmount < maxScroll) {
            graphicsSlider.scrollLeft += scrollStep;
            scrollAmount += scrollStep;
        } else {
            scrollAmount = 0; // Reset scrollAmount
            graphicsSlider.scrollLeft = 0; // Reset scroll position
        }
    }

    setInterval(slide, scrollInterval);

    // Click to enlarge image
    graphicsSlider.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            event.target.classList.toggle('clicked');
        }
    });
});
