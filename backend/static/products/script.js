// DOM Elements
const navItems = document.querySelectorAll(".nav-item")
const pages = document.querySelectorAll(".page")
const categoryBtns = document.querySelectorAll(".category-btn")
const checkoutBtn = document.querySelector(".checkout-btn")

// Navigation Handling
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((navItem) => {
    item.classList.remove("active")
      if (navItem === item) {
        navItem.classList.add("active")
      }
    })
  })
})


// Category Buttons Handling
categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all category buttons
    categoryBtns.forEach((catBtn) => catBtn.classList.remove("active"))

    // Add active class to clicked category button
    btn.classList.add("active")
  })
})

document.addEventListener('DOMContentLoaded', () => {
    // Order tabs handling
    const orderTabs = document.querySelectorAll('.order-tab');
    const orderContents = document.querySelectorAll('.order-tab-content');

    orderTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            
            // Update active states
            orderTabs.forEach(t => t.classList.remove('active'));
            orderContents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(`${targetTab}-orders`).classList.add('active');
        });
    });

    // Quantity buttons handling
    const quantityBtns = document.querySelectorAll('.quantity-btn');
    quantityBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const isDecrease = btn.classList.contains('decrease');
            const quantityElement = btn.parentElement.querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent);
            
            if (isDecrease && quantity > 1) {
                quantity--;
            } else if (!isDecrease) {
                quantity++;
            }
            
            quantityElement.textContent = quantity;
            updateCart();
        });
    });

    // Add button handling
    const addBtns = document.querySelectorAll('.add-btn');
    addBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const itemControls = btn.parentElement;
            itemControls.innerHTML = `
                <button class="quantity-btn decrease">
                    <i class="fas fa-minus"></i>
                </button>
                <span class="quantity">1</span>
                <button class="quantity-btn increase">
                    <i class="fas fa-plus"></i>
                </button>
            `;
            
            // Add event listeners to new buttons
            const newBtns = itemControls.querySelectorAll('.quantity-btn');
            newBtns.forEach(newBtn => {
                newBtn.addEventListener('click', () => {
                    const isDecrease = newBtn.classList.contains('decrease');
                    const quantityElement = newBtn.parentElement.querySelector('.quantity');
                    let quantity = parseInt(quantityElement.textContent);
                    
                    if (isDecrease && quantity > 1) {
                        quantity--;
                    } else if (!isDecrease) {
                        quantity++;
                    }
                    
                    quantityElement.textContent = quantity;
                    updateCart();
                });
            });
            
            updateCart();
        });
    });

    // Cart update function
    function updateCart() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            let totalItems = 0;
            const quantities = document.querySelectorAll('.menu-item .quantity');
            quantities.forEach(q => {
                totalItems += parseInt(q.textContent || '0');
            });
            
            cartCount.textContent = totalItems;
        }
    }

    // Initialize cart count
    updateCart();

    // Add smooth scrolling for iOS
    if (navigator.userAgent.match(/(iPhone|iPad|iPod)/i)) {
        document.documentElement.style.cssText = 'scroll-behavior: auto !important';
    }
});

// Checkout Button Handling
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    alert("Proceeding to checkout!")
    // Here you would typically redirect to a checkout page
  })
}

// Initialize the app
function init() {
  // Set the first page as active (Menu)
  pages[0].classList.add("active")
}

// Run initialization
init()

// Modalni ochish funksiyasi
function openModal(name, price, description, imgSrc) {
    document.getElementById('modalTitle').textContent = name;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('productModal').style.display = 'flex';
}

// Modalni yopish funksiyasi
function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Modaldan tashqariga bosilganda yopish
window.onclick = function(event) {
    if (event.target == document.getElementById('productModal')) {
        closeModal();
    }
}

// Zakas berilganda ishlaydi
function submitOrder() {
    const comment = document.getElementById('orderComment').value.trim();
    if (comment !== '') {
        alert('Order placed with comment: ' + comment);
    } else {
        alert('Order placed without comment.');
    }
}
