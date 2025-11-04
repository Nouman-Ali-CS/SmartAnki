document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const navSlider = document.getElementById('navSlider');
    const addBtnSidebar = document.querySelector('.add-btn-sidebar');
    const navItems = document.querySelectorAll('.nav-item');
    const categoryItems = document.querySelectorAll('.category-item');

    if (navSlider) {
        navSlider.addEventListener('click', function () {
            sidebar && sidebar.classList.toggle('contracted');
        });
    }

    const myDeckNav = document.getElementById('myDeckNav');
    if (myDeckNav) {
        myDeckNav.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }

    const athenaAINav = document.getElementById('athenaAINav');
    if (athenaAINav) {
        athenaAINav.addEventListener('click', function () {
            window.location.href = 'upload.html';
        });
    }

    if (addBtnSidebar) {
        addBtnSidebar.addEventListener('click', function () {
            window.location.href = 'create.html';
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navItems.forEach(nav => nav.style.backgroundColor = '');
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.08)';
        });
    });

    categoryItems.forEach(item => {
        item.addEventListener('click', function () {
            const category = this.querySelector('span')?.textContent;
            console.log('Category clicked:', category);
        });
    });
});