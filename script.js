// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Insert Beautiful SVG Logo
function insertLogo() {
  const logoContainer = document.getElementById('logo-svg');
  if (logoContainer) {
    logoContainer.innerHTML = `
      <svg width="420" height="160" viewBox="0 0 420 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#D4AF37"/>
            <stop offset="100%" stop-color="#B8972E"/>
          </linearGradient>
        </defs>
        <rect x="25" y="35" width="95" height="95" rx="12" fill="url(#goldGrad)"/>
        <path d="M72 48 L72 118" stroke="#111" stroke-width="14" stroke-linecap="round"/>
        <circle cx="72" cy="38" r="22" fill="#111"/>
        <text x="145" y="82" font-family="Playfair Display" font-size="58" fill="#D4AF37" font-weight="700" letter-spacing="-2">MRKAY</text>
        <text x="148" y="115" font-family="Inter" font-size="19" fill="#ddd" letter-spacing="6">DRINKS STORE</text>
      </svg>
    `;
  }
}

// Floating WhatsApp Button
function addFloatingWhatsApp() {
  const floatBtn = document.createElement('a');
  floatBtn.href = "https://wa.me/2347075824446";
  floatBtn.target = "_blank";
  floatBtn.className = "float-whatsapp";
  floatBtn.innerHTML = `
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="32" height="32">
  `;
  document.body.appendChild(floatBtn);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
  insertLogo();
  addFloatingWhatsApp();
  
  // Optional: Add subtle scroll effect to nav
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
      nav.style.background = 'rgba(10, 10, 10, 0.95)';
    }
  });
});