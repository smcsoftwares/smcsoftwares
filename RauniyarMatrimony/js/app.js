/* ====================================
   RAUNIYAR MATRIMONY — MAIN APP.JS
   ==================================== */

// Utility Functions
const UI = {
  // Mobile Menu Toggle
  toggleMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    if (btn && nav) {
      btn.addEventListener('click', () => {
        nav.classList.toggle('mobile-open');
      });
      // Close menu on link click
      nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          nav.classList.remove('mobile-open');
        });
      });
    }
  },

  // Modal Functions
  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
    }
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
    }
  },

  initModals() {
    // Close modal when clicking close button
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        if (modal) {
          modal.classList.remove('active');
        }
      });
    });

    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    });
  },

  // Tab System
  initTabs() {
    document.querySelectorAll('.tabs').forEach(tabContainer => {
      const buttons = tabContainer.querySelectorAll('.tab-btn');
      buttons.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const tabId = btn.getAttribute('data-tab');
          
          // Remove active class from all buttons and content
          buttons.forEach(b => b.classList.remove('active'));
          tabContainer.parentElement.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
          });
          
          // Add active class to clicked button and corresponding content
          btn.classList.add('active');
          const content = document.getElementById(tabId);
          if (content) {
            content.classList.add('active');
          }
        });
      });
    });
  },

  // Dropdown Menu
  initDropdowns() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      const btn = dropdown.querySelector('button');
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          dropdown.classList.toggle('active');
        });
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
      }
    });
  },

  // Heart Button (Shortlist)
  initHeartButtons() {
    document.querySelectorAll('.heart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.classList.toggle('active');
        const text = btn.closest('.profile-card') ? 
          (btn.classList.contains('active') ? 'Added to shortlist' : 'Removed from shortlist') : '';
        if (text) {
          this.showToast(text);
        }
      });
    });
  },

  // Toast Notification
  showToast(message, type = 'success', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: var(--${type === 'error' ? 'error' : type === 'warning' ? 'warning' : 'success'});
      color: white;
      padding: 12px 20px;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
      z-index: 2000;
      animation: slideInUp 0.3s ease-out;
      font-size: 14px;
      max-width: 300px;
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.animation = 'slideInUp 0.3s ease-out reverse';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  // Form Validation
  validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;

    let isValid = true;
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.classList.add('error');
        isValid = false;
      } else {
        input.classList.remove('error');
      }
    });

    return isValid;
  },

  // Image Gallery
  initGallery() {
    document.querySelectorAll('.gallery').forEach(gallery => {
      const images = gallery.querySelectorAll('img');
      const thumbs = gallery.querySelectorAll('.thumb');
      const mainImg = gallery.querySelector('.main-image');

      thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
          thumbs.forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
          if (mainImg) {
            mainImg.style.backgroundImage = `url('${thumb.src}')`;
          }
        });
      });
    });
  },

  // Filter Toggle
  initFilterToggle() {
    const toggleBtn = document.querySelector('.filter-toggle');
    const sidebar = document.querySelector('.filter-sidebar');
    
    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
      });
    }
  },

  // Search Filter
  initSearchFilter() {
    const inputs = document.querySelectorAll('[data-filter]');
    inputs.forEach(input => {
      input.addEventListener('change', () => {
        this.applyFilters();
      });
    });
  },

  applyFilters() {
    const profiles = document.querySelectorAll('.profile-card');
    const filters = {
      gender: document.querySelector('[data-filter="gender"]')?.value,
      location: document.querySelector('[data-filter="location"]')?.value,
      age: document.querySelector('[data-filter="age"]')?.value,
    };

    profiles.forEach(card => {
      let show = true;
      
      // Apply filter logic (placeholder)
      if (show) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  },

  // Profile View Toggle
  initProfileViewToggle() {
    const viewToggle = document.querySelector('[data-view-toggle]');
    const profilesContainer = document.querySelector('.profiles-grid');
    
    if (viewToggle && profilesContainer) {
      viewToggle.addEventListener('click', () => {
        profilesContainer.classList.toggle('list-view');
      });
    }
  },

  // Initialize All
  init() {
    this.toggleMobileMenu();
    this.initModals();
    this.initTabs();
    this.initDropdowns();
    this.initHeartButtons();
    this.initGallery();
    this.initFilterToggle();
    this.initSearchFilter();
    this.initProfileViewToggle();
    
    // Add loading state removal
    document.querySelectorAll('[data-submit]').forEach(btn => {
      btn.addEventListener('click', function() {
        if (this.form && UI.validateForm(this.form.id)) {
          this.disabled = true;
          this.textContent = 'Loading...';
        }
      });
    });
  }
};

// Init when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  UI.init();
});

/* ====================================
   FORM HELPER FUNCTIONS
   ==================================== */

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  if (email && password) {
    UI.showToast('Login successful! Redirecting...', 'success');
    setTimeout(() => {
      window.location.href = '/dashboard/user-dashboard.html';
    }, 1500);
  } else {
    UI.showToast('Please fill in all fields', 'error');
  }
}

function handleRegister(e) {
  e.preventDefault();
  if (UI.validateForm('register-form')) {
    UI.showToast('Registration successful! Please check your email.', 'success');
    document.getElementById('register-form').reset();
  }
}

function nextStep(step) {
  const current = document.querySelector('[data-step].active');
  if (current) {
    current.classList.remove('active');
  }
  const next = document.querySelector(`[data-step="${step}"]`);
  if (next) {
    next.classList.add('active');
  }
}

function prevStep(step) {
  nextStep(step);
}

/* ====================================
   PROFILE FUNCTIONS
   ==================================== */

function sendInterest(profileId) {
  UI.showToast('Interest sent successfully!', 'success');
}

function viewProfile(profileId) {
  window.location.href = `/pages/profile.html?id=${profileId}`;
}

function toggleShortlist(profileId, element) {
  element.classList.toggle('active');
  const isAdded = element.classList.contains('active');
  UI.showToast(isAdded ? 'Added to shortlist' : 'Removed from shortlist', 'success');
}

/* ====================================
   PLACEHOLDER DATA FUNCTIONS
   ==================================== */

const mockProfiles = [
  {
    id: 1,
    name: 'Priya Gupta',
    age: 28,
    height: "5'4\"",
    education: 'MBA',
    profession: 'Marketing Manager',
    location: 'Rourkela, Odisha',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%22%23E8DED2%22 width=%22300%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2248%22 fill=%22%23777%22 text-anchor=%22middle%22 dy=%22.3em%22%3E👩%3C/text%3E%3C/svg%3E',
    verified: true,
    description: 'Family-oriented, career-focused and enjoys travelling.'
  },
  {
    id: 2,
    name: 'Neha Gupta',
    age: 26,
    height: "5'3\"",
    education: 'B.Tech',
    profession: 'Software Engineer',
    location: 'Bangalore, KA',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%22%23E8DED2%22 width=%22300%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2248%22 fill=%22%23777%22 text-anchor=%22middle%22 dy=%22.3em%22%3E👩%3C/text%3E%3C/svg%3E',
    verified: true,
    description: 'Loves reading, travelling and cooking.'
  },
  {
    id: 3,
    name: 'Aman Rauniyar',
    age: 32,
    height: "5'11\"",
    education: 'BTech',
    profession: 'Business Analyst',
    location: 'Delhi, DL',
    image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%22%23E8DED2%22 width=%22300%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2248%22 fill=%22%23777%22 text-anchor=%22middle%22 dy=%22.3em%22%3E👨%3C/text%3E%3C/svg%3E',
    verified: true,
    description: 'Ambitious professional seeking like-minded partner.'
  }
];

function getProfileCard(profile) {
  return `
    <div class="profile-card">
      <div class="profile-image">
        <img src="${profile.image}" alt="${profile.name}">
        ${profile.verified ? '<div class="profile-badge">✓ Verified</div>' : ''}
      </div>
      <div class="profile-content">
        <div class="profile-name">${profile.name}</div>
        <div class="profile-meta">${profile.age} Years • ${profile.height}</div>
        <div class="profile-stats">
          <div class="profile-stat">${profile.education}</div>
          <div class="profile-stat">•</div>
          <div class="profile-stat">${profile.profession}</div>
        </div>
        <div class="profile-location">📍 ${profile.location}</div>
        <div class="profile-description">"${profile.description}"</div>
        <div class="profile-actions">
          <button class="btn btn-primary btn-sm" onclick="sendInterest(${profile.id})">Send Interest</button>
          <button class="btn btn-outline btn-sm heart-btn" onclick="toggleShortlist(${profile.id}, this)">♡</button>
        </div>
      </div>
    </div>
  `;
}

function renderProfiles(containerId, profiles = mockProfiles) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = profiles.map(p => getProfileCard(p)).join('');
    UI.initHeartButtons();
  }
}

/* ====================================
   UTILITY - LOCAL STORAGE
   ==================================== */

const Storage = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  }
};
