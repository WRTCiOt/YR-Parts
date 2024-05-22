document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');

    const updateCartCount = () => {
        cartCount.textContent = cart.length.toString();
    };

    const addToCart = (name, price) => {
        cart.push({ name, price });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    };

    const renderCartItems = () => {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Ihr Warenkorb ist leer.</p>';
        } else {
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <div class="product-info">${item.name} - €${item.price}</div>
                    <div class="remove-item" data-name="${item.name}">&times;</div>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
        }
    };

    const removeItem = (name) => {
        cart.splice(cart.findIndex(item => item.name === name), 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCartItems();
    };

    document.querySelectorAll('.add-to-cart-button').forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            const productName = productCard.getAttribute('data-name');
            const productPrice = productCard.getAttribute('data-price');
            addToCart(productName, productPrice);
        });
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const productName = event.target.getAttribute('data-name');
            removeItem(productName);
        }
    });

    updateCartCount();
    renderCartItems();
});
