document.addEventListener('DOMContentLoaded', () => {
  const drawer = document.querySelector('.mobile-drawer');
  const drawerBackdrop = document.querySelector('.drawer-backdrop');
  const burger = document.querySelector('.burger');
  const closeDrawer = () => {
    drawer?.classList.remove('open');
    drawerBackdrop?.classList.remove('open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  };

  burger?.addEventListener('click', () => {
    const isOpen = drawer?.classList.toggle('open');
    drawerBackdrop?.classList.toggle('open', !!isOpen);
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  drawerBackdrop?.addEventListener('click', closeDrawer);
  drawer?.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeDrawer));

codex/create-multilingual-static-website-for-drillmont-capital-3wqto9
  document.querySelectorAll('.lang-switcher').forEach((switcher) => {
    const trigger = switcher.querySelector('.lang-trigger');
    const links = switcher.querySelectorAll('.lang-menu a');

    trigger?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = switcher.classList.toggle('open');
      trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    links.forEach((link) => {
      link.addEventListener('click', () => {
        switcher.classList.remove('open');
        trigger?.setAttribute('aria-expanded', 'false');
      });
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.lang-switcher.open').forEach((switcher) => {
      switcher.classList.remove('open');
      switcher.querySelector('.lang-trigger')?.setAttribute('aria-expanded', 'false');

    });
  });

  document.querySelectorAll('form[data-demo-form="true"]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = form.querySelector('.submit-msg');
      if (msg) msg.textContent = 'Demo version – submission disabled.';
    });
  });

  const counters = document.querySelectorAll('[data-counter-target]');
  const animateCounter = (el) => {
    const target = Number(el.dataset.counterTarget || '0');
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(target * eased);
      el.textContent = `${prefix}${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if (counters.length) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = 'true';
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    counters.forEach((c) => obs.observe(c));
  }

  const modal = document.getElementById('privacy-modal');
  const modalOpeners = document.querySelectorAll('[data-open-privacy]');
  const modalClosers = document.querySelectorAll('[data-close-privacy]');

  const closeModal = () => modal?.classList.remove('open');
  const openModal = () => modal?.classList.add('open');

  modalOpeners.forEach((btn) => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));
  modalClosers.forEach((btn) => btn.addEventListener('click', closeModal));
  modal?.querySelector('.modal-backdrop')?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
