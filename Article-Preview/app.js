const button = document.getElementById('btn');
const svg = document.getElementById('svg');
const tooltip = document.getElementById('tip');
const tri = document.getElementById('tip-tri');


button.addEventListener('click', () => {
    if (Object.values(tooltip.classList).includes('show') &&
    Object.values(tri.classList).includes('show')) {
        tooltip.classList.remove('show');
        tri.classList.remove('show');

        svg.classList.remove('svg-active');
        button.classList.remove('btn-active');
    } else {
        tooltip.classList.add('show');
        tri.classList.add('show');

        svg.classList.add('svg-active');
        button.classList.add('btn-active');
    }
});

button.addEventListener("mouseenter", () => {
    svg.classList.add('svg-hover');
    button.classList.add('btn-hover');
});
button.addEventListener("mouseleave", () => {
    svg.classList.remove('svg-hover');
    button.classList.remove('btn-hover');
});

console.log(tooltip.classList[0])
console.log(button.classList)
