let pageNode = document.querySelector(`#page`)
let headerNode = document.querySelector(`#header`);
let navigNode = document.querySelector(`#navig`);
let containerNode = document.querySelector(`#container`)
let offcanvasNode = document.querySelector(`#offcanvas`);
let offcanvasHeaderNode = document.querySelector(`#offcanvasHeader`);
let offcanvasBodyNode = document.querySelector(`#offcanvasBody`);

let searchInput = document.querySelector(`#searchInput`);
let searchButton = document.querySelector(`#searchButton`);

const pageWidth = document.documentElement.scrollWidth;

if (pageWidth < 1024) {
  navigNode.classList.add(`navbar`, `bg-light`);

  offcanvasNode.classList.add(`offcanvas`, `offcanvas-end`);
  offcanvasNode.setAttribute(`tabindex`, `-1`);
  offcanvasNode.setAttribute(`aria-labelledby`, `offcanvasNavbarLabel`);

  offcanvasHeaderNode.classList.add(`offcanvas-header`);
  offcanvasHeaderNode.innerHTML = `
  <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Home</h5>
  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  `;

  offcanvasBodyNode.classList.add(`offcanvas-body`);

  containerNode.innerHTML = `
  <a class="navig-logo navbar-brand" href="#"><img class="navig-logo__img d-inline-block align-text-top" src="assets/logos/logo.png" alt="Logo"> Lucknow</a>
  <button class="navig-btn navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas">
    <span class="navig-btn__icon navbar-toggler-icon"></span>
  </button>
  ` + containerNode.innerHTML;
  
} else {
  pageNode.classList.remove(`page-small`);
  pageNode.classList.add(`page-big`);

  headerNode.classList.remove(`header-small`);
  headerNode.classList.add(`header-big`);

  navigNode.classList.remove(`navig-small`);
  navigNode.classList.add(`navig-big`);

  containerNode.classList.remove(`container-fluid`);
  containerNode.classList.add(`no-container`);

  offcanvasNode.classList.remove(`offcanvas`);
  offcanvasNode.classList.add(`no-offcanvas`)

  offcanvasHeaderNode.classList.remove(`offcanvas-header`);
  offcanvasHeaderNode.classList.add(`no-offcanvas-header`);

  offcanvasBodyNode.classList.remove(`offcanvas-body`);
  offcanvasBodyNode.classList.add(`no-offcanvas-body`);
}

let searchClicked = false;

searchButton.addEventListener(`click`, function() {
  searchClicked = !searchClicked;
  if (searchClicked) searchInput.classList.remove(`d-none`);
  else searchInput.classList.add(`d-none`);
});