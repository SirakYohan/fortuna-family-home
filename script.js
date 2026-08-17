// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
menuToggle.addEventListener('click', () => {
nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
nav.classList.toggle('open');
});
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
const target = document.querySelector(this.getAttribute('href'));

```
if (target) {
  e.preventDefault();

  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

  if (nav && window.innerWidth <= 700) {
    nav.style.display = 'none';
  }
}
```

});
});
