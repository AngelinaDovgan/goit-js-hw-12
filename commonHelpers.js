import{S as L,i as d}from"./assets/vendor-5b791d57.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function y(o){return o.map(({webformatURL:n,largeImageURL:r,tags:i,likes:e,views:t,comments:s,downloads:g})=>`<li class="main-image">
  <a class="gallery-link" href="${r}">
    <img
      class="gallery-image"
      src="${n}"
      alt="${i}"
      height="250px"/>
  </a>
  <ul class="img-reactions">
  
  <li class="reactions">
  <h3>Likes</h3>
  <p>${e}</p>
  </li>

   <li class="reactions">
  <h3>Views</h3>
  <p>${t}</p>
  </li>

   <li class="reactions">
  <h3>Comments</h3>
  <p>${s}</p>
  </li>

   <li class="reactions">
  <h3>Downloads</h3>
  <p>${g}</p>
  </li>

  </ul>
</li>`).join("")}async function h(o,n,r){const i="42523874-92f67aed3babfb2c9b36364a5",e="https://pixabay.com/api/",t=o.trim(),l=await fetch(`${e}?key=${i}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=15`);if(!l.ok)throw new Error(l.status);return l.json()}const c=document.querySelector(".gallery"),m=document.querySelector(".input-img"),$=document.querySelector(".form");document.querySelector(".btn-sub");const p=document.querySelector(".loading"),a=document.querySelector('[data-action="load-more"]'),u=document.querySelector(".spinner");p.style.display="none";a.style.display="none";function q(o){o.preventDefault(),c.innerHTML=null;const n=m.value.trim();if(!n)return v();p.style.display="inline-block",a.style.display="inline-block",h(n).then(r=>{const i=r.totalHits||0;if(f*15>i)return a.classList.add("is-hidden"),k();f=1,b=n;const t=r.hits;if(t.length)c.innerHTML=y(t),new L(".gallery a.gallery-link",{captionsData:"alt",captionDelay:300}).refresh();else return c.innerHTML="",w()}).catch(r=>console.log(r)).finally(()=>{p.style.display="none"}),m.value=""}let f=1,b;function S(){u.classList.remove("is-hidden"),f++,h(b).then(o=>{y(o.hits),u.scrollIntoView(),u.classList.add("is-hidden")}).catch(o=>alert(o.message))}$.addEventListener("submit",q);a.addEventListener("click",S);function w(){d.error({message:"Sorry, there are no images matching your search query. Please try again!",title:"Error",titleColor:"#fff",backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"#fff",position:"topRight"})}function v(){d.warning({title:"Увага!",position:"topRight",backgroundColor:"orange",message:"Поле пошуку не може бути порожнім!"})}function k(){d.info({title:"Info",position:"topCenter",backgroundColor:"blue",message:"Упс! Більше немає зображень..."})}
//# sourceMappingURL=commonHelpers.js.map
