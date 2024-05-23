




document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let clickCount = 0;
    const clickLimit = 5;
    const timeLimit = 2000; // 2 seconds

    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            if (clickCount >= clickLimit) {
                showToast('Warning', 'Vui lòng thao tác chậm lại!', 'error');
                return;
            }

            clickCount++;
            setTimeout(() => {
                clickCount--;
            }, timeLimit);

            const product = button.closest('.block-item, .block-item__loop, .block-item__loop-clone, .block-item__jfu');
            const productName = product.querySelector('.item__desbribe-name').innerText;
            const productNewPrice = product.querySelector('.item__describe-price__new').innerText.replace('$', '');
            const productImage = product.querySelector('.item-bg__contain-pic img').src;

            // Thêm sản phẩm vào bộ nhớ cục bộ
            addProductToLocalStorage(productImage, productName, productNewPrice);

            // Hiển thị thông báo Toast
            showToast('Success', 'Sản phẩm đã được thêm vào giỏ hàng', 'success');
        });
    });

    function addProductToLocalStorage(productImage, productName, productNewPrice) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
        const existingProduct = cartItems.find(item => item.name === productName);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cartItems.push({ image: productImage, name: productName, price: parseFloat(productNewPrice), quantity: 1 });
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
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
});




 document.addEventListener('DOMContentLoaded', () => {
            const wishlistContainer = document.getElementById('wishlist-container');
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

            const renderWishlist = () => {
                wishlistContainer.innerHTML = '';
                wishlist.forEach((item, index) => {
                    let blockItem = document.createElement('div');
                    blockItem.classList.add('block-item');
                    blockItem.innerHTML = `
                        <div class="item-bg">
                            <div class="item-bg__contain">
                                <div class="item-bg__contain-pic">
                                    <img src="${item.imgSrc}" alt="${item.name}">
                                    <div class="item__favourite-seen">
                                        <div class="item__seen">
                                            <img src="../img/bin.png" class="delete-item-btn" alt="" data-index="${index}">
                                        </div>
                                    </div>
                                    <div class="add-to-cart">
                                        <img class="set-img-add-to-cart" src="../img/Cart1.png" alt="">
                                        <span class="set-title-add-to-cart">Add To Cart</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item__describe">
                            <div class="item__desbribe-name">${item.name}</div>
                            <div class="item__describe-price">
                                <div class="item__describe-price__new">${item.newPrice}</div>
                                <div class="item__describe-price__old">${item.oldPrice}</div>
                            </div>
                        </div>
                    `;
                    wishlistContainer.appendChild(blockItem);
                });
                attachDeleteEventHandlers();
                attachAddToCartEventHandlers();
            };

            

            const attachDeleteEventHandlers = () => {
                const deleteButtons = document.querySelectorAll('.delete-item-btn');
                deleteButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        const index = button.getAttribute('data-index');
                        wishlist.splice(index, 1);
                        localStorage.setItem('wishlist', JSON.stringify(wishlist));
                        renderWishlist();
                    });
                });
            };

            const attachAddToCartEventHandlers = () => {
                const addToCartButtons = document.querySelectorAll('.add-to-cart');
                let clickCount = 0;
                const clickLimit = 5;
                const timeLimit = 2000; // 2 seconds

                addToCartButtons.forEach(function(button) {
                    button.addEventListener('click', function(event) {
                        if (clickCount >= clickLimit) {
                            showToast('Warning', 'Vui lòng thao tác chậm lại!', 'error');
                            return;
                        }

                        clickCount++;
                        setTimeout(() => {
                            clickCount--;
                        }, timeLimit);

                        const product = button.closest('.block-item');
                        const productName = product.querySelector('.item__desbribe-name').innerText;
                        const productNewPrice = product.querySelector('.item__describe-price__new').innerText.replace('$', '');
                        const productImage = product.querySelector('.item-bg__contain-pic img').src;

                        // Thêm sản phẩm vào bộ nhớ cục bộ
                        addProductToLocalStorage(productImage, productName, productNewPrice);

                        // Hiển thị thông báo Toast
                        showToast('Success', 'Sản phẩm đã được thêm vào giỏ hàng', 'success');
                    });
                });
            };

            function addProductToLocalStorage(productImage, productName, productNewPrice) {
                let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

                // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
                const existingProduct = cartItems.find(item => item.name === productName);
                if (existingProduct) {
                    existingProduct.quantity += 1;
                } else {
                    cartItems.push({ image: productImage, name: productName, price: parseFloat(productNewPrice), quantity: 1 });
                }

                localStorage.setItem('cartItems', JSON.stringify(cartItems));
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

            renderWishlist();
        });



function addToWishlist(event, name, newPrice, oldPrice, imgSrc) {
    event.preventDefault();
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.push({ name, newPrice, oldPrice, imgSrc });
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert('them vao wishlist thanh cong!')
    showToast('Success', 'Sản phẩm đã được thêm vào giỏ hàng', 'success');

}
