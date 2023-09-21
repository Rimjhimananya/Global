let searchForm = document.querySelector('.search-form');
// when click on search symbol the search box will appear otherwise will go 
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

let shoppingCart= document.querySelector('.shopping-cart');
// when click on search symbol the search box will appear otherwise will go 
document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

let loginForm= document.querySelector('.login-form');
// when click on search symbol the search box will appear otherwise will go 
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navBar.classList.remove('active');
}

let navBar= document.querySelector('.navbar');
// when click on search symbol the search box will appear otherwise will go 
document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
   
}
window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
    },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
    },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });

  // Function to add an item to the local storage
function addItemToLocalStorage(itemName, price, image) {
    // Check if local storage already has items
    let items = JSON.parse(localStorage.getItem('items')) || [];
  
    // Create a new item object
    const newItem = {
      itemName: itemName,
      price: price,
      image: image,
    };
  
    // Add the new item to the array
    items.push(newItem);


  
    // Store the updated array back in local storage
    localStorage.setItem('items', JSON.stringify(items) );
    // Call the function to render items from local storage
    renderItemsFromLocalStorage();
  }



  

  function renderItemsFromLocalStorage() {
    // Get the items from local storage
    const items = JSON.parse(localStorage.getItem('items')) || [];

    // Get the container where items will be rendered
    const itemContainer = document.getElementById('itemContainer');

    // Loop through the items and render them
    items.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('box');

        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas', 'fa-trash');
        deleteIcon.onclick = function() {
            // Remove the item from the array and update local storage
            items.splice(index, 1);
            localStorage.setItem('items', JSON.stringify(items));

            // Remove the item's HTML representation from the page
            div.remove();
        };

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.itemName;
        img.style.width = '40%';

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        const itemName = document.createElement('h3');
        itemName.textContent = item.itemName;

        const price = document.createElement('span');
        price.classList.add('price');
        price.textContent = `$${item.price}/-`;

        contentDiv.appendChild(itemName);
        contentDiv.appendChild(price);

        div.appendChild(deleteIcon);
        div.appendChild(img);
        div.appendChild(contentDiv);

        itemContainer.appendChild(div);
    });
}

// Call the function to render items from local storage
renderItemsFromLocalStorage();

  
 


// Function to remove an item from local storage by item name
function removeItemByNameFromLocalStorage(itemName) {
    // Get the items from local storage
    let items = JSON.parse(localStorage.getItem('items')) || [];
  
    // Find the index of the item with the specified item name
    const indexToRemove = items.findIndex(item => item.itemName === itemName);
  
    // Check if the item with the specified name exists
    if (indexToRemove !== -1) {
      // Remove the item from the array by index
      items.splice(indexToRemove, 1);
  
      // Store the updated array back in local storage
      localStorage.setItem('items', JSON.stringify(items));
    }
  }
  
  // Example usage:
  // To remove an item by its name, call removeItemByNameFromLocalStorage('ItemName');
  
  

  function calculateTotalPrice() {
    // Get the items from local storage
    const items = JSON.parse(localStorage.getItem('items')) || [];
  
    // Initialize the total price to 0
    let totalPrice = 0;
  
    // Iterate through the items and sum their prices
    for (const item of items) {
      // Extract the numeric part of the price string and convert it to a number
      const priceNumeric = parseFloat(item.price.replace('$', ''));
  
      // Check if the conversion was successful (not NaN)
      if (!isNaN(priceNumeric)) {
        totalPrice += priceNumeric;
      }
    }
    let  total = document.getElementById("total");
    total.innerHTML = totalPrice


  }
  calculateTotalPrice();
