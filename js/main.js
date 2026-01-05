document.addEventListener('scroll', () => {
  document.querySelectorAll('.card').forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
});
