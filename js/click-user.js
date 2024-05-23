document.addEventListener('DOMContentLoaded', () => {
    const userContainer = document.querySelector('.user-container');
    const userSettingForm = document.querySelector('.user-setting-form');
    const backButton = document.getElementById('backButton');
    const back_homepage = document.getElementById('back_homepage');

    userContainer.addEventListener('click', (event) => {
        event.stopPropagation();
        userSettingForm.style.display = userSettingForm.style.display === 'flex' ? 'none' : 'flex';
    });

    document.addEventListener('click', (event) => {
        if (!userContainer.contains(event.target)) {
            userSettingForm.style.display = 'none';
        }
    });

    // backButton.addEventListener('click', () => {
    //     window.history.back();
    // });

    back_homepage.addEventListener('click', () => {
        window.location.href = '../html/homepage.html';
    });
});  




    
// categories

    document.addEventListener('DOMContentLoaded', () => {
        const items = document.querySelectorAll('.classification-block__item--active');
        const arrowLeft = document.querySelector('.arrow__left__categor');
        const arrowRight = document.querySelector('.arrow__right__category');
    
        // Xác định phần tử đầu tiên và thêm lớp 'selected' mặc định
        items[0].classList.add('selected');
    
        // Sự kiện click vào mỗi mục
        items.forEach((item, index) => {
            item.addEventListener('click', () => {
                // Xóa lớp 'selected' khỏi tất cả các mục
                items.forEach(i => i.classList.remove('selected'));
                
                // Thêm lớp 'selected' vào mục được nhấn
                item.classList.add('selected');
            });
        });
    
        // Sự kiện click vào nút arrow-left
        arrowLeft.addEventListener('click', () => {
            const current = document.querySelector('.classification-block__item--active.selected');
            current.classList.remove('selected');
            
            // Tìm phần tử trước đó và thêm lớp 'selected'
            const previous = current.previousElementSibling || items[items.length - 1];
            previous.classList.add('selected');
        });
    
        // Sự kiện click vào nút arrow-right
        arrowRight.addEventListener('click', () => {
            const current = document.querySelector('.classification-block__item--active.selected');
            current.classList.remove('selected');
            
            // Tìm phần tử kế tiếp và thêm lớp 'selected'
            const next = current.nextElementSibling || items[0];
            next.classList.add('selected');
        });
    });


    //slideshow

    document.addEventListener('DOMContentLoaded', () => {

        function createSlideshow(containerSelector, itemSelector, arrowLeftSelector, arrowRightSelector, autoSlideDuration = 2000, resetSlideDuration = 2000) {
            const blockItems = document.querySelector(containerSelector);
            const items = Array.from(document.querySelectorAll(itemSelector));
            const itemWidth = items[0].offsetWidth + 30;
            const arrowLeft = document.querySelector(arrowLeftSelector);
            const arrowRight = document.querySelector(arrowRightSelector);
            
            // Clone items for seamless looping
            items.forEach(item => {
                const clone = item.cloneNode(true);
                blockItems.appendChild(clone);
            });
            
            let currentPosition = 0;
            let autoSlideInterval;
            let isTransitioning = false;
            
            function moveToNextItem() {
                if (isTransitioning) return;
                isTransitioning = true;
        
                currentPosition += itemWidth;
                blockItems.style.transition = 'transform 0.5s ease-in-out';
                blockItems.style.transform = `translateX(-${currentPosition}px)`;
        
                if (currentPosition >= itemWidth * items.length) {
                    setTimeout(() => {
                        blockItems.style.transition = 'none';
                        blockItems.style.transform = 'translateX(0)';
                        currentPosition = 0;
                        isTransitioning = false;
                    }, 500);
                } else {
                    setTimeout(() => {
                        isTransitioning = false;
                    }, 500);
                }
            }
        
            function moveToPreviousItem() {
                if (isTransitioning) return;
                isTransitioning = true;
        
                if (currentPosition === 0) {
                    currentPosition = itemWidth * items.length;
                    blockItems.style.transition = 'none';
                    blockItems.style.transform = `translateX(-${currentPosition}px)`;
                }
        
                setTimeout(() => {
                    currentPosition -= itemWidth;
                    blockItems.style.transition = 'transform 0.5s ease-in-out';
                    blockItems.style.transform = `translateX(-${currentPosition}px)`;
                    setTimeout(() => {
                        isTransitioning = false;
                    }, 500);
                }, 20);
            }
        
            function startAutoSlide() {
                autoSlideInterval = setInterval(moveToNextItem, autoSlideDuration);
            }
        
            function stopAutoSlide() {
                clearInterval(autoSlideInterval);
                setTimeout(startAutoSlide, resetSlideDuration);
            }
        
            arrowRight.addEventListener('click', () => {
                moveToNextItem();
                stopAutoSlide();
            });
        
            arrowLeft.addEventListener('click', () => {
                moveToPreviousItem();
                stopAutoSlide();
            });
        
            startAutoSlide();
        }
    
        // Create the first slideshow
        createSlideshow('.block-items__loop', '.block-item__loop', '.arrow__left', '.arrow__right');
    
        // Create the second slideshow
        createSlideshow('.block-items__ourproducts', '.block-item__loop-clone', '.arrow__left-clone', '.arrow__right-clone');
    });
    