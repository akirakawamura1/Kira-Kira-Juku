function toggleMenu() {
    // メニューの表示・非表示を切り替えるコードをここに記述します
}
var headerMenuButton = document.querySelector('.header_menu_button');
var headerNav = document.querySelector('.header_nav');

headerMenuButton.addEventListener('click', function() {
    if (headerNav.style.display === 'none' || headerNav.style.display === '') {
        headerNav.style.display = 'flex';
    } else {
        headerNav.style.display = 'none';
    }
});

function adjustMenuDisplay() {
    var width = window.innerWidth;

    if (width >= 768) {
        headerMenuButton.style.display = 'none';
        headerNav.style.display = 'block';
    } else {
        headerMenuButton.style.display = 'flex';
        headerNav.style.display = 'none';
    }
}

window.addEventListener('resize', adjustMenuDisplay);
window.addEventListener('DOMContentLoaded', adjustMenuDisplay);
