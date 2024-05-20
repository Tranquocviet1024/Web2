
document.addEventListener('DOMContentLoaded', function() {
    function updateSeconds() {
        const secondsElement = document.querySelector('.flashsales-set_seconds');
        let seconds = parseInt(secondsElement.innerText);

        if (isNaN(seconds)) {
            seconds = 0;
        }

        seconds--;

        if (seconds < 0) {
            seconds = 59;
        }

        secondsElement.innerText = seconds < 10 ? '0' + seconds : seconds;
    }

    // Cập nhật giây mỗi 1 giây
    setInterval(updateSeconds, 1000);
});