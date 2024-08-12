document.getElementById('navbar-toggle').addEventListener('click', function () {
    var links = document.getElementById('navbar-links');
    if (links.classList.contains('expanded')) {
        links.classList.remove('expanded');
    } else {
        links.classList.add('expanded');
    }
});