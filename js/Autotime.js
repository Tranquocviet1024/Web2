document.addEventListener('DOMContentLoaded', function() {
    function updateCountdown() {
        // Lấy phần tử hiển thị ngày, giờ, phút, giây
        const daysElement = document.querySelector('.flashsales-set_days');
        const hoursElement = document.querySelector('.flashsales-set_hours');
        const minutesElement = document.querySelector('.flashsales-set_minutes');
        const secondsElement = document.querySelector('.flashsales-set_seconds');

        // Lấy giá trị hiện tại của ngày, giờ, phút, giây từ phần tử và chuyển đổi thành số nguyên
        let days = parseInt(daysElement.innerText);
        let hours = parseInt(hoursElement.innerText);
        let minutes = parseInt(minutesElement.innerText);
        let seconds = parseInt(secondsElement.innerText);

        // Kiểm tra nếu các giá trị không phải là số, gán lại các giá trị mặc định là 0
        if (isNaN(days)) { days = 0; }
        if (isNaN(hours)) { hours = 0; }
        if (isNaN(minutes)) { minutes = 0; }
        if (isNaN(seconds)) { seconds = 0; }

        // Giảm giá trị giây đi 1 đơn vị
        seconds--;

        // Nếu giây nhỏ hơn 0, đặt lại giá trị giây về 59 và giảm giá trị phút đi 1 đơn vị
        if (seconds < 0) {
            seconds = 59;
            minutes--;

            // Nếu phút nhỏ hơn 0, đặt lại giá trị phút về 59 và giảm giá trị giờ đi 1 đơn vị
            if (minutes < 0) {
                minutes = 59;
                hours--;

                // Nếu giờ nhỏ hơn 0, đặt lại giá trị giờ về 23 và giảm giá trị ngày đi 1 đơn vị
                if (hours < 0) {
                    hours = 23;
                    days--;

                    // Nếu ngày nhỏ hơn 0, đặt lại giá trị ngày về 0 (hoặc xử lý theo logic của bạn)
                    if (days < 0) {
                        days = 0; // Hoặc xử lý khác
                    }
                }
            }
        }

        // Cập nhật giá trị ngày, giờ, phút, giây vào phần tử HTML
        daysElement.innerText = days < 10 ? '0' + days : days;
        hoursElement.innerText = hours < 10 ? '0' + hours : hours;
        minutesElement.innerText = minutes < 10 ? '0' + minutes : minutes;
        secondsElement.innerText = seconds < 10 ? '0' + seconds : seconds;
    }

    // Cập nhật thời gian mỗi giây bằng cách gọi hàm updateCountdown
    setInterval(updateCountdown, 1000);
});



document.addEventListener('DOMContentLoaded', function() {
    function updateCountdown() {
        // Lấy phần tử hiển thị ngày, giờ, phút, giây
        const daysElement = document.querySelector('.categories-time__days__content');
        const hoursElement = document.querySelector('.categories-time__hours__content');
        const minutesElement = document.querySelector('.categories-time__minutes__content');
        const secondsElement = document.querySelector('.categories-time__seconds__content');

        // Lấy giá trị hiện tại của ngày, giờ, phút, giây từ phần tử và chuyển đổi thành số nguyên
        let days = parseInt(daysElement.innerText);
        let hours = parseInt(hoursElement.innerText);
        let minutes = parseInt(minutesElement.innerText);
        let seconds = parseInt(secondsElement.innerText);

        // Kiểm tra nếu các giá trị không phải là số, gán lại các giá trị mặc định là 0
        if (isNaN(days)) { days = 0; }
        if (isNaN(hours)) { hours = 0; }
        if (isNaN(minutes)) { minutes = 0; }
        if (isNaN(seconds)) { seconds = 0; }

        // Giảm giá trị giây đi 1 đơn vị
        seconds--;

        // Nếu giây nhỏ hơn 0, đặt lại giá trị giây về 59 và giảm giá trị phút đi 1 đơn vị
        if (seconds < 0) {
            seconds = 59;
            minutes--;

            // Nếu phút nhỏ hơn 0, đặt lại giá trị phút về 59 và giảm giá trị giờ đi 1 đơn vị
            if (minutes < 0) {
                minutes = 59;
                hours--;

                // Nếu giờ nhỏ hơn 0, đặt lại giá trị giờ về 23 và giảm giá trị ngày đi 1 đơn vị
                if (hours < 0) {
                    hours = 23;
                    days--;

                    // Nếu ngày nhỏ hơn 0, đặt lại giá trị ngày về 0 (hoặc xử lý theo logic của bạn)
                    if (days < 0) {
                        days = 0; // Hoặc xử lý khác
                    }
                }
            }
        }

        // Cập nhật giá trị ngày, giờ, phút, giây vào phần tử HTML
        daysElement.innerText = days;
        hoursElement.innerText = hours;
        minutesElement.innerText = minutes;
        secondsElement.innerText = seconds;
    }

    // Cập nhật thời gian mỗi giây bằng cách gọi hàm updateCountdown
    setInterval(updateCountdown, 1000);
});


