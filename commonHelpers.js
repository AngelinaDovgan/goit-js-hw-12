import{S as m,i as h}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();function b(i){return i.map(({webformatURL:t,largeImageURL:o,tags:r,likes:e,views:n,comments:l,downloads:y})=>`<li class="main-image">
  <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src="${t}"
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
  <p>${n}</p>
  </li>

   <li class="reactions">
  <h3>Comments</h3>
  <p>${l}</p>
  </li>

   <li class="reactions">
  <h3>Downloads</h3>
  <p>${y}</p>
  </li>

  </ul>
</li>`).join("")}async function L(i,t,o){const r="42523874-92f67aed3babfb2c9b36364a5",e="https://pixabay.com/api/",n=i.trim(),c=await fetch(`${e}?key=${r}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${o}`);if(!c.ok)throw new Error(c.status);return c.json()}const a=document.querySelector(".gallery"),g=document.querySelector(".input-img"),S=document.querySelector(".form");document.querySelector(".btn-sub");const f=document.querySelector(".loading"),s=document.querySelector('[data-action="load-more"]'),u=document.querySelector(".spinner");let d=1,$;f.style.display="none";s.style.display="none";function v(i){i.preventDefault(),a.innerHTML="";const t=g.value.trim();f.style.display="inline-block",s.style.display="inline-block",L(t,1,15).then(o=>{if(!o.hits||o.hits.length===0)return s.style.display="none",a.innerHTML="",p();const r=o.hits;if(r.length<15)return s.style.display="none",q();if($=t,!r.length||!t)return s.style.display="none",a.innerHTML="",p();a.innerHTML=b(r),new m(".gallery a.gallery-link",{captionsData:"alt",captionDelay:300}).refresh()}).catch(o=>{console.log(o),p()}).finally(()=>{f.style.display="none"}),g.value=""}S.addEventListener("submit",i=>{i.preventDefault(),d=1,v(i)});s.addEventListener("click",i=>{u.classList.remove("is-hidden"),d+=1,L($,d,15).then(t=>{const o=t.hits;if(o.length<15)return s.style.display="none",q();a.insertAdjacentHTML("beforeend",b(o)),new m(".gallery a.gallery-link",{captionsData:"alt",captionDelay:300}).refresh(),u.scrollIntoView(),u.classList.add("is-hidden")}).catch(t=>alert(t.message))});function p(){h.error({message:"Sorry, there are no images matching your search query. Please try again!",title:"Error",titleColor:"#fff",backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"#fff",position:"topRight"})}function q(){h.info({title:"Info",position:"topCenter",backgroundColor:"blue",message:"We're sorry, but you've reached the end of search results."})}
//# sourceMappingURL=commonHelpers.js.map
