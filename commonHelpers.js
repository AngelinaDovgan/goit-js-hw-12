import{S as L,i as p}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function y(n){return n.map(({webformatURL:o,largeImageURL:i,tags:r,likes:e,views:t,comments:s,downloads:g})=>`<li class="main-image">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${r}"
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
</li>`).join("")}async function h(n,o,i){const r="42523874-92f67aed3babfb2c9b36364a5",e="https://pixabay.com/api/",t=n.trim(),c=await fetch(`${e}?key=${r}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${i}`);if(!c.ok)throw new Error(c.status);return c.json()}const u=document.querySelector(".gallery"),m=document.querySelector(".input-img"),$=document.querySelector(".form");document.querySelector(".btn-sub");const d=document.querySelector(".loading"),a=document.querySelector('[data-action="load-more"]'),f=document.querySelector(".spinner");d.style.display="none";a.style.display="none";function q(n){n.preventDefault(),u.innerHTML=null;const o=m.value.trim();if(!o)return v();d.style.display="inline-block",a.style.display="inline-block",h(o,1,15).then(i=>{const r=i.totalHits||0;if(l*15>r)return a.classList.add("is-hidden"),k();l=1,b=o;const t=i.hits;if(t.length)u.innerHTML=y(t),new L(".gallery a.gallery-link",{captionsData:"alt",captionDelay:300}).refresh();else return u.innerHTML="",w()}).catch(i=>console.log(i)).finally(()=>{d.style.display="none"}),m.value=""}let l=1,b;function S(){f.classList.remove("is-hidden"),l++,h(b,15,l).then(n=>{y(n.hits),f.scrollIntoView(),f.classList.add("is-hidden")}).catch(n=>alert(n.message))}$.addEventListener("submit",q);a.addEventListener("click",S);function w(){p.error({message:"Sorry, there are no images matching your search query. Please try again!",title:"Error",titleColor:"#fff",backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"#fff",position:"topRight"})}function v(){p.warning({title:"Увага!",position:"topRight",backgroundColor:"orange",message:"Поле пошуку не може бути порожнім!"})}function k(){p.info({title:"Info",position:"topCenter",backgroundColor:"blue",message:"Упс! Більше немає зображень..."})}
//# sourceMappingURL=commonHelpers.js.map
