var toggleButton = document.getElementById('togglebutton');
var skillsDiv = document.getElementById('Skills');
// Ensure initial state of skillsDiv
if (skillsDiv) {
    skillsDiv.style.display = 'block'; // Make sure it's initially visible (if required)
}
if (toggleButton && skillsDiv) {
    toggleButton.addEventListener('click', function () {
        // Check the current display state of skillsDiv
        if (skillsDiv.style.display === 'none' || skillsDiv.style.display === '') {
            skillsDiv.style.display = 'block';
            toggleButton.value = 'Hide Skills';
        }
        else {
            skillsDiv.style.display = 'none';
            toggleButton.value = 'Show Skills';
        }
    });
}
else {
    console.error('Required element not found in the DOM');
}
