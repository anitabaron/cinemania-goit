var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var g=new Error("Cannot find module '"+e+"'");throw g.code="MODULE_NOT_FOUND",g}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n);var r=n("2shzp"),g=n("94Fp6");const o={page:1,language:"en-US",api_key:"682127ed972e56f6bb70ae743d23c1d7"},l={method:"GET",headers:{accept:"application/json",Authorization:`Bearer ${o.api_key}`}},s={urlDay:"https://api.themoviedb.org/3/trending/movie/day",urlWeek:"https://api.themoviedb.org/3/trending/movie/week",urlSearch:"https://api.themoviedb.org/3/search/movie",url:"",title:"",maxPages:1},c=(e,t)=>{const a=Math.floor(e),n=e%1>=.5?1:0,r=5-a-n;return`\n    ${g.fullStar.replace("star",t).repeat(a)}\n    ${g.halfStar.replace("star",t).repeat(n)}\n    ${g.emptyStar.replace("star",t).repeat(r)}\n  `},i=()=>{document.querySelector("#catalg").innerHTML=g.emptyApiResponeCatalog},d=e=>{const t=document.querySelector("#catalg");let a="";e.forEach((e=>{a+=(e=>{const t=((e,t)=>{const a=[];for(let n=0;n<e.length;n+=1)t.includes(e[n].id)&&a.push(e[n].name);return a.slice(0,2).join(", ")})(g.genres,e.genre_ids),a=e.release_date.slice(0,4),n=e.vote_average/2,r=c(n,"card-star");return(0,g.topMoviesFragment)(e.id,e.backdrop_path,e.title,t,a,r)})(e)})),t.innerHTML=a},p=(e,t)=>{if(1===t)return;const a=document.querySelector("#pagesBtnSection"),n={pageBtn1:1,pageBtn2:2,pageBtn3:3,pageBtn4:4,pageBtn5:5};return 2===t?(a.innerHTML=g.pagesBtn2,1===e&&document.querySelector("#PageBtn1").classList.replace("btn__grey","btn__orange-gradient"),void(2===e&&document.querySelector("#PageBtn2").classList.replace("btn__grey","btn__orange-gradient"))):3===t?(a.innerHTML=g.pagesBtn3,1===e&&document.querySelector("#PageBtn1").classList.replace("btn__grey","btn__orange-gradient"),2===e&&document.querySelector("#PageBtn2").classList.replace("btn__grey","btn__orange-gradient"),void(3===e&&document.querySelector("#PageBtn3").classList.replace("btn__grey","btn__orange-gradient"))):4===t?(a.innerHTML=g.pagesBtn4,1===e&&document.querySelector("#PageBtn1").classList.replace("btn__grey","btn__orange-gradient"),2===e&&document.querySelector("#PageBtn2").classList.replace("btn__grey","btn__orange-gradient"),3===e&&document.querySelector("#PageBtn3").classList.replace("btn__grey","btn__orange-gradient"),void(3===e&&document.querySelector("#PageBtn3").classList.replace("btn__grey","btn__orange-gradient"))):e<4?(a.innerHTML=(0,g.pagesBtn)(n.pageBtn1,n.pageBtn2,n.pageBtn3,n.pageBtn4,n.pageBtn5),1===e&&document.querySelector("#PageBtn1").classList.replace("btn__grey","btn__orange-gradient"),2===e&&document.querySelector("#PageBtn2").classList.replace("btn__grey","btn__orange-gradient"),void(3===e&&document.querySelector("#PageBtn3").classList.replace("btn__grey","btn__orange-gradient"))):e+3>t?(n.pageBtn1=t-4,n.pageBtn2=t-3,n.pageBtn3=t-2,n.pageBtn4=t-1,n.pageBtn5=t,a.innerHTML=(0,g.pagesBtn)(n.pageBtn1,n.pageBtn2,n.pageBtn3,n.pageBtn4,n.pageBtn5),e===t-2&&document.querySelector("#PageBtn3").classList.replace("btn__grey","btn__orange-gradient"),e===t-1&&document.querySelector("#PageBtn4").classList.replace("btn__grey","btn__orange-gradient"),void(e===t&&document.querySelector("#PageBtn5").classList.replace("btn__grey","btn__orange-gradient"))):e>3?(n.pageBtn1=e-2,n.pageBtn2=e-1,n.pageBtn3=e,n.pageBtn4=e+1,n.pageBtn5=e+2,a.innerHTML=(0,g.pagesBtn)(n.pageBtn1,n.pageBtn2,n.pageBtn3,n.pageBtn4,n.pageBtn5),void document.querySelector("#PageBtn3").classList.replace("btn__grey","btn__orange-gradient")):void 0};function u(){document.querySelector("#hero").innerHTML=g.emptyApiResponeHero}const _=e=>r.default.get(e,{params:o,...l}).then((t=>{const a=t.data.results.length;if(e.includes("day"))return 0===a?void u():void(e=>{const t=document.querySelector("#hero"),a=Math.floor(Math.random()*e.data.results.length),n=e.data.results[a],r=(o=n.overview,l=200,o.length>l?o.slice(0,l)+"...":o);var o,l;const s=n.vote_average/2,i=c(s,"hero-star");t.innerHTML=(0,g.heroFragment)(n.id,n.backdrop_path,n.title,i,r)})(t);0!==a?(t.data.total_pages>501?s.maxPages=501:s.maxPages=t.data.total_pages,s.url=e,d(t.data.results),p(o.page,s.maxPages)):i()})).catch((e=>(i(),u(),console.log(e))));(async()=>{await Promise.all([_(s.urlDay),_(s.urlWeek)])})();const m=e=>r.default.get(e,{params:o,...l}).then((e=>{const t=e.data.results.length;if(document.querySelector("#catalg").hasChildNodes()){document.querySelectorAll("#catalg > li").forEach((e=>e.remove()))}null!==document.querySelector("#navForm")&&document.querySelector("#navForm").remove(),0!==t?(e.data.total_pages>501?s.maxPages=501:s.maxPages=e.data.total_pages,d(e.data.results),p(o.page,s.maxPages)):i()})).catch((e=>(i(),p(o.page,s.maxPages),console.log(e))));window.addEventListener("click",(e=>{try{if("searchBtn"===e.target.id){if(e.preventDefault(),""==document.querySelector("#catalogFormInput").value.trim())return;s.url="https://api.themoviedb.org/3/search/movie",o.page=1,s.title=document.querySelector("#catalogFormInput").value.trim();const t=`${s.url}?query=${s.title}&include_adult=false`;(async()=>await m(t))()}if("navForm"===e.target.parentElement.id&"previousPage"!==e.target.id&"nextPage"!==e.target.id&"firstPageBtn"!==e.target.id&"lastPageBtn"!==e.target.id){e.preventDefault(),o.page=parseInt(e.target.textContent);let t=s.url;t.includes("search")&&(t+=`?query=${s.title}&include_adult=false`);(async()=>await m(t))()}if("previousPage"===e.target.id||"nextPage"===e.target.id){"previousPage"===e.target.id&&o.page>1&&(o.page=o.page-1),"nextPage"===e.target.id&&o.page<s.maxPages&&(o.page=o.page+1);const t=`${s.url}?query=${s.title}&include_adult=false`;(async()=>await m(t))()}if("firstPageBtn"===e.target.id||"lastPageBtn"===e.target.id){"firstPageBtn"===e.target.id&&(o.page=1),"lastPageBtn"===e.target.id&&(o.page=s.maxPages);const t=`${s.url}?query=${s.title}&include_adult=false`;(async()=>await m(t))()}}catch(e){console.error(e)}}));
//# sourceMappingURL=catalog.7981651f.js.map