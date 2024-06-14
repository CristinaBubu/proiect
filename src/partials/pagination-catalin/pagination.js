import Pagination from 'tui-pagination';

const containerPagination = document.getElementById('pagination');
const options = {
  totalItems: 40,
  itemsPerPage: 9,
  visiblePages: window.innerWidth < 768 ? 2 : 3,
  page: 1,
  currentPage: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<button class="tui-page-btn" type="button">{{page}}</button>',
    currentPage: '<button class="tui-page-btn tui-is-selected">{{page}}</button>',
    moveButton:
      '<button class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</button>',
    moreButton:
      '<button class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</button',
  },
};

const pagination = new Pagination(containerPagination, options);

function show() {
  containerPagination.classList.replace('hide', 'show');
}

function hide() {
  containerPagination.classList.replace('show', 'hide');
}

export { pagination, options, show, hide };