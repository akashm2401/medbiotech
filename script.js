document.getElementById('navbar-toggle').addEventListener('click', function () {
    var navContainer = document.getElementById('nav-bar-container');
    if (navContainer.classList.contains('expanded')) {
        navContainer.classList.remove('expanded');
    } else {
        navContainer.classList.add('expanded');
    }
});