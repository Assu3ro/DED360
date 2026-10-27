const initGalleryFilters = () => {
  const buttons = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('.gallery-item');

  if (!buttons.length || !items.length) return;

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      buttons.forEach((btn) => btn.classList.toggle('is-active', btn === button));

      items.forEach((item) => {
        const category = item.dataset.category;
        const shouldShow = filter === 'all' || category === filter;

        item.classList.toggle('is-visible', shouldShow);
      });
    });
  });
};

initGalleryFilters();
