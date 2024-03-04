import{S as m,i as h}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function b(i){return i.map(({webformatURL:t,largeImageURL:o,tags:n,likes:e,views:r,comments:s,downloads:g})=>`<li class="main-image">
  <a class="gallery-link" href="${o}">
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
  <p>${r}</p>
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
</li>`).join("")}async function L(i,t,o){const n="42523874-92f67aed3babfb2c9b36364a5",e="https://pixabay.com/api/",r=i.trim(),c=await fetch(`${e}?key=${n}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${o}`);if(!c.ok)throw new Error(c.status);return c.json()}const a=document.querySelector(".gallery"),y=document.querySelector(".input-img"),S=document.querySelector(".form");document.querySelector(".btn-sub");const p=document.querySelector(".loading"),l=document.querySelector('[data-action="load-more"]'),u=document.querySelector(".spinner");let d=1,$;p.style.display="none";l.style.display="none";function v(i){i.preventDefault(),a.innerHTML="";const t=y.value.trim();p.style.display="inline-block",l.style.display="inline-block",L(t,1,15).then(o=>{if(!o.hits||o.hits.length===0)return a.innerHTML="",f();const n=o.hits;if(n.length<15)return l.style.display="none",q();if($=t,!n.length||!t)return a.innerHTML="",f();a.innerHTML=b(n),new m(".gallery a.gallery-link",{captionsData:"alt",captionDelay:300}).refresh()}).catch(o=>{console.log(o),f()}).finally(()=>{p.style.display="none"}),y.value=""}S.addEventListener("submit",i=>{i.preventDefault(),d=1,v(i)});l.addEventListener("click",i=>{u.classList.remove("is-hidden"),d+=1,L($,d,15).then(t=>{const o=t.hits;if(o.length<15)return l.style.display="none",q();a.insertAdjacentHTML("beforeend",b(o)),new m(".gallery a.gallery-link",{captionsData:"alt",captionDelay:300}).refresh(),u.scrollIntoView(),u.classList.add("is-hidden")}).catch(t=>alert(t.message))});function f(){h.error({message:"Sorry, there are no images matching your search query. Please try again!",title:"Error",titleColor:"#fff",backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"#fff",position:"topRight"})}function q(){h.info({title:"Info",position:"topCenter",backgroundColor:"blue",message:"We're sorry, but you've reached the end of search results."})}
//# sourceMappingURL=commonHelpers.js.map
