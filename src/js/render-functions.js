export default function createMarkup(images) {
    return images.map(
        ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `<li class="main-image">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
      height="250px"/>
  </a>
  <ul class="img-reactions">
  
  <li class="reactions">
  <h3>Likes</h3>
  <p>${likes}</p>
  </li>

   <li class="reactions">
  <h3>Views</h3>
  <p>${views}</p>
  </li>

   <li class="reactions">
  <h3>Comments</h3>
  <p>${comments}</p>
  </li>

   <li class="reactions">
  <h3>Downloads</h3>
  <p>${downloads}</p>
  </li>

  </ul>
</li>`).join("");
}

