document.addEventListener('DOMContentLoaded', () => {
    const userContainer = document.querySelector('.user-container');
    const userSettingForm = document.querySelector('.user-setting-form');

    userContainer.addEventListener('click', (event) => {
        event.stopPropagation();
        userSettingForm.style.display = userSettingForm.style.display === 'flex' ? 'none' : 'flex';
    });

    document.addEventListener('click', (event) => {
        if (!userContainer.contains(event.target)) {
            userSettingForm.style.display = 'none';
        }
    });
});