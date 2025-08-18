fetch("./data/apiPlants.json")   // ✅ correct relative path
  .then(res => res.json())
  .then(data => {
    let contents = document.getElementById("contents");
    let output = "";

    data.forEach(val => {
      output += `
        <div class="col-md-4 mb-5">
          
          <div class="card h-100 shadow-sm m-auto">
              <div class="d-flex justify-content-between align-items-center">
              <h5><span class="badge text-bg-success text-center">${val.decorate}</span></h2>
              <h5><span class="badge bg-danger">$ ${val.price}</span></h5>
            </div>
            <img src="${val.image}" class="card-img-top " alt>
            
            <div class="card-body bg-secondary-subtle">
              <h5 class="card-title text-decoration-underline">${val.name}</h5>
              <p class="card-text">
                <strong>Type:</strong> ${val.type} <br>
                <strong>Origin:</strong> ${val.origins} <br>
              </p>
            </div>
            <div class="card-footer text-center bg-white">            
              <span class="btn btn-success">🌱 Add to Cart</span>
            </div>
          </div>
          
        </div>
      `;
    });

    contents.innerHTML = output;
  })
  .catch(err => console.error("Error loading JSON:", err));
