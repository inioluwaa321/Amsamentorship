// Checkbox logic with smooth fade
const checkbox = document.getElementById('mentor-ack');
const levelsSection = document.getElementById('mentor-levels');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        levelsSection.style.display = 'block';
        setTimeout(() => {
            levelsSection.classList.add('show');
        }, 50);
    } else {
        levelsSection.classList.remove('show');
        setTimeout(() => {
            levelsSection.style.display = 'none';
        }, 500); // match CSS transition
    }
});
