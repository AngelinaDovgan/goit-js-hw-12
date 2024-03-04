import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import createMarkup from "./js/render-functions";
import getImages from "./js/pixabay-api";

const list = document.querySelector(".gallery");
const input = document.querySelector(".input-img");
const form = document.querySelector(".form");
const btn = document.querySelector(".btn-sub");
const loading = document.querySelector(".loading");
const btnLoadMore = document.querySelector('[data-action="load-more"]');
const spinner = document.querySelector(".spinner");

let current_page = 1;
let current_query;

loading.style.display = 'none';
 btnLoadMore.style.display = 'none';

function loadImg(event) {
    event.preventDefault();
    list.innerHTML = '';

    const inputValue = input.value.trim();
   
    loading.style.display = 'inline-block';
    btnLoadMore.style.display = 'inline-block';

    getImages(inputValue, 1, 15)
        .then(data => {
            if (!data.hits || data.hits.length === 0) {
                list.innerHTML = '';
                return errorNotification();
            } 
            const images = data.hits;  
        if (images.length < 15) {
            btnLoadMore.style.display = 'none';
            return information();
            } 
    current_query = inputValue;
    if (!images.length || !inputValue) {
    list.innerHTML = '';
    return errorNotification();
    } else {
    list.innerHTML = createMarkup(images);
    const lightbox = new SimpleLightbox('.gallery a.gallery-link', {
    captionsData: 'alt',
    captionDelay: 300,
    });
        lightbox.refresh();
    }
})
.catch(error => {
console.log(error);
errorNotification();
})
.finally(() => {
loading.style.display = 'none';
});
input.value = '';
}


// form.addEventListener('submit', loadImg);

form.addEventListener('submit', event => {
    event.preventDefault();
    current_page = 1; 
    loadImg(event);
});



btnLoadMore.addEventListener('click', event => {
    spinner.classList.remove('is-hidden');
    current_page += 1;
    getImages(current_query, current_page, 15)
        .then(data => {
            const images = data.hits;
            if (images.length < 15) {
                btnLoadMore.style.display = 'none';
                return information();
            } else {
                list.insertAdjacentHTML('beforeend', createMarkup(images));
                const lightbox = new SimpleLightbox('.gallery a.gallery-link', {
                    captionsData: 'alt',
                    captionDelay: 300,
                });
                lightbox.refresh();
                spinner.scrollIntoView();
                spinner.classList.add('is-hidden')
            }
            })

        .catch(e => alert(e.message))
});


function errorNotification(){
    iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        title: "Error",
        titleColor: "#fff",
        backgroundColor: "rgba(239, 64, 64, 1)",
        messageColor: "#fff",
        position: "topRight",
    });
}
function warningNotification(){
   iziToast.warning({
       title: 'Увага!',
       position: "topRight",
       backgroundColor: "orange",
       message: 'Поле пошуку не може бути порожнім!',
   });
}

function information() {
    iziToast.info({
       title: 'Info',
       position: "topCenter",
       backgroundColor: "blue",
        message: "We're sorry, but you've reached the end of search results."
   });
}
