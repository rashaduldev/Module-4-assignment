// Retrieve elements from the HTML
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const clearCartButton = document.querySelector('.clear-cart');
const cartItemsElement = document.getElementById('cart-items');
const totalElement = document.getElementById('total');

// Initialize cart items array and total amount
let cartItems = [];
let total = 0;

// Add event listeners to "Add to Cart" buttons
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const product = {
            name: `Product ${index + 1}`,
            price: index === 0 ? 10 : 15
        };

        // Add product to cart
        cartItems.push(product);
        total += product.price;

        // Update the cart display
        updateCartDisplay();
    });
});

// Add event listener to "Clear Cart" button
clearCartButton.addEventListener('click', () => {
    // Clear cart items and total amount
    cartItems = [];
    total = 0;

    // Update the cart display
    updateCartDisplay();
});

// Function to update the cart display
function updateCartDisplay() {
    // Clear the cart items element
    cartItemsElement.innerHTML = '';

    // Add each cart item to the cart items element
    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(itemElement);
    });

    // Update the total amount element
    totalElement.textContent = `Total: $${total}`;
}
