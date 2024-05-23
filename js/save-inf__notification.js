document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('save-changes');
    let isSaving = false; // Biến để kiểm tra xem đang trong quá trình lưu hay không
    let lastSaveTime = 0; // Biến để lưu thời gian lần lưu gần nhất

    // Load profile data from localStorage on page load
    loadProfileData();

    saveButton.addEventListener('click', () => {
        const now = Date.now();
        const minTimeBetweenSaves = 5000; // Thời gian tối thiểu giữa các lần nhấn Save (ở đây là 5 giây)

        // Kiểm tra nếu đang trong quá trình lưu hoặc thời gian giữa các lần nhấn chưa đủ
        if (isSaving || (now - lastSaveTime < minTimeBetweenSaves)) {
            alert('Please wait before saving again.');
            return;
        }

        // Đánh dấu là đang trong quá trình lưu
        isSaving = true;

        // Lưu thời điểm lần lưu gần nhất
        lastSaveTime = now;

        // Fetch input values
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const currentPassword = document.getElementById('current-password').value.trim();
        const newPassword = document.getElementById('new-password').value.trim();
        const confirmNewPassword = document.getElementById('confirm-new-password').value.trim();
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;

        // Validate inputs
        let isValid = true;

        if (!isValidEmail(email)) {
            isValid = false;
            showToast('Error', 'Please enter a valid Gmail address', 'error');
        }

        if (address === '') {
            isValid = false;
            showToast('Error', 'Address cannot be empty', 'error');
        }

        if (newPassword.length < 6) {
            isValid = false;
            showToast('Error', 'Password must be at least 6 characters long', 'error');
        }

        if (!/\d/.test(newPassword)) {
            isValid = false;
            showToast('Error', 'Password must contain at least one digit', 'error');
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
            isValid = false;
            showToast('Error', 'Password must contain at least one special character', 'error');
        }

        if (newPassword !== confirmNewPassword) {
            isValid = false;
            showToast('Error', 'New password and confirm password do not match', 'error');
        }

        if (isValid) {
            // Save profile data (excluding passwords) to localStorage
            const profileData = {
                email: email,
                address: address,
                firstName: firstName,
                lastName: lastName
            };

            localStorage.setItem('profileData', JSON.stringify(profileData));

            // Save new password to localStorage if changed
            if (newPassword !== '') {
                localStorage.setItem('password', newPassword);
            }

            showToast('Success', 'Profile information has been saved successfully', 'success');
        }

        // Đặt lại biến isSaving sau khi đã lưu xong
        isSaving = false;
    });

    function isValidEmail(email) {
        // Simple regex for Gmail address validation
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return gmailRegex.test(email);
    }

    function showToast(title, message, type) {
        const main = document.getElementById('toast');
        if (main) {
            const toast = document.createElement('div');

            const icons = {
                success: '../img/Fire Fill.png',
                error: '../img/Fire Fill (1).png'
            };

            const id_remove = setTimeout(function () {
                main.removeChild(toast);
            }, 4000);

            toast.onclick = function (e) {
                if (e.target.closest('.toast__close')) {
                    main.removeChild(toast);
                    clearTimeout(id_remove);
                }
            };

            const icon = icons[type];
            const delay = 4;

            toast.style.animation = 'right-to-left ease 0.5s, fade-out linear 1s ' + delay + 's forwards';
            toast.classList.add('toast', 'toast--' + type);
            toast.innerHTML =
                '<div class="toast__icon">' +
                '<img src="' + icon + '"></img>' +
                '</div>' +
                '<div class="toast__body">' +
                '<h3 class="toast__title">' + title + '</h3>' +
                '<p class="toast__message">' + message + '</p>' +
                '</div>' +
                '<div class="toast__close">' +
                '<img src="../img/icon-cancel (1).png" alt="Close">' +
                '</div>';
            main.appendChild(toast);
        }
    }

    function loadProfileData() {
        // Load profile data from localStorage if available
        const profileData = JSON.parse(localStorage.getItem('profileData'));

        if (profileData) {
            document.getElementById('email').value = profileData.email || '';
            document.getElementById('address').value = profileData.address || '';
            document.getElementById('first-name').value = profileData.firstName || '';
            document.getElementById('last-name').value = profileData.lastName || '';
        }
    }
});
