import{S as y,i as g}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function h(r){return r.map(({webformatURL:o,largeImageURL:n,tags:i,likes:e,views:t,comments:s,downloads:d})=>`<li class="main-image">
  <a class="gallery-link" href="${n}">
    <img
      class="gallery-image"
      src="${o}"
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
  <p>${d}</p>
  </li>

  </ul>
</li>`).join("")}async function b(r,o,n){const i="42523874-92f67aed3babfb2c9b36364a5",e="https://pixabay.com/api/",t=r.trim(),l=await fetch(`${e}?key=${i}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${n}`);if(!l.ok)throw new Error(l.status);return l.json()}const c=document.querySelector(".gallery"),m=document.querySelector(".input-img"),$=document.querySelector(".form");document.querySelector(".btn-sub");const p=document.querySelector(".loading"),a=document.querySelector('[data-action="load-more"]'),u=document.querySelector(".spinner");p.style.display="none";a.style.display="none";function q(r){r.preventDefault(),c.innerHTML=null;const o=m.value.trim();if(!o)return S();p.style.display="inline-block",a.style.display="inline-block",b(o,1,15).then(n=>{const i=n.totalHits||0;if(f*15>i)return a.classList.add("is-hidden"),v();L=o;const t=n.hits;if(t.length)c.innerHTML=h(t),new y(".gallery a.gallery-link",{captionsData:"alt",captionDelay:300}).refresh();else return c.innerHTML="",w()}).catch(n=>console.log(n)).finally(()=>{p.style.display="none"}),m.value=""}let f,L;$.addEventListener("submit",q);a.addEventListener("click",r=>{u.classList.remove("is-hidden"),f++,b(L,f,15).then(o=>{h(images),new y(".gallery a.gallery-link",{captionsData:"alt",captionDelay:300}).refresh(),u.scrollIntoView,u.classList.add("is-hidden")}).catch(o=>alert(o.message))});function w(){g.error({message:"Sorry, there are no images matching your search query. Please try again!",title:"Error",titleColor:"#fff",backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"#fff",position:"topRight"})}function S(){g.warning({title:"Увага!",position:"topRight",backgroundColor:"orange",message:"Поле пошуку не може бути порожнім!"})}function v(){g.info({title:"Info",position:"topCenter",backgroundColor:"blue",message:"Упс! Більше немає зображень..."})}
//# sourceMappingURL=commonHelpers.js.map
