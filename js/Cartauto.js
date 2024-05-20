document.addEventListener('DOMContentLoaded', function() {
    const cartTable = document.querySelector('#cart-table tbody');

    if (cartTable) {
        loadCartItems();
    }

    function loadCartItems() {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.forEach(item => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td style="display: flex; justify-content: center; align-items: center;">
                    <img src="${item.image}" alt="${item.name}" style="width: 50px; height: auto;">
                    ${item.name}
                </td>
                <td><div class="item__describe-price__new">$${item.price.toFixed(2)}</div></td>
                <td><input type="number" value="${item.quantity}" min="1" class="quantity-input"></td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
                <td><button class="remove">Xóa</button></td>
            `;

            cartTable.appendChild(newRow);

            newRow.querySelector('.quantity-input').addEventListener('change', function() {
                updateProductQuantity(item.name, this.value);
            });

            newRow.querySelector('.remove').addEventListener('click', function() {
                removeProductFromCart(item.name);
                newRow.remove();
                updateCartTotal();
            });
        });

        updateCartTotal();
    }

    function updateProductQuantity(productName, quantity) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const product = cartItems.find(item => item.name === productName);
        if (product) {
            product.quantity = parseInt(quantity);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
        updateCartTotal();
    }

    function removeProductFromCart(productName) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems = cartItems.filter(item => item.name !== productName);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartTotal();
    }

    function updateCartTotal() {
        const cartRows = document.querySelectorAll('#cart-table tbody tr');
        let subtotal = 0;
        cartRows.forEach(function(row) {
            const priceElement = row.querySelector('.item__describe-price__new');
            const quantityElement = row.querySelector('.quantity-input');
            const price = parseFloat(priceElement.innerText.replace('$', ''));
            const quantity = quantityElement.value;
            const rowSubtotal = price * quantity;
            row.querySelector('td:nth-child(4)').innerText = `$${rowSubtotal.toFixed(2)}`;
            subtotal += rowSubtotal;
        });

        const total = subtotal;
        document.getElementById('cart-subtotal').innerText = `$${subtotal.toFixed(2)}`;
        document.getElementById('cart-total').innerText = `$${total.toFixed(2)}`;
    }
});
