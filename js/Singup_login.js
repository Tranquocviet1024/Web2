document.addEventListener('DOMContentLoaded', function() {
    // Chọn các phần tử của form Đăng Ký
    const signUpForm = document.querySelector('.Box_Create_acount.sign-up .Box-Content');
    const nameInput = document.getElementById('name');
    const emailOrPhoneSignUpInput = document.getElementById('email-or-phone-number');
    const passwordSignUpInput = document.getElementById('password');

    // Chọn các phần tử của form Đăng Nhập
    const loginForm = document.querySelector('.Box_Create_acount.login .Box-Content');
    const emailOrPhoneLoginInput = document.getElementById('email-or-phone-number-login');
    const passwordLoginInput = document.getElementById('password-login');

    // Kiểm tra hợp lệ của Email hoặc Số Điện Thoại
    function validateEmailOrPhone(value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d{10}$/;
        return emailPattern.test(value) || phonePattern.test(value);
    }

    // Kiểm tra hợp lệ của Mật Khẩu 
    function validatePassword(password) {
        return password.length >= 6;
    }
    // Hàm chuyển hướng về trang chủ
    function redirectToHomePage() {
        window.location.href = '../html/homepage.html';
    }
    // Xử lý khi gửi form Đăng Ký
    if (signUpForm) {
        signUpForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = nameInput.value.trim();
            const emailOrPhone = emailOrPhoneSignUpInput.value.trim();
            const password = passwordSignUpInput.value.trim();

            // Kiểm tra hợp lệ
            if (!name) {
                alert('Vui lòng nhập tên của bạn');
                return;
            }

            if (!validateEmailOrPhone(emailOrPhone)) {
                alert('Vui lòng nhập email hoặc số điện thoại hợp lệ');
                return;
            }

            if (!validatePassword(password)) {
                alert('Mật khẩu phải có ít nhất 6 ký tự');
                return;
            }

            // Hiển thị thông báo thành công
            alert('Tạo tài khoản thành công!');

            // Chuyển hướng về trang chủ
            redirectToHomePage();
        });
    }

    // Xử lý khi gửi form Đăng Nhập
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const emailOrPhone = emailOrPhoneLoginInput.value.trim();
            const password = passwordLoginInput.value.trim();

            // Kiểm tra hợp lệ
            if (!validateEmailOrPhone(emailOrPhone)) {
                alert('Vui lòng nhập email hoặc số điện thoại hợp lệ');
                return;
            }

            if (!validatePassword(password)) {
                alert('Mật khẩu phải có ít nhất 6 ký tự');
                return;
            }

            // Hiển thị thông báo thành công
            alert('Đăng nhập thành công!');

            // Chuyển hướng về trang chủ
            redirectToHomePage();
        });
    }
});
