fetch("./data/apiPlants.json")
  .then(res => res.json())
  .then(data => {
   let cart = [];

   // function to render cart
   function renderCart() {
   let cartItems = document.getElementById("cartItems");
   let cartTotal = document.getElementById("cartTotal");

   cartItems.innerHTML = "";
   let total = 0;

   cart.forEach((item, index) => {
      total += item.price;

      cartItems.innerHTML += `
         <li class="list-group-item d-flex justify-content-between align-items-center">
         ${item.name} - $${item.price}
         <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">❌</button>
         </li>
      `;
   });

   cartTotal.textContent = total.toFixed(2);
   }

   // function to add plant
   function addToCart(plant) {
   cart.push(plant);
   renderCart();
   }

   // function to remove plant
   function removeFromCart(index) 
   {
      cart.splice(index, 1);
      renderCart();
   }
   
   })
  

.catch(err => console.error("Error loading JSON:", err));