document.addEventListener('DOMContentLoaded', function () {
    const hasSubmenuItems = document.querySelectorAll('.has-submenu');

    hasSubmenuItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            const submenu = item.querySelector('.submenuf');
            if (submenu) {
                e.preventDefault();
                const isVisible = getComputedStyle(submenu).display !== 'none';
                // Ocultar todos los submenús visibles
                document.querySelectorAll('.submenuf').forEach(function (visibleSubmenu) {
                    visibleSubmenu.style.display = 'none';
                    // Ajustar el margen superior del siguiente elemento del menú
                    item.nextElementSibling.style.marginTop = '0';
                });
                // Mostrar u ocultar el submenú actual
                submenu.style.display = isVisible ? 'none' : 'block';
                // Ajustar el margen superior del siguiente elemento del menú
                item.nextElementSibling.style.marginTop = submenu.style.display === 'block' ? submenu.offsetHeight + 'px' : '0';
            }
        });
    });
});










