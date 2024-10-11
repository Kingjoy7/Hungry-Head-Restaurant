document.addEventListener("DOMContentLoaded", function () {
    const menuList = document.getElementById("menu-list");
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout");

    let cart = [];

    menuList.addEventListener("click", function (event) {
        if (event.target.classList.contains("add-to-cart")) {
            const menuItem = event.target.parentElement.querySelector(".menu-item").textContent;
            const menuPrice = parseFloat(event.target.parentElement.querySelector(".menu-price").textContent.replace("₹", ""));
            
            cart.push({ item: menuItem, price: menuPrice });
            updateCart();
        }
    });

    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;

        cart.forEach((item) => {
            const cartItem = document.createElement("li");
            cartItem.textContent = `${item.item} - ₹${item.price.toFixed(2)}`;
            cartList.appendChild(cartItem);
            total += item.price;
        });

        cartTotal.textContent = `₹${total.toFixed(2)}`;
    }

    checkoutButton.addEventListener("click", function () {
        alert(`Your total bill is: ${cartTotal.textContent}`);
    });
});