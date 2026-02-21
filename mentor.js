// Checkbox logic to show/hide level buttons
const checkbox = document.getElementById('mentor-ack');
const levelsSection = document.getElementById('mentor-levels');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        // Add class for fade-in effect
        levelsSection.classList.add('show');
    } else {
        levelsSection.classList.remove('show');
    }
});
