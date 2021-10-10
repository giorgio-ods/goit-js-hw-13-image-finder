import './common.css';
import ApiService from './apiService.js';
import cardTpl from './templates/cardTpl.hbs'

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]')
}

const imageApiService = new ApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore)

function onSearch(e) {
  e.preventDefault();
  clearGallery();
  imageApiService.query = e.currentTarget.elements.query.value;
  imageApiService.resetPage(); 
  imageApiService.fetchImages().then(appendArticlesMarkup);
  showBtn();
  
}

function onLoadMore() {
  imageApiService.fetchImages().then(appendArticlesMarkup);
  // onScrollPage(refs.loadMoreBtn);
}

function appendArticlesMarkup(images) {
  refs.gallery.insertAdjacentHTML('beforeend', cardTpl(images));
  onScrollPage(refs.gallery);
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}

function showBtn() {
  refs.loadMoreBtn.classList.remove('is-hidden')
}

function onScrollPage(el) {
  el.scrollIntoView({
    behavior: 'smooth',
    block: 'end'
  })
};
