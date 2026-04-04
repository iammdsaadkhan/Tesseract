/* ═══════════════════════════════════════════
   TESSERACT — script.js
   Author: Tesseract Frontend Team
═══════════════════════════════════════════ */

/* ── PAGE LOADER ── */
(function () {
  const loader = document.getElementById('pageLoader');
  const fill   = document.getElementById('loaderFill');
  let progress = 0;

  const tick = setInterval(() => {
    progress += Math.random() * 18;
    if (progress >= 100) {
      progress = 100;
      clearInterval(tick);
      fill.style.width = '100%';
      setTimeout(() => loader.classList.add('hidden'), 350);
    }
    fill.style.width = progress + '%';
  }, 90);
})();


/* ── CUSTOM CURSOR ── */
(function () {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  // Ring follows with smooth lag
  function animateRing() {
    ringX += (mouseX - ringX) * 0.1;
    ringY += (mouseY - ringY) * 0.1;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover effect on interactive elements
  const hoverTargets = 'a, button, .game-card, .filter-btn, .play-btn, .step-card, .lb-row';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverTargets)) document.body.classList.add('cursor-hover');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverTargets)) document.body.classList.remove('cursor-hover');
  });

  // Click effect
  document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
  document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-click'));

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
})();


/* ── NAVBAR SCROLL STATE ── */
(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


/* ── MOBILE MENU ── */
const overlay = document.getElementById('mobileOverlay');
const ham     = document.getElementById('hamburger');

function openMobile() {
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  const spans = ham.querySelectorAll('span');
  spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
  spans[1].style.opacity   = '0';
  spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
}

function closeMobile() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  const spans = ham.querySelectorAll('span');
  spans[0].style.transform = '';
  spans[1].style.opacity   = '';
  spans[2].style.transform = '';
}

if (ham) ham.addEventListener('click', () => {
  overlay.classList.contains('open') ? closeMobile() : openMobile();
});
const mobileClose = document.getElementById('mobileClose');
if (mobileClose) mobileClose.addEventListener('click', closeMobile);
window.closeMobile = closeMobile;


/* ── SCROLL REVEAL ── */
(function () {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings in same parent
        const siblings = Array.from(entry.target.parentElement.querySelectorAll('[data-reveal]'));
        const idx      = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = (idx * 0.09) + 's';
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  items.forEach(el => observer.observe(el));
})();


/* ── SMOOTH SCROLL (nav links) ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
});


/* ── GAME FILTER ── */
(function () {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.game-card');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.opacity   = match ? '1' : '0.25';
        card.style.transform = match ? '' : 'scale(0.97)';
        card.style.pointerEvents = match ? '' : 'none';
      });
    });
  });
})();


/* ── PARALLAX ORB ON MOUSE MOVE ── */
(function () {
  const orbs = document.querySelectorAll('.orb');
  if (!orbs.length) return;

  const factors = [0.025, -0.018, 0.012];

  document.addEventListener('mousemove', e => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;

    orbs.forEach((orb, i) => {
      const f = factors[i] || 0.01;
      orb.style.transform = `translate(${dx * f}px, ${dy * f}px)`;
    });
  });
})();


/* ── ANIMATED COUNTER (stats in hero) ── */
(function () {
  function countUp(el, target, suffix) {
    let start     = null;
    const duration = 1600;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 4);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const metaItems = document.querySelectorAll('.meta-item');
  let fired = false;

  const observer = new IntersectionObserver(entries => {
    if (fired) return;
    if (entries[0].isIntersecting) {
      fired = true;
      const targets = [
        { el: metaItems[0]?.querySelector('strong'), val: 500, suffix: '+' },
        { el: metaItems[1]?.querySelector('strong'), val: 12,  suffix: '+' },
      ];
      targets.forEach(t => t.el && countUp(t.el, t.val, t.suffix));
    }
  }, { threshold: 0.5 });

  const heroMeta = document.querySelector('.hero-meta');
  if (heroMeta) observer.observe(heroMeta);
})();


/* ── FORM SUBMIT (with PHP fallback) ── */
(function () {
  const form     = document.getElementById('applyForm');
  const submitBtn = document.getElementById('submitBtn');
  const success  = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Basic client-side validation
    const inputs = form.querySelectorAll('input[required], select[required]');
    let valid = true;
    inputs.forEach(input => {
      input.style.borderColor = '';
      if (!input.value.trim()) {
        input.style.borderColor = '#ff6b6b';
        valid = false;
      }
    });
    if (!valid) return;

    // Loading state
    submitBtn.querySelector('.btn-text').style.display = 'none';
    submitBtn.querySelector('.btn-loader').style.display = 'inline';
    submitBtn.disabled = true;

    // Send to PHP handler
    try {
      const formData = new FormData(form);
      const response = await fetch('contact.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        form.reset();
        submitBtn.style.display = 'none';
        success.style.display   = 'block';
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      // If PHP not available (static Vercel deploy), still show success
      // In production PHP must be on a PHP-capable server
      form.reset();
      submitBtn.style.display = 'none';
      success.style.display   = 'block';
    }
  });
})();


/* ── HERO TITLE CHAR ANIMATION ── */
(function () {
  const titles = document.querySelectorAll('.title-line');
  titles.forEach((line, li) => {
    const text = line.textContent;
    line.textContent = '';
    line.style.display = 'block';

    [...text].forEach((char, ci) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00a0' : char;
      span.style.cssText = `
        display: inline-block;
        opacity: 0;
        transform: translateY(30px) rotate(${Math.random() * 6 - 3}deg);
        transition: opacity 0.5s ease, transform 0.5s ease;
        transition-delay: ${(li * 0.3 + ci * 0.03 + 0.2)}s;
      `;
      line.appendChild(span);
    });
  });

  // Trigger after loader hides (~1s)
  setTimeout(() => {
    document.querySelectorAll('.title-line span').forEach(span => {
      span.style.opacity   = '1';
      span.style.transform = 'translateY(0) rotate(0deg)';
    });
  }, 900);
})();


/* ── CARD TILT EFFECT ── */
(function () {
  const cards = document.querySelectorAll('.game-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect   = card.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      const cx     = rect.width  / 2;
      const cy     = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -6;
      const rotateY = ((x - cx) / cx) *  6;
      card.style.transform = `translateY(-7px) perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();
