// Product Data from Link Locks Catalogue
const allProducts = [
    // Digital Locks & Smart Solutions
    { id: 1, name: 'Ultron Digital Safe', category: 'digital', price: '15,900', description: 'Premium digital safe with advanced security features and grey finish', badge: 'Premium', icon: '🔐' },
    { id: 2, name: 'Zytron Digital Safe', category: 'digital', price: '12,900', description: 'Secure digital safe with reliable locking mechanism', badge: 'Popular', icon: '🔐' },
    { id: 3, name: 'Slimtron Digital Mortise', category: 'digital', price: '22,999', description: 'Sleek digital mortise lock for main doors with modern design', badge: 'New', icon: '🔒' },
    { id: 4, name: 'Vitron Digital Mortise (Black)', category: 'digital', price: '19,500', description: 'Advanced digital mortise lock in elegant black finish', icon: '🔒' },
    { id: 5, name: 'Quantum Digital Mortise', category: 'digital', price: '15,990', description: 'Smart digital lock with multiple access modes', icon: '🔒' },
    { id: 6, name: 'Bio Touch Padlock', category: 'digital', price: '5,590', description: 'Fingerprint enabled biometric padlock', badge: 'Smart', icon: '👆' },
    { id: 7, name: 'Flexi Rim Lock', category: 'digital', price: '13,290', description: 'Flexible digital rim lock for versatile installation', icon: '🔐' },
    { id: 8, name: 'I-Bell Smart Doorbell', category: 'digital', price: '11,900', description: 'IoT enabled smart doorbell with chime', badge: 'IoT', icon: '🔔' },
    
    // Padlocks - Heavy Duty Series
    { id: 9, name: 'Atoot 65', category: 'padlocks', price: '1,029', description: 'Heavy-duty 65mm padlock with superior strength', badge: 'Popular', icon: '🔒' },
    { id: 10, name: 'Atoot 70', category: 'padlocks', price: '1,169', description: 'Extra strong 70mm padlock for maximum security', icon: '🔒' },
    { id: 11, name: 'Atoot Extra 70', category: 'padlocks', price: '1,369', description: 'Premium extra strength 70mm padlock', badge: 'Best Seller', icon: '🔒' },
    { id: 12, name: 'Atoot Advance 60mm', category: 'padlocks', price: '855', description: 'Advanced security 60mm padlock', icon: '🔒' },
    { id: 13, name: 'Hi-Tech S-67', category: 'padlocks', price: '1,599', description: 'Stainless steel hi-tech padlock 67mm', badge: 'Premium', icon: '🔐' },
    { id: 14, name: 'Hi-Tech Round 65', category: 'padlocks', price: '699', description: 'Round design hi-tech 65mm padlock', icon: '🔐' },
    { id: 15, name: 'Square 65', category: 'padlocks', price: '665', description: 'Square design 65mm padlock', icon: '🔒' },
    { id: 16, name: 'Disc Lock DL-01 70mm', category: 'padlocks', price: '910', description: 'Disc lock for enhanced security', icon: '🔒' },
    { id: 17, name: 'Disc Lock DL-01 90mm', category: 'padlocks', price: '1,575', description: 'Large 90mm disc lock for heavy-duty use', icon: '🔒' },
    { id: 18, name: 'Gravi-T 60', category: 'padlocks', price: '325', description: 'Gravity series 60mm padlock', icon: '🔒' },
    { id: 19, name: 'BISON 68', category: 'padlocks', price: '419', description: 'Bison series 68mm heavy padlock', icon: '🔒' },
    { id: 20, name: 'New Round BCP 65mm', category: 'padlocks', price: '210', description: 'Round BCP series 65mm padlock', icon: '🔒' },
    
    // Mortise Handles - Premium Collection
    { id: 21, name: 'Lilly Mortise Handle 8"', category: 'mortise', price: '5,069', description: 'Elegant 8" HT CY mortise handle', badge: 'Preset', icon: '🚪' },
    { id: 22, name: 'Lotus Mortise Handle', category: 'mortise', price: '4,769', description: 'Premium lotus design handle with BSK', icon: '🚪' },
    { id: 23, name: 'Radiant Cartier OSK', category: 'mortise', price: '4,540', description: 'Radiant series cartier handle 60mm', icon: '🚪' },
    { id: 24, name: 'Vertex ON-ROSE', category: 'mortise', price: '4,690', description: 'Modern vertex design mortise handle', icon: '🚪' },
    { id: 25, name: 'Infynia Handle', category: 'mortise', price: '3,250', description: 'Metalblend collection premium handle', icon: '🚪' },
    { id: 26, name: 'Helix Handle', category: 'mortise', price: '3,550', description: 'Modern helix design with BSK', icon: '🚪' },
    { id: 27, name: 'Vector Handle', category: 'mortise', price: '3,150', description: 'Sleek vector design mortise handle', icon: '🚪' },
    { id: 28, name: 'Prism Handle', category: 'mortise', price: '3,550', description: 'Prism metalblend collection handle', icon: '🚪' },
    { id: 29, name: 'Invincible Handle', category: 'mortise', price: '2,410', description: 'Ironclad collection invincible handle', badge: 'Durable', icon: '🚪' },
    { id: 30, name: 'Fixio Fusion Craft', category: 'mortise', price: '1,999', description: 'Fusion craft collection handle', icon: '🚪' },
    
    // Door Accessories & Hardware
    { id: 31, name: 'Voltstorm Dead Bolt', category: 'accessories', price: '4,899', description: 'Both side key dead bolt system', badge: 'Secure', icon: '🔩' },
    { id: 32, name: 'Thunderbolt Tri-Bolt', category: 'accessories', price: '3,060', description: 'Triple bolt security system OSK', icon: '⚡' },
    { id: 33, name: 'ARC 4 Ultra Keys', category: 'accessories', price: '6,499', description: 'Premium ARC series with 4 ultra keys', badge: 'Premium', icon: '🔑' },
    { id: 34, name: 'Stormbolt OSK', category: 'accessories', price: '2,550', description: 'Stormbolt security lock system', icon: '⚡' },
    { id: 35, name: 'SETU Rim Lock OSK', category: 'accessories', price: '5,550', description: 'Premium SETU rim lock system', icon: '🔐' },
    { id: 36, name: 'Door Closer 65', category: 'accessories', price: '1,899', description: 'Surface door closer 65kg capacity', icon: '🚪' },
    { id: 37, name: 'Concealed Door Closer', category: 'accessories', price: '5,500', description: 'Slimline concealed door closer 28mm', badge: 'Premium', icon: '🚪' },
    { id: 38, name: 'Tower Bolt Quiv 6"', category: 'accessories', price: '340', description: '150mm tower bolt', icon: '🔩' },
    { id: 39, name: 'Euro Cylinder HT 62mm', category: 'accessories', price: '1,150', description: 'Hi-tech brass euro cylinder OSK', icon: '🔐' },
    { id: 40, name: 'Knobset Entrance SS', category: 'accessories', price: '1,200', description: 'SS 304 entrance knobset 60mm', icon: '🚪' },
];

let currentFilter = 'all';
let displayedProducts = 12;

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

// Smooth Scroll & Active Nav
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Category Card Click
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        const productsSection = document.getElementById('products');
        productsSection.scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
            const filterBtn = document.querySelector(`[data-filter="${category}"]`);
            if (filterBtn) {
                filterBtn.click();
            }
        }, 500);
    });
});

// Product Filtering
function renderProducts(filter = 'all', limit = 12) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    const filtered = filter === 'all' 
        ? allProducts 
        : allProducts.filter(p => p.category === filter);
    
    const toDisplay = filtered.slice(0, limit);
    
    productsGrid.innerHTML = toDisplay.map(product => `
        <div class="product-card fade-in" data-category="${product.category}">
            <div class="product-image">
                <span>${product.icon}</span>
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">₹${product.price} <span>MRP</span></div>
                    <button class="product-btn" onclick="enquireProduct('${product.name}', '${product.price}')">Enquire</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Show/hide load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = filtered.length > limit ? 'inline-block' : 'none';
    }
}

function getCategoryName(category) {
    const names = {
        'digital': 'Digital Locks',
        'padlocks': 'Padlocks',
        'mortise': 'Mortise Handles',
        'accessories': 'Accessories'
    };
    return names[category] || category;
}

// Filter Buttons
const filterTags = document.querySelectorAll('.filter-tag');
filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
        filterTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        
        currentFilter = tag.getAttribute('data-filter');
        displayedProducts = 12;
        renderProducts(currentFilter, displayedProducts);
    });
});

// Load More Products
const loadMoreBtn = document.getElementById('loadMoreBtn');
loadMoreBtn?.addEventListener('click', () => {
    displayedProducts += 12;
    renderProducts(currentFilter, displayedProducts);
});

// Enquire Product
function enquireProduct(name, price) {
    alert(`Thank you for your interest in ${name}!\n\nPrice: ₹${price}\n\nPlease contact us:\n📞 Phone: 1800-547-4559\n📧 Email: info@jindalagency.com\n\nWe'll get back to you shortly!`);
}

// Contact Form
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        product: formData.get('product'),
        message: formData.get('message')
    };
    
    console.log('Form submitted:', data);
    
    // Show success message
    contactForm.style.display = 'none';
    successMessage.classList.add('active');
    
    // Reset after 4 seconds
    setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'block';
        successMessage.classList.remove('active');
    }, 4000);
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements
const observeElements = document.querySelectorAll('.feature-card, .category-card, .stat, .about-feature');
observeElements.forEach(el => observer.observe(el));

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all', 12);
    console.log('Jindal Agency - Link Locks Website Loaded');
    console.log(`Total Products: ${allProducts.length}`);
});