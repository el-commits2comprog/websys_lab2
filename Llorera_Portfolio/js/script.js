document.addEventListener("DOMContentLoaded", () => {
    const blogContainer = document.querySelector('.daily-blog');
    const blogEntries = [...blogContainer.querySelectorAll('.blog-content')];
    blogEntries.reverse().forEach(entry => blogContainer.appendChild(entry));

    document.querySelectorAll('.preview').forEach(el => {
        el.addEventListener('click', function () {
            this.closest('.blog-content').classList.toggle('active');
        });
    });
});