let cart = [];
function addToCart(name, price) 
{
    cart.push({ name, price });
    alert(`${name} has been added to the cart.`);
}

function toggleCartBox()
 {
    const cartBox = document.getElementById("cart-box");
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceContainer = document.getElementById("total-price");
    if (cartBox.style.display === "none") {
        cartBox.style.display = "block";
        cartItemsContainer.innerHTML = "";
        let totalPrice = 0;

        cart.forEach((item, index) => 
        {
            const itemDiv = document.createElement("div");
            itemDiv.innerHTML = `<p>${item.name}: ₹${item.price}</p>`;
            cartItemsContainer.appendChild(itemDiv);
            totalPrice += item.price;
        });

        totalPriceContainer.innerHTML = `<strong>Total Price:</strong> ₹${totalPrice}`;
    } else 
    {
       
        cartBox.style.display = "none";
    }
}
function clearCart() 
{
    cart = [];
    document.getElementById("cart-items").innerHTML = "";
    document.getElementById("total-price").innerHTML = "<strong>Total Price:</strong> ₹0";
}

function checkoutCart() 
{
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Thank you for your purchase!");
        clearCart();
        toggleCartBox();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".nav-link.active button.custom-button").addEventListener("click", toggleCartBox);
    document.getElementById("clear-cart").addEventListener("click", clearCart);
    document.getElementById("int-mark").addEventListener("click", toggleCartBox);
    document.getElementById("checkout").addEventListener("click", checkoutCart);
});
