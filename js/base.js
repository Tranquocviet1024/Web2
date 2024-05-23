
document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('back-to-top-btn');

    // Thêm sự kiện scroll để hiển thị hoặc ẩn nút back-to-top
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Kéo xuống hơn 300px thì hiển thị nút
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // Sự kiện click để quay trở lại đầu trang
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Cuộn mượt
        });
    });
});
