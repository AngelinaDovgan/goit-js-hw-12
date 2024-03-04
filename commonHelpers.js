import{S as m,i as h}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function b(i){return i.map(({webformatURL:t,largeImageURL:n,tags:o,likes:e,views:r,comments:s,downloads:y})=>`<li class="main-image">
  <a class="gallery-link" href="${n}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${o}"
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
  <p>${y}</p>
  </li>

  </ul>
</li>`).join("")}async function L(i,t,n){const o="42523874-92f67aed3babfb2c9b36364a5",e="https://pixabay.com/api/",r=i.trim(),c=await fetch(`${e}?key=${o}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${n}`);if(!c.ok)throw new Error(c.status);return c.json()}const l=document.querySelector(".gallery"),g=document.querySelector(".input-img"),S=document.querySelector(".form");document.querySelector(".btn-sub");const f=document.querySelector(".loading"),a=document.querySelector('[data-action="load-more"]'),u=document.querySelector(".spinner");let d=1,$;f.style.display="none";a.style.display="none";function v(i){i.preventDefault(),l.innerHTML="";const t=g.value.trim();f.style.display="inline-block",a.style.display="inline-block",L(t,1,15).then(n=>{if(!n.hits||n.hits.length===0)return a.style.display="none",l.innerHTML="",p();const o=n.hits;if(o.length<15)return a.style.display="none",q();if($=t,!o.length||!t)return l.innerHTML="",p();l.innerHTML=b(o),new m(".gallery a.gallery-link",{captionsData:"alt",captionDelay:300}).refresh()}).catch(n=>{console.log(n),p()}).finally(()=>{f.style.display="none"}),g.value=""}S.addEventListener("submit",i=>{i.preventDefault(),d=1,v(i)});a.addEventListener("click",i=>{u.classList.remove("is-hidden"),d+=1,L($,d,15).then(t=>{const n=t.hits;if(n.length<15)return a.style.display="none",q();l.insertAdjacentHTML("beforeend",b(n)),new m(".gallery a.gallery-link",{captionsData:"alt",captionDelay:300}).refresh(),u.scrollIntoView(),u.classList.add("is-hidden")}).catch(t=>alert(t.message))});function p(){h.error({message:"Sorry, there are no images matching your search query. Please try again!",title:"Error",titleColor:"#fff",backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"#fff",position:"topRight"})}function q(){h.info({title:"Info",position:"topCenter",backgroundColor:"blue",message:"We're sorry, but you've reached the end of search results."})}
//# sourceMappingURL=commonHelpers.js.map
