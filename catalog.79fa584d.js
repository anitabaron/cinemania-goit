!function(){function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},a={},r=n.parcelRequired7c6;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in a){var n=a[t];delete a[t];var r={id:t,exports:{}};return e[t]=r,n.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,n){a[t]=n},n.parcelRequired7c6=r);var o=r("bpxeT"),i=r("dDDEV"),s=r("2TvXO"),c=r("dIxxU"),l=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],u=function(t,n,e,a,r){return'\n            <div class="catalog__form" id="navForm">\n                <button class="btn btn__orange-gradient" id="firstPageBtn"> << </button>\n                <button class="btn btn__orange-gradient" id="previousPage"> < </button>\n                <button class="btn btn__orange-gradient" id="PageBtn1">'.concat(t,'</button>\n                <button class="btn btn__orange-gradient" id="PageBtn2">').concat(n,'</button>\n                <button class="btn btn__orange-gradient" id="PageBtn3">').concat(e,'</button>\n                <button class="btn btn__orange-gradient" id="PageBtn4">').concat(a,'</button>\n                <button class="btn btn__orange-gradient" id="PageBtn5">').concat(r,'</button>\n                <button class="btn btn__orange-gradient" id="nextPage"> > </button>\n                <button class="btn btn__orange-gradient" id="lastPageBtn"> >> </button>\n            </div>')},g={page:1,language:"en-US",api_key:"682127ed972e56f6bb70ae743d23c1d7"},d={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat(g.api_key)}},b={urlDay:"https://api.themoviedb.org/3/trending/movie/day",urlWeek:"https://api.themoviedb.org/3/trending/movie/week",urlSearch:"https://api.themoviedb.org/3/search/movie",url:"",title:"",maxPages:1},_=function(t,n){var e=Math.floor(t),a=t%1>=.5?1:0,r=5-e-a;return"\n    ".concat('\n<svg class="star"  viewBox="0 0 18 18" fill="rgba(248, 65, 25, 1)" xmlns="http://www.w3.org/2000/svg">\n  <path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>\n  <defs>\n    <linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">\n      <stop stop-color="#F84119"/>\n      <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>\n    </linearGradient>\n  </defs>\n</svg>'.replace("star",n).repeat(e),"\n    ").concat('\n<svg class="star" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <defs>\n    <linearGradient id="paint0_linear_4641_33902" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">\n      <stop stop-color="#F84119"/>\n      <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>\n    </linearGradient>\n  </defs>\n  <mask id="halfMask">\n    <rect x="0" y="0" width="9" height="18" fill="white"/>\n  </mask>\n  <path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_4641_33902)" stroke-linejoin="round" fill="none"/>\n  <path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" fill="url(#paint0_linear_4641_33902)" mask="url(#halfMask)"/>\n</svg>'.replace("star",n).repeat(a),"\n    ").concat('\n<svg class="star" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <defs>\n    <linearGradient id="paint0_linear_4641_33902" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">\n      <stop stop-color="#F84119"/>\n      <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>\n    </linearGradient>\n  </defs>\n  <path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_4641_33902)" stroke-linejoin="round" fill="none"/>\n</svg>'.replace("star",n).repeat(r),"\n  ")},p=function(){document.querySelector("#catalg").innerHTML='<div class="hero_background container">\n                                    <h3 class="catalog__text-sorry">OOPS...</h3>\n                                    <p class="catalog__text-sorry"> We are very sorry! We dont have any results matching your search.</p>\n                                </div>'},m=function(t){var n=document.querySelector("#catalg"),e="";t.forEach((function(t){e+=function(t){var n=function(t,n){for(var e=[],a=0;a<t.length;a+=1)n.includes(t[a].id)&&e.push(t[a].name);return e.slice(0,2).join(", ")}(l,t.genre_ids),e=t.release_date.slice(0,4),a=t.vote_average/2,r=_(a);return function(t,n,e,a,r,o){var i="https://image.tmdb.org/t/p/w500".concat(n);return null===n&&(i="src/images/oops_warning_mobile.png"),'<li id="'.concat(t,'">\n              <div class="movielist-item" data-id="').concat(t,'"\n                   style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), \n                   url(').concat(i,');\n                    background-repeat: no-repeat;\n                    background-size: cover; \n                    background-position: center">\n                    <div class="movielist__information-box">\n                      <div class="movielist__title-box">\n                        <p class ="movielist__movie-title">').concat(e,'</p>\n                        <p class ="movielist__movie-genre"> ').concat(a," | ").concat(r,'</p>\n                      </div>\n                      <ul class="movielist__movie-rating">\n                      ').concat(o,"\n\t\t\t\t\t            </ul>\n\t\t\t\t\t          </div>\n              </div>\n          </li>")}(t.id,t.backdrop_path,t.title,n,e,r)}(t)})),n.innerHTML=e},v=function(t,n){if(console.log(n),1!==n){var e=document.querySelector("#pagesBtnSection"),a={pageBtn1:1,pageBtn2:2,pageBtn3:3,pageBtn4:4,pageBtn5:5};return 2===n?(e.innerHTML='\n            <div class="catalog__form" id="navForm">\n                <button class="btn btn__orange-gradient" id="previousPage"> < </button>\n                <button class="btn btn__orange-gradient" id="PageBtn1">1</button>\n                <button class="btn btn__orange-gradient" id="PageBtn2">2</button>\n                <button class="btn btn__orange-gradient" id="nextPage"> > </button>\n            </div>',1===t&&document.querySelector("#PageBtn1").classList.replace("btn__orange-gradient","btn__black"),void(2===t&&document.querySelector("#PageBtn2").classList.replace("btn__orange-gradient","btn__black"))):3===n?(e.innerHTML='\n            <div class="catalog__form" id="navForm">\n                <button class="btn btn__orange-gradient" id="firstPageBtn"> << </button>\n                <button class="btn btn__orange-gradient" id="previousPage"> < </button>\n                <button class="btn btn__orange-gradient" id="PageBtn1">1</button>\n                <button class="btn btn__orange-gradient" id="PageBtn2">2</button>\n                <button class="btn btn__orange-gradient" id="PageBtn3">3</button>\n                <button class="btn btn__orange-gradient" id="nextPage"> > </button>\n                <button class="btn btn__orange-gradient" id="lastPageBtn"> >> </button>\n            </div>',1===t&&document.querySelector("#PageBtn1").classList.replace("btn__orange-gradient","btn__black"),2===t&&document.querySelector("#PageBtn2").classList.replace("btn__orange-gradient","btn__black"),void(3===t&&document.querySelector("#PageBtn3").classList.replace("btn__orange-gradient","btn__black"))):4===n?(e.innerHTML='\n            <div class="catalog__form" id="navForm">\n                <button class="btn btn__orange-gradient" id="firstPageBtn"> << </button>\n                <button class="btn btn__orange-gradient" id="previousPage"> < </button>\n                <button class="btn btn__orange-gradient" id="PageBtn1">1</button>\n                <button class="btn btn__orange-gradient" id="PageBtn2">2</button>\n                <button class="btn btn__orange-gradient" id="PageBtn3">3</button>\n                <button class="btn btn__orange-gradient" id="PageBtn4">4}</button>\n                <button class="btn btn__orange-gradient" id="nextPage"> > </button>\n                <button class="btn btn__orange-gradient" id="lastPageBtn"> >> </button>\n            </div>',1===t&&document.querySelector("#PageBtn1").classList.replace("btn__orange-gradient","btn__black"),2===t&&document.querySelector("#PageBtn2").classList.replace("btn__orange-gradient","btn__black"),3===t&&document.querySelector("#PageBtn3").classList.replace("btn__orange-gradient","btn__black"),void(3===t&&document.querySelector("#PageBtn3").classList.replace("btn__orange-gradient","btn__black"))):t<4?(e.innerHTML=u(a.pageBtn1,a.pageBtn2,a.pageBtn3,a.pageBtn4,a.pageBtn5),1===t&&document.querySelector("#PageBtn1").classList.replace("btn__orange-gradient","btn__black"),2===t&&document.querySelector("#PageBtn2").classList.replace("btn__orange-gradient","btn__black"),void(3===t&&document.querySelector("#PageBtn3").classList.replace("btn__orange-gradient","btn__black"))):t+3>n?(a.pageBtn1=n-4,a.pageBtn2=n-3,a.pageBtn3=n-2,a.pageBtn4=n-1,a.pageBtn5=n,e.innerHTML=u(a.pageBtn1,a.pageBtn2,a.pageBtn3,a.pageBtn4,a.pageBtn5),t===n-2&&document.querySelector("#PageBtn3").classList.replace("btn__orange-gradient","btn__black"),t===n-1&&document.querySelector("#PageBtn4").classList.replace("btn__orange-gradient","btn__black"),void(t===n&&document.querySelector("#PageBtn5").classList.replace("btn__orange-gradient","btn__black"))):t>3?(a.pageBtn1=t-2,a.pageBtn2=t-1,a.pageBtn3=t,a.pageBtn4=t+1,a.pageBtn5=t+2,e.innerHTML=u(a.pageBtn1,a.pageBtn2,a.pageBtn3,a.pageBtn4,a.pageBtn5),void document.querySelector("#PageBtn3").classList.replace("btn__orange-gradient","btn__black")):void 0}};function f(){document.querySelector("#hero").innerHTML='<div class="hero_background container">\n        <h2 class="hero__text-1">Let’s Make Your Own Cinema</h2>\n        <h3 class="hero__text-2" id="hero_text">Is a guide to creating a personalized movie theater experience. You\'ll need a projector, screen, and speakers.</h3>\n        <button class="hero__button" onclick="window.location.href=\'catalog.html\';">\n          <span class="hero__span-button">Get Started</span>\n        </button>\n      </div>'}var h,B=function(n){return c.default.get(n,t(i)({params:g},d)).then((function(t){var e=t.data.results.length;if(n.includes("day"))return 0===e?void f():void function(t){var n,e,a,r,o,i,s,c=document.querySelector("#hero"),l=Math.floor(Math.random()*t.data.results.length),u=t.data.results[l],g=(n=u.overview,e=200,n.length>e?n.slice(0,e)+"...":n),d=u.vote_average/2,b=_(d,"hero-star");c.innerHTML=(a=u.id,r=u.backdrop_path,o=u.title,i=b,s=g,'<div class="hero__background container " data-id="'.concat(a,'"\n          style="background-image: linear-gradient(86.77deg, rgb(17, 17, 17) 30.38%, rgba(17, 17, 17, 0) 65.61%), \n          url(https://image.tmdb.org/t/p/original').concat(r,')">\n          <h2 class="hero__text-1">').concat(o,'</h2>\n          <ul class="movielist__rating-hero">\n            ').concat(i,'\n          </ul>\n          <p class="hero__text-2" id="hero_text">').concat(s,'</p>\n          <div class="buttons" >\n            <button class="btn__hero-1" data-id="').concat(a,'">Watch trailer</button>\n            <button class="btn__hero-2" data-id="').concat(a,'">More details</button>\n          </div>\n         </div>'))}(t);0!==e?(b.maxPages=t.data.total_pages,b.url=n,m(t.data.results),v(g.page,b.maxPages)):p()})).catch((function(t){return p(),f(),console.log(t)}))},y=(h=t(o)(t(s).mark((function n(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([B(b.urlDay),B(b.urlWeek)]);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),n)}))),function(){return h.apply(this,arguments)});y();var P=function(n){return c.default.get(n,t(i)({params:g},d)).then((function(t){var n=t.data.results.length;document.querySelector("#catalg").hasChildNodes()&&document.querySelectorAll("#catalg > li").forEach((function(t){return t.remove()}));null!==document.querySelector("#navForm")&&document.querySelector("#navForm").remove(),0!==n?(b.maxPages=t.data.total_pages,m(t.data.results),v(g.page,b.maxPages)):p()})).catch((function(t){return p(),v(g.page,b.maxPages),console.log(t)}))};window.addEventListener("click",(function(n){try{if("searchBtn"===n.target.id){if(n.preventDefault(),""==document.querySelector("#catalogFormInput").value.trim())return;b.url="https://api.themoviedb.org/3/search/movie",g.page=1,b.title=document.querySelector("#catalogFormInput").value.trim();var e="".concat(b.url,"?query=").concat(b.title,"&include_adult=false"),a=function(){var n=t(o)(t(s).mark((function n(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();a()}if("navForm"===n.target.parentElement.id&"previousPage"!==n.target.id&"nextPage"!==n.target.id&"firstPageBtn"!==n.target.id&"lastPageBtn"!==n.target.id){n.preventDefault(),g.page=parseInt(n.target.textContent);var r=b.url;r.includes("search")&&(r+="?query=".concat(b.title,"&include_adult=false"));var i=function(){var n=t(o)(t(s).mark((function n(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();i()}if("previousPage"===n.target.id||"nextPage"===n.target.id){"previousPage"===n.target.id&&(console.log("previousPage"),g.page>1&&(g.page=g.page-1)),"nextPage"===n.target.id&&(console.log("nextPage"),g.page<b.maxPages&&(g.page=g.page+1));var c="".concat(b.url,"?query=").concat(b.title,"&include_adult=false"),l=function(){var n=t(o)(t(s).mark((function n(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(c);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();l()}if("firstPageBtn"===n.target.id||"lastPageBtn"===n.target.id){"firstPageBtn"===n.target.id&&(console.log("firstPageBtn"),g.page=1),"lastPageBtn"===n.target.id&&(console.log("lastPageBtn"),g.page=b.maxPages);var u="".concat(b.url,"?query=").concat(b.title,"&include_adult=false"),d=function(){var n=t(o)(t(s).mark((function n(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(u);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();d()}}catch(t){console.error(t)}}))}();
//# sourceMappingURL=catalog.79fa584d.js.map
