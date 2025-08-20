fetch("./data/apiPlants.json")
  .then(res => res.json())
  .then(data => {
    const contents = document.getElementById("contents");
    const searchInput = document.getElementById("searchInput");
    const carousel = document.getElementById("carouselExampleControlsNoTouching");
    // function to render plants
    const renderPlants =(plants)=> {
      let output = "";
      plants.forEach(val => {
        output += `
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm m-auto">
              
              <div class="d-flex justify-content-between align-items-center" ">
                <h5><span class="badge text-bg-success text-center">${val.decorate}</span></h5>
                <h5><span class="badge bg-danger">$ ${val.price}</span></h5>
              </div>

              <img src="${val.image}" class="card-img-top" alt="${val.id}">

              <div class="card-body bg-secondary-subtle">
                <h5 class="card-title text-decoration-underline">${val.name}</h5>
                <p class="card-text">
                  <strong>Type:</strong> ${val.type} <br>
                  <strong>Origin:</strong> ${val.origins} <br>
                </p>
              </div>

              <div class="card-footer text-center bg-white">
                <span class="btn btn-success" onclick='addToCart(${JSON.stringify(val)})'>
                🪴 Add to Cart</span>
              </div>
            </div>
          </div>
        `;
      });
      contents.innerHTML = output;
    }
    
    // initial render
    renderPlants(data);
    // search filter
    searchInput.addEventListener("keyup", () => {
      let query = searchInput.value.toLowerCase();
      let filtered = data.filter(val =>
        val.name.toLowerCase().includes(query) ||
        val.type.toLowerCase().includes(query)
      );
    renderPlants(filtered);

    // Carousel disapear after search
    if (query.trim() !== "") {
        carousel.style.display = "none";
      } else {
        carousel.style.display = "block"; // show again if search is cleared
    }
    });
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
    
  })
  

.catch(err => console.error("Error loading JSON:", err));