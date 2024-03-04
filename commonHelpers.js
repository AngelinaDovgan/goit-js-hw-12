import{S as m,i as h}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function b(i){return i.map(({webformatURL:t,largeImageURL:r,tags:n,likes:e,views:o,comments:s,downloads:d})=>`<li class="main-image">
  <a class="gallery-link" href="${r}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${n}"
      height="250px"/>
  </a>
  <ul class="img-reactions">
  
  <li class="reactions">
  <h3>Likes</h3>
  <p>${e}</p>
  </li>

   <li class="reactions">
  <h3>Views</h3>
  <p>${o}</p>
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
</li>`).join("")}async function L(i,t,r){const n="42523874-92f67aed3babfb2c9b36364a5",e="https://pixabay.com/api/",o=i.trim(),c=await fetch(`${e}?key=${n}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${r}`);if(!c.ok)throw new Error(c.status);return c.json()}const l=document.querySelector(".gallery"),g=document.querySelector(".input-img"),S=document.querySelector(".form");document.querySelector(".btn-sub");const p=document.querySelector(".loading"),a=document.querySelector('[data-action="load-more"]'),u=document.querySelector(".spinner");let f=1,$;p.style.display="none";a.style.display="none";function v(i){i.preventDefault(),l.innerHTML="";const t=g.value.trim();p.style.display="inline-block",a.style.display="inline-block",L(t,1,15).then(r=>{const n=r.hits;if(n.length<15)return a.style.display="none",q();if($=t,!n.length||!t)return l.innerHTML="",y();l.innerHTML=b(n),new m(".gallery a.gallery-link",{captionsData:"alt",captionDelay:300}).refresh()}).catch(r=>{console.log(r),y()}).finally(()=>{p.style.display="none"}),g.value=""}S.addEventListener("submit",i=>{i.preventDefault(),f=1,v(i)});a.addEventListener("click",i=>{u.classList.remove("is-hidden"),f+=1,L($,f,15).then(t=>{const r=t.hits;if(r.length<15)return a.style.display="none",q();l.insertAdjacentHTML("beforeend",b(r)),new m(".gallery a.gallery-link",{captionsData:"alt",captionDelay:300}).refresh(),u.scrollIntoView(),u.classList.add("is-hidden")}).catch(t=>alert(t.message))});function y(){h.error({message:"Sorry, there are no images matching your search query. Please try again!",title:"Error",titleColor:"#fff",backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"#fff",position:"topRight"})}function q(){h.info({title:"Info",position:"topCenter",backgroundColor:"blue",message:"We're sorry, but you've reached the end of search results."})}
//# sourceMappingURL=commonHelpers.js.map
