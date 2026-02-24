const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('in'), i * 60);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll('.fi').forEach(el => io.observe(el));

// Contact Modal Functionality
function openContactModal() {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeContactModal() {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Close modal when clicking the backdrop
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeContactModal();
      }
    });
  }
});
