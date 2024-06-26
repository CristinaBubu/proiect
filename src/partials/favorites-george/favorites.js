import { createGalleryCard } from './create_gallery.js';

const listFav = document.querySelector('.fav-recipe-card-list');
const categoriesConteiner = document.querySelector('.fav-category-block');
const btn_conteiner_pagination = document.querySelector('.button-style-favorites');

const refs = {
  all_categorie: document.querySelector('.btn-all-categori'),
  button1: document.querySelector('.btn-center1'),
  button2: document.querySelector('.btn-center2'),
  button3: document.querySelector('.btn-center3'),
  categories_btn: document.querySelector('fav-category-fltr-btn'),

  btn_right: document.querySelector('.btn-right'),
  btn_end: document.querySelector('.btn-right-end'),

  btn_start: document.querySelector('.btn-left'),
  btn_left: document.querySelector('.btn-left1'),
};
const KEY_FAVORITE = 'favorite';

const favoritesRecipes = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];

const categoriesArray = favoritesRecipes.map(recipe => {
  return recipe.category;
});

createGalleryCard(favoritesRecipes, listFav);

function categories(categories) {
  const SetCategories = [...new Set(categories)];
  const  UpdatedCAr = SetCategories.map(name => {return `<button class="fav-category-fltr-btn" id='${name}' type="button">${name}</button>`}).join('');
  const all_categorieUpdate = () => {
    if(SetCategories.length){
      return `<button class="btn-all-categori  active_all-categories" type="button">All categories</button>${UpdatedCAr}`
    }else{
    return '';
    }
  }
  categoriesConteiner.innerHTML = all_categorieUpdate() ;
}
categories(categoriesArray);

listFav.addEventListener('click', remoteFavRecipe);

function remoteFavRecipe(e) {
  if (e.target.tagName !== 'BUTTON') {
    return;
  }

  if (e.target.classList.contains('btn-heard')) {
    e.target.classList.remove('btn-heard');
    e.target.classList.add('btn-heard-noactiv');
    const recipeId = e.target.id;

    const Updated =  favoritesRecipes.findIndex(recipe => recipe._id === recipeId);
    console.log(Updated)
    favoritesRecipes.splice(Updated,1)
    localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoritesRecipes))

    categories(favoritesRecipes.map(recipe => {return recipe.category;}));

    if (window.screen.width >= 768) {
      createGalleryCard(favoritesRecipes.slice(0, 12), listFav)
      if( favoritesRecipes.length <= 12){
        btn_conteiner_pagination.style.display = 'none';
      }
    }else{
      if( favoritesRecipes.length <= 9){
        createGalleryCard(favoritesRecipes.slice(0, 9), listFav)
        btn_conteiner_pagination.style.display = 'none';
      }
    }
  }
  
}

function refreshPage() {
  location.reload();
}

let activeCategories;
categoriesConteiner.addEventListener('click', e => {
  if (e.target.classList.contains('fav-category-fltr-btn')) {
    document
      .querySelector('.btn-all-categori ')
      .classList.remove('active_all-categories');


        if( favoritesRecipes.filter(res => res.category === e.target.id).slice(0, 12).length <= 12){
          btn_conteiner_pagination.style.display = 'none';
        } if  ( favoritesRecipes.filter(res => res.category === e.target.id).length > 12){
          btn_conteiner_pagination.style.display = 'block';
          array =  favoritesRecipes.filter(res => res.category === e.target.id)
        }
      
    createGalleryCard(favoritesRecipes.filter(res => res.category === e.target.id).slice(0, 12),listFav);

    if (activeCategories !== undefined) {
      activeCategories.classList.remove('active_btn');
    }
    activeCategories = e.target;
    e.target.classList.add('active_btn');
  }
  if (e.target.classList.contains('btn-all-categori')) {

    if( favoritesRecipes.length <= 12){
      btn_conteiner_pagination.style.display = 'block';
      array = favoritesRecipes;
    }
    refreshPage();
    createGalleryCard( favoritesRecipes.slice(0, 12),listFav, listFav);
  }
});
if(refs.all_categorie){
    refs.all_categorie.addEventListener('click', e => {
    e.target.classList.add('active_all-categories');
    activeCategories.classList.remove('active_btn');
  });
}


listFav.addEventListener('click', seeRecipe);
function seeRecipe(evt) {
  if (evt.target.tagName !== 'BUTTON') {
    return;
  }
  evt.target.classList.toggle('bnt');
}


