export function initProjectGalleries() {
  document.querySelectorAll('[data-gallery]').forEach((gallery) => {
    const images = [...gallery.querySelectorAll('.project-thumb')];
    const dotsContainer = gallery.querySelector('[data-gallery-dots]');
    if (images.length <= 1) return;

    let index = 0;
    const dots = images.map((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'gallery-dot';
      dot.setAttribute('aria-label', `Ir a imagen ${i + 1}`);
      dot.addEventListener('click', () => show(i));
      dotsContainer.appendChild(dot);
      return dot;
    });

    function show(newIndex) {
      index = (newIndex + images.length) % images.length;
      images.forEach((img, i) => img.classList.toggle('is-active', i === index));
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
    }

    gallery.querySelector('[data-gallery-prev]').addEventListener('click', () => show(index - 1));
    gallery.querySelector('[data-gallery-next]').addEventListener('click', () => show(index + 1));

    images.forEach((img) => { img.draggable = false; });

    const track = gallery.querySelector('.gallery-track');
    const SWIPE_THRESHOLD = 40;
    let dragging = false;
    let startX = 0;
    let startY = 0;

    track.addEventListener('pointerdown', (e) => {
      dragging = true;
      startX = e.clientX;
      startY = e.clientY;
    });

    track.addEventListener('pointerup', (e) => {
      if (!dragging) return;
      dragging = false;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
        show(index + (dx < 0 ? 1 : -1));
      }
    });

    track.addEventListener('pointercancel', () => {
      dragging = false;
    });

    show(0);
  });
}
