// script.js — подсветка активной секции в навигации.
(function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a');
    if (!sections.length || !navLinks.length) return;

    const map = {};
    navLinks.forEach(a => {
        const id = a.getAttribute('href').replace('#', '');
        map[id] = a;
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(a => a.style.color = '');
                const a = map[entry.target.id];
                if (a) a.style.color = 'var(--text)';
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => observer.observe(s));
})();