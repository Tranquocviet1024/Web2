document.addEventListener('DOMContentLoaded', function(){
    function countdown(time_future1, dayhtml, hourhtml, minutehtml, secondhtml){
        const interval = setInterval(update_time, 1000);
        function update_time(){
            const nowtime = new Date().getTime();
            const remaintime = time_future1.getTime() - nowtime;

            if(remaintime < 0){
                clearInterval(interval);
                return;
            }

            let second_calc = Math.floor((remaintime / 1000) % 60);
            let minute_calc = Math.floor((remaintime / 1000 / 60) % 60);
            let hour_calc = Math.floor((remaintime / (1000 * 60 * 60)) % 24);
            let day_calc = Math.floor(remaintime / (1000 * 60 * 60 * 24));
            
            dayhtml.innerText = day_calc < 10? '0'+ day_calc : day_calc;
            hourhtml.innerText = hour_calc < 10? '0'+ hour_calc : hour_calc;
            minutehtml.innerText = minute_calc < 10? '0'+ minute_calc :minute_calc;
            secondhtml.innerText = second_calc < 10? '0'+ second_calc : second_calc;
        }
    }

    const time_future1 = new Date('2024-06-01T00:00:00');
    const time_future2 = new Date('2024-06-03T00:00:00');

    
    const day1 = document.querySelector('.flashsales-set_days');
    const hour1 = document.querySelector('.flashsales-set_hours');
    const minute1 = document.querySelector('.flashsales-set_minutes');
    const second1 = document.querySelector('.flashsales-set_seconds');

    const daysElement2 = document.querySelector('.categories-time__days__content');
    const hoursElement2 = document.querySelector('.categories-time__hours__content');
    const minutesElement2 = document.querySelector('.categories-time__minutes__content');
    const secondsElement2 = document.querySelector('.categories-time__seconds__content');

    countdown(time_future1, day1, hour1, minute1, second1);
    countdown(time_future2, daysElement2, hoursElement2, minutesElement2, secondsElement2);
})