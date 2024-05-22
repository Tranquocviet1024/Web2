document.addEventListener('DOMContentLoaded', function() {

    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            const product = button.closest('.block-item');
            const productName = product.querySelector('.item__desbribe-name').innerText;
            const productNewPrice = product.querySelector('.item__describe-price__new').innerText.replace('$', '');
            const productImage = product.querySelector('.item-bg__contain-pic img').src;

            // Thêm sản phẩm vào bộ nhớ cục bộ
            addProductToLocalStorage(productImage, productName, productNewPrice);
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
        alert('Sản phẩm đã được thêm vào giỏ hàng');
    }
});