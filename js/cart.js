// Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let checkoutItems = document.getElementById("checkoutItems");
    let checkoutTotal = document.getElementById("checkoutTotal");

    let total = 0;
    cart.forEach(item => {
      total += parseFloat(item.price);
      checkoutItems.innerHTML += `
        <li class="list-group-item">${item.name} - $${item.price}</li>
      `;
    });

    checkoutTotal.textContent = total.toFixed(2);