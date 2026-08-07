/* ==========================================================================
   KANAN SWEETS - INTERACTIVE FRONTEND LOGIC & WHATSAPP ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. PRODUCTS DATASET
  // ------------------------------------------------------------------------
  const products = [
    {
      id: 'thali-01',
      name: 'Traditional Bengali Mishti Thali',
      category: 'sweets',
      price: '₹450',
      unit: 'Special Royal Assorted Box',
      badge: 'Chef Signature',
      badgeClass: 'badge-bestseller',
      image: 'images/hero_sweets.png',
      description: 'Royal platter presentation featuring Sponge Rasgulla, Nolen Gur Sandesh, Rasmalai, Gulab Jamun, and Kheer Kadam.'
    },
    {
      id: 'rasgulla-02',
      name: 'Spongy Bengali Rasgulla',
      category: 'sweets',
      price: '₹220',
      unit: 'per kg (approx 20 pcs)',
      badge: 'Bestseller',
      badgeClass: 'badge-bestseller',
      image: 'images/rasgulla.png',
      description: 'Melt-in-mouth traditional Bengali Rasgulla prepared fresh daily from 100% pure chhana in light sugar syrup.'
    },
    {
      id: 'sandesh-03',
      name: 'Nolen Gur Kacha Golla Sandesh',
      category: 'sweets',
      price: '₹380',
      unit: 'per kg',
      badge: 'Seasonal Special',
      badgeClass: 'badge-bestseller',
      image: 'images/sandesh.png',
      description: 'Authentic Date Palm Jaggery (Nolen Gur) Sandesh crafted with delicate traditional Bengali craftsmanship.'
    },
    {
      id: 'rasmalai-04',
      name: 'Saffron Pistachio Rasmalai',
      category: 'sweets',
      price: '₹350',
      unit: 'per kg (approx 12 pcs)',
      badge: 'Fresh Daily',
      badgeClass: 'badge-fresh',
      image: 'images/rasmalai.png',
      description: 'Soft chhana discs soaked in rich, cardamom-infused saffron milk and crowned with Iranian pistachios.'
    },
    {
      id: 'mishti-doi-05',
      name: 'Heritage Traditional Mishti Doi',
      category: 'sweets',
      price: '₹180',
      unit: 'per Matka (500g)',
      badge: 'Authentic Matka',
      badgeClass: 'badge-fresh',
      image: 'images/mishti_doi.png',
      description: 'Classic caramelized Bengali sweet curd set perfectly in porous clay pots for an authentic traditional flavor.'
    },
    {
      id: 'cham-cham-06',
      name: 'Malai Cham Cham',
      category: 'sweets',
      price: '₹260',
      unit: 'per kg',
      badge: 'Chef Special',
      badgeClass: 'badge-bestseller',
      image: 'images/cham_cham.png',
      description: 'Cylindrical cottage cheese sweets layered with thick rabri and garnished with mawa sprinkles.'
    },
    {
      id: 'gulab-jamun-07',
      name: 'Shahi Gulab Jamun',
      category: 'sweets',
      price: '₹240',
      unit: 'per kg',
      badge: 'Warm & Fresh',
      badgeClass: 'badge-fresh',
      image: 'images/gulab_jamun.png',
      description: 'Golden fried mawa dumplings soaked in aromatic rose and cardamom scented sugar syrup.'
    },
    {
      id: 'kalakand-08',
      name: 'Pista Milk Kalakand',
      category: 'sweets',
      price: '₹420',
      unit: 'per kg',
      badge: 'Pure Milk',
      badgeClass: 'badge-fresh',
      image: 'images/kalakand.png',
      description: 'Grainy cottage cheese square sweet simmered in sweetened milk and topped with Iranian pistachios.'
    },
    {
      id: 'motichoor-09',
      name: 'Desi Ghee Motichoor Laddu',
      category: 'sweets',
      price: '₹280',
      unit: 'per kg',
      badge: 'Pure Ghee',
      badgeClass: 'badge-bestseller',
      image: 'images/motichoor_laddu.png',
      description: 'Tiny gram flour pearls fried in 100% pure cow ghee, soaked in saffron syrup with melon seeds.'
    },
    {
      id: 'cake-truffle-10',
      name: 'Royal Multi-Tier Designer Cake',
      category: 'cakes',
      price: '₹550',
      unit: 'per Pound (1 lb)',
      badge: '100% Eggless',
      badgeClass: 'badge-eggless',
      image: 'images/luxury_cakes.png',
      description: 'Decadent dark chocolate ganache layers, edible gold leaf accent, topped with fresh dark chocolate curls.'
    },
    {
      id: 'kulfi-matka-11',
      name: 'Artisanal Matka Kulfi & Sundaes',
      category: 'icecream',
      price: '₹80',
      unit: 'per Matka Cup',
      badge: 'Pistachio Saffron',
      badgeClass: 'badge-fresh',
      image: 'images/ice_cream_parlour.png',
      description: 'Slow-cooked dense milk ice cream infused with real saffron strands, crushed almonds, and cardamom.'
    },
    {
      id: 'hamper-puja-12',
      name: 'Durga Puja Royal Gift Hamper',
      category: 'hampers',
      price: '₹1,250',
      unit: 'Luxury Gift Box',
      badge: 'Festive Box',
      badgeClass: 'badge-bestseller',
      image: 'images/festival_hampers.png',
      description: 'Premium gift hamper containing Kaju Katli, Nolen Gur Sandesh, Dry Fruits, Kheer Kadam, and festive packaging.'
    },
    {
      id: 'wedding-tattwa-13',
      name: 'Bengali Wedding Sweets & Tattwa Box',
      category: 'hampers',
      price: '₹1,850',
      unit: 'Custom Wedding Tattwa',
      badge: 'Wedding Special',
      badgeClass: 'badge-bestseller',
      image: 'images/wedding_catering.png',
      description: 'Decorated brass platter box filled with premium Sandesh, Kaju Katli, Mishti Doi matkas, and wedding tattwa decoration.'
    }
  ];

  // ------------------------------------------------------------------------
  // 2. RENDER DIGITAL MENU & FILTER LOGIC
  // ------------------------------------------------------------------------
  const menuGrid = document.getElementById('menu-grid');
  const searchInput = document.getElementById('menu-search');
  const filterBtns = document.querySelectorAll('.filter-btn');

  let currentCategory = 'all';

  function renderMenu(items) {
    if (!menuGrid) return;
    
    if (items.length === 0) {
      menuGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
          <i class="fa-solid fa-cookie-bite" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
          <h3>No Sweet Found</h3>
          <p style="color: var(--text-muted);">Try searching for another sweet, cake flavor, or festival item.</p>
        </div>
      `;
      return;
    }

    menuGrid.innerHTML = items.map(product => `
      <div class="product-card" data-category="${product.category}">
        <div class="product-img-box">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <div class="product-badge-overlay">
            <span class="badge ${product.badgeClass}">${product.badge}</span>
          </div>
        </div>
        <div class="product-info">
          <span class="product-category">${product.category.toUpperCase()}</span>
          <h3 class="product-title">${product.name}</h3>
          <p class="product-desc">${product.description}</p>
          <div class="product-footer">
            <div class="product-price"><i class="fa-solid fa-indian-rupee-sign" style="font-size: 1.1rem; color: var(--primary);"></i> ${product.price.replace('₹', '')} <span>/${product.unit}</span></div>
            <button class="btn btn-primary" onclick="openPreOrderModal('${product.name.replace(/'/g, "\\'")}', '${product.category}')">
              <i class="fa-solid fa-cart-shopping"></i> Pre-Order
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  function filterProducts() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const filtered = products.filter(item => {
      const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchTerm) || 
                            item.description.toLowerCase().includes(searchTerm) ||
                            item.category.toLowerCase().includes(searchTerm);
      return matchesCategory && matchesSearch;
    });
    renderMenu(filtered);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.filter;
      filterProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', filterProducts);
  }

  // Initial menu render
  renderMenu(products);

  // ------------------------------------------------------------------------
  // 3. PRE-ORDER MODAL & WHATSAPP GENERATOR
  // ------------------------------------------------------------------------
  const modalOverlay = document.getElementById('preorder-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const preorderForm = document.getElementById('preorder-form');

  window.openPreOrderModal = function(productName = '', category = '') {
    if (!modalOverlay) return;
    modalOverlay.classList.add('active');
    
    if (productName && document.getElementById('order-product')) {
      document.getElementById('order-product').value = productName;
    }
    if (category && document.getElementById('order-category')) {
      document.getElementById('order-category').value = category;
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  if (preorderForm) {
    preorderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('cust-name').value.trim();
      const phone = document.getElementById('cust-phone').value.trim();
      const category = document.getElementById('order-category').value;
      const product = document.getElementById('order-product').value.trim();
      const qty = document.getElementById('order-qty').value;
      const date = document.getElementById('order-date').value;
      const time = document.getElementById('order-time').value;
      const cakeMessage = document.getElementById('order-cake-msg')?.value.trim() || 'N/A';
      const specialNotes = document.getElementById('order-notes')?.value.trim() || 'None';

      const whatsappText = 
`*📢 NEW ORDER REQUEST - KANAN SWEETS*
---------------------------------------
👤 *Customer Name:* ${name}
📞 *Phone:* ${phone}
🏷️ *Category:* ${category.toUpperCase()}
🍰 *Item Requested:* ${product}
⚖️ *Quantity:* ${qty}
📅 *Preferred Date:* ${date}
⏰ *Pickup/Delivery Time:* ${time}
✍️ *Cake Custom Message:* ${cakeMessage}
📝 *Special Instructions:* ${specialNotes}
---------------------------------------
_Sent via Kanan Sweets Official Website_`;

      const encodedMsg = encodeURIComponent(whatsappText);
      const whatsappUrl = `https://wa.me/919800012345?text=${encodedMsg}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');

      // Close modal & reset
      modalOverlay.classList.remove('active');
      alert(`Thank you ${name}! Your pre-order has been forwarded to WhatsApp for instant confirmation.`);
      preorderForm.reset();
    });
  }

  // ------------------------------------------------------------------------
  // 4. FESTIVAL COUNTDOWN TIMER
  // ------------------------------------------------------------------------
  const timerDays = document.getElementById('timer-days');
  const timerHours = document.getElementById('timer-hours');
  const timerMins = document.getElementById('timer-mins');
  const timerSecs = document.getElementById('timer-secs');

  if (timerDays && timerHours && timerMins && timerSecs) {
    // Set target festival date (4 days from current time)
    const targetDate = new Date().getTime() + (4 * 24 * 60 * 60 * 1000);

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        timerDays.innerText = '00';
        timerHours.innerText = '00';
        timerMins.innerText = '00';
        timerSecs.innerText = '00';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timerDays.innerText = String(days).padStart(2, '0');
      timerHours.innerText = String(hours).padStart(2, '0');
      timerMins.innerText = String(minutes).padStart(2, '0');
      timerSecs.innerText = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // ------------------------------------------------------------------------
  // 5. FAQ ACCORDION TOGGLE
  // ------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other FAQs
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const answer = otherItem.querySelector('.faq-answer');
        if (answer) answer.style.maxHeight = null;
      });

      // Toggle clicked FAQ
      if (!isActive) {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        if (answer) answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // ------------------------------------------------------------------------
  // 6. DARK MODE TOGGLE LOGIC
  // ------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('kanan_theme') || 'light';

  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('kanan_theme', 'light');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('kanan_theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
      }
    });
  }

  // ------------------------------------------------------------------------
  // 7. MOBILE MENU TOGGLE
  // ------------------------------------------------------------------------
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileNavToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.className = 'fa-solid fa-xmark';
        } else {
          icon.className = 'fa-solid fa-bars';
        }
      }
    });
  }

  // ------------------------------------------------------------------------
  // 8. LIGHTBOX GALLERY LOGIC
  // ------------------------------------------------------------------------
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-title')?.innerText || 'Kanan Sweets Showcase';
      if (!img) return;

      const lightboxOverlay = document.createElement('div');
      lightboxOverlay.className = 'modal-overlay active';
      lightboxOverlay.style.zIndex = '3000';
      lightboxOverlay.innerHTML = `
        <div style="position: relative; max-width: 90%; max-height: 90vh;">
          <img src="${img.src}" alt="${title}" style="border-radius: 16px; border: 4px solid #fff; max-height: 80vh; width: auto; object-fit: contain;">
          <div style="color: #fff; text-align: center; margin-top: 1rem; font-family: var(--font-heading); font-size: 1.25rem;">${title}</div>
          <button style="position: absolute; top: -15px; right: -15px; width: 40px; height: 40px; border-radius: 50%; background: #D62828; color: #fff; font-size: 1.2rem; cursor: pointer;">✕</button>
        </div>
      `;
      document.body.appendChild(lightboxOverlay);

      lightboxOverlay.addEventListener('click', () => {
        lightboxOverlay.remove();
      });
    });
  });
});
