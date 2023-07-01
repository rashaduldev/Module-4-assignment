import products from './product.js';
import { addToCart, getCartItems, clearCart } from './cart.js';

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const clearCartButton = document.querySelector('.clear-cart');
const cartItemsElement = document.getElementById('cart-items');
const totalElement = document.getElementById('total');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = parseInt(button.dataset.id);
        const product = products.find(p => p.id === productId);
        addToCart(product);
        updateCartDisplay();
    });
});

clearCartButton.addEventListener('click', () => {
    clearCart();
    updateCartDisplay();
});

function updateCartDisplay() {
    cartItemsElement.innerHTML = '';
    let total = 0;

    const cartItems = getCartItems();
    cartItems.forEach(item => {
        const { product, quantity } = item;
        const itemTotal = product.price * quantity;
        total += itemTotal;

        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <p>${product.name} - Quantity: ${quantity} - Price: $${product.price} - Total: $${itemTotal}</p>
        `;
        cartItemsElement.appendChild(itemElement);
    });

    totalElement.textContent = `Total: $${total}`;
}
