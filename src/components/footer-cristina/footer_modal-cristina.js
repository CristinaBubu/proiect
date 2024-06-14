document.addEventListener('DOMContentLoaded', function () {
    const openModalButton = document.getElementById('openFooter');
    const closeModalButton = document.getElementById('closeFooter');
    const modal = document.getElementById('footer-modal');

    function openModalFooter() {
        modal.style.display = 'flex';
    }

    function closeModalFooter() {
        modal.style.display = 'none';
    }

    openModalButton.addEventListener('click', openModalFooter);

    closeModalButton.addEventListener('click', closeModalFooter);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModalFooter();
        }
    });

    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModalFooter();
        }
    });
});