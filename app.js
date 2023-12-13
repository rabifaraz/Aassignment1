const data_all = [
    {
      id: 4,
      title: "newTitle",
      price: 205,
      description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      image_url: "https://i.imgur.com/R2PN9Wq.jpeg"
    },
    {
      id: 7,
      title: "Ergonomic Wooden Tuna",
      price: 743,
      description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      image_url: "https://i.imgur.com/mp3rUty.jpeg"
    },
    {
      id: 9,
      title: "Electronic Bronze Chips",
      price: 808,
      description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      image_url: "https://i.imgur.com/R3iobJA.jpeg"
    },
    {
      id: 11,
      title: "Awesome Bronze Car",
      price: 382,
      description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      image_url: "https://i.imgur.com/cBuLvBi.jpeg",
    },
    {
      id: 12,
      title: "Recycled Rubber Cheese",
      price: 30,
      description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      image_url: "https://i.imgur.com/KeqG6r4.jpeg",
    }
  ];
  
  const container = document.getElementById('container');

  function display() {
    container.innerHTML = ''; // Clear previous content
  

    // Traditional for loop method 1.....
    // ================================================
    
    for (var index = 0; index < data_all.length; index++) {
        var item = data_all[index];
      
        // Delay each card by 0.1 seconds multiplied by its index
        setTimeout(function (item) {
          return function() {
            var card = `
              <div class="card" style="width: 18rem; margin-right: 15px;">
                <img src="${item.image_url}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <p class="card-text">${item.description}</p>
                  <h4 class="card-price">Rs: ${item.price}/.</h4>
                  <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            `;
            container.innerHTML += card;
          };
        }(item), 100 * index); // 0.1 seconds delay for each card
      }


    // foreach loop method 2.....
    // ================================================

    // data_all.forEach((item, index) => {
    //   // Delay each card by 0.1 seconds multiplied by its index
    //   setTimeout(() => {
    //     const card = `
    //       <div class="card" style="width: 18rem; margin-right: 15px;">
    //         <img src="${item.image_url}" class="card-img-top" alt="..." />
    //         <div class="card-body">
    //           <h5 class="card-title">${item.title}</h5>
    //           <p class="card-text">${item.description}</p>
    //           <h4 class="card-price">Rs: ${item.price}/.</h4>
    //           <a href="#" class="btn btn-primary">Buy Now</a>
    //         </div>
    //       </div>
    //     `;
    //     container.innerHTML += card;
    //   }, 100 * index); // 0.1 seconds delay for each card
    // });
  }
  
  display();
  