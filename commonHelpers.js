import{S as y,i as m}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function h(i){return i.map(({webformatURL:o,largeImageURL:r,tags:n,likes:e,views:t,comments:s,downloads:d})=>`<li class="main-image">
  <a class="gallery-link" href="${r}">
    <img
      class="gallery-image"
      src="${o}"
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
</li>`).join("")}async function b(i,o,r){const n="42523874-92f67aed3babfb2c9b36364a5",e="https://pixabay.com/api/",t=i.trim(),c=await fetch(`${e}?key=${n}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${r}`);if(!c.ok)throw new Error(c.status);return c.json()}const l=document.querySelector(".gallery"),g=document.querySelector(".input-img"),q=document.querySelector(".form");document.querySelector(".btn-sub");const p=document.querySelector(".loading"),a=document.querySelector('[data-action="load-more"]'),u=document.querySelector(".spinner");let f=1,L;p.style.display="none";a.style.display="none";function S(i){i.preventDefault(),l.innerHTML="";const o=g.value.trim();p.style.display="inline-block",a.style.display="inline-block",b(o,1,15).then(r=>{const n=r.hits;if(n.length<15)return a.style.display="none",$();if(L=o,n.length)l.innerHTML=h(n),new y(".gallery a.gallery-link",{captionsData:"alt",captionDelay:300}).refresh();else return l.innerHTML="",v()}).catch(r=>console.log(r)).finally(()=>{p.style.display="none"}),g.value=""}q.addEventListener("submit",i=>{i.preventDefault(),f=1,S(i)});a.addEventListener("click",i=>{u.classList.remove("is-hidden"),f+=1,b(L,f,15).then(o=>{const r=o.hits;if(r.length<15)return a.style.display="none",$();l.insertAdjacentHTML("beforeend",h(r)),new y(".gallery a.gallery-link",{captionsData:"alt",captionDelay:300}).refresh(),u.scrollIntoView,u.classList.add("is-hidden")}).catch(o=>alert(o.message))});function v(){m.error({message:"Sorry, there are no images matching your search query. Please try again!",title:"Error",titleColor:"#fff",backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"#fff",position:"topRight"})}function $(){m.info({title:"Info",position:"topCenter",backgroundColor:"blue",message:"We're sorry, but you've reached the end of search results."})}
//# sourceMappingURL=commonHelpers.js.map
