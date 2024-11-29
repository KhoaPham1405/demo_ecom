/* Publish by EComposer at 2024-07-25 10:07:41*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-rtdsty58k8l"]=  window.__ectimmers["ecom-rtdsty58k8l"] || {};
if(!this.$el)return;const e=this.$el,i=e.querySelector(".ecom-text_view-more-btn"),t=e.querySelector(".ecom-text_view-less-btn"),n=e.querySelector(".text-content.ecom-html");!n||(i&&i.addEventListener("click",()=>{n.classList.remove("ecom-text--is-mark"),n.style.maxHeight="",i.style.display="none",t.style.display=""}),t&&t.addEventListener("click",()=>{n.classList.add("ecom-text--is-mark"),n.style.maxHeight="var(--ecom-text-height)",t.style.display="none",i.style.display=""}))

                    });
                    
                        document.querySelectorAll('.ecom-rtdsty58k8l').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-rtdsty58k8l', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-rhzvaypa0qd').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-rhzvaypa0qd', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-7juap0hu1y9').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-7juap0hu1y9', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-f73omapgl99').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-f73omapgl99', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-yuf8gnmlp7j').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-yuf8gnmlp7j', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-eoov5j2ozss').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-eoov5j2ozss', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-jjh77cgyo8s').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-jjh77cgyo8s', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-9kfo1owzgj').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-9kfo1owzgj', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-xpha982qdjo').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-xpha982qdjo', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-i6nghxv0t2i"]=  window.__ectimmers["ecom-i6nghxv0t2i"] || {};
if(!this.$el)return!1;const e=this.$el;this.settings.animation&&function(t){if(!e)return;const n=e.querySelector(".ecom__element--button");if(!n)return;let s=parseInt(t.settings.animation_loop_time)*1e3||6e3,o=1e3;window.__ectimmers["ecom-i6nghxv0t2i"]["jn3sf5mbx"] = setInterval(function(){n.classList.add("animated"),setTimeout(function(){n.classList.remove("animated")},o)},s)}(this);var i=e.querySelector(".ecom__element--button");this.isLive&&i&&i.dataset.ecTrackingId&&i.addEventListener("click",function(t){if(window.Shopify.analytics){t.preventDefault();let n=document.createElement("div");document.body.appendChild(n),n.click(),Shopify.analytics.publish("ec_custom_events",{button_id:i.id,tracking_id:i.dataset.ecTrackingId}),i.cloneNode(!0).click()}},{once:!0}),this.isLive&&i&&i.dataset.eventTrackingFb&&i.addEventListener("click",function(t){window.fbq&&window.fbq("track",`${i.dataset.eventTrackingFb}`)},{once:!0})

                    });
                    
                        document.querySelectorAll('.ecom-i6nghxv0t2i').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-i6nghxv0t2i', settings: {"animation":false},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-a80obzuq6lo').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-a80obzuq6lo', settings: {"animation":false},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-yj4nfleztni"]=  window.__ectimmers["ecom-yj4nfleztni"] || {};
const e=this.$el;if(!e||!this.isLive)return;const i=e.querySelector(".element__featured--wrapper-list");if(i){let t={top:0,left:0,x:0,y:0};const n=function(a){const r=a.clientX-t.x;i.scrollLeft=t.left-r},s=function(){i.removeEventListener("mousemove",n),i.removeEventListener("mouseup",s),i.style.cursor="default",i.style.removeProperty("user-select")},o=function(a){i.style.cursor="grabbing",i.style.userSelect="none",t={left:i.scrollLeft,top:i.scrollTop,x:a.clientX,y:a.clientY},i.addEventListener("mousemove",n),i.addEventListener("mouseup",s)};i.addEventListener("mousedown",o),i.addEventListener("mouseleave",s)}

                    });
                    
                        document.querySelectorAll('.ecom-yj4nfleztni').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-yj4nfleztni', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-ukodm6k0y6j"]=  window.__ectimmers["ecom-ukodm6k0y6j"] || {};
if(this.settings.link==="lightbox"&&this.settings.lightbox==="yes"&&window.EComModal&&this.$el){var e=this.$el.querySelector("[ecom-modal]");new window.EComModal(e,{cssClass:["ecom-container-lightbox-"+this.id]})}let i=this.$el;if(!i)return;function t(s){const o=s.getBoundingClientRect();return o.top>=0&&o.left>=0&&o.bottom-s.offsetHeight/2<=(window.innerHeight||document.documentElement.clientHeight)&&o.right<=(window.innerWidth||document.documentElement.clientWidth)}function n(){let s=i.querySelector(".ecom-element.ecom-base-image"),o=i.closest(".core__row--columns");s&&(t(s)?(s.classList.add("image-highlight"),o.setAttribute("style","z-index: unset")):(s.classList.remove("image-highlight"),o.setAttribute("style","z-index: 1")))}this.settings.highligh_on_viewport&&window.addEventListener("scroll",function(){n()})

                    });
                    
                        document.querySelectorAll('.ecom-ukodm6k0y6j').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ukodm6k0y6j', settings: {"link":"none","lightbox":"no","highligh_on_viewport":false},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-xb5q2uk3kgc').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-xb5q2uk3kgc', settings: {"link":"none","lightbox":"no","highligh_on_viewport":false},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-4rqqq77quvm').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-4rqqq77quvm', settings: {"link":"none","lightbox":"no","highligh_on_viewport":false},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-qtpplvjr2x"]=  window.__ectimmers["ecom-qtpplvjr2x"] || {};
let e=this.$el.querySelector(".ecom-shopify__article__description-view-more-btn"),l=this.settings.content_type,s=this.$el.querySelector(".ecom-shopify__article__description--full"),r=this.$el.querySelector(".ecom-shopify__article__description--paragraph");e&&e.addEventListener("click",function(){l==="text"&&s?(s.style.display="inherit",r.style.display="none"):r.style.maxHeight=null,this.style.display="none"})

                    });
                    
                        document.querySelectorAll('.ecom-qtpplvjr2x').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-qtpplvjr2x', settings: {"content_type":"html"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-jb71kmw9ve"]=  window.__ectimmers["ecom-jb71kmw9ve"] || {};
const t=this.$el;if(!t)return!1;const n=t.querySelector(".ecom-swiper-container"),e=this.settings,b=this.settings.slider_loop,f=this.settings.slider_center,i=this.settings.slider_center__tablet,a=this.settings.slider_center__mobile;if(this.settings.slider_group,this.settings.slider_items,this.settings.slider_group__tablet,this.settings.slider_items__tablet,this.settings.slider_group__mobile,this.settings.slider_items__mobile,!n)return;var o=n.dataset.optionSwiper;try{o=o?JSON.parse(o):{}}catch(s){o={}}o.navigation||(o.navigation={}),o.pagination||(o.pagination={});const u=function(s,r={},m=""){return m=="loop"?((window.innerWidth>1024&&(s.items.length<s.slider_group+s.slider_items||s.slider_autoplay)||window.innerWidth<=1024&&window.innerWidth>768&&(s.items.length<s.slider_group__tablet+s.slider_items__tablet||s.slider_autoplay)||s.items.length<s.slider_group__mobile+s.slider_items__mobile||s.slider_autoplay)&&(r.loop=!1),r):(window.innerWidth>1024&&s.speed&&(r[`${m}`]=s[0]),window.innerWidth<=1024&&window.innerWidth>768&&s[1]?r[`${m}`]=s[1]:s[0]&&(r[`${m}`]=s[0]),window.innerWidth<768&&s[2]?r[`${m}`]=s[2]:s[1]?r[`${m}`]=s[1]:s[0]&&(r[`${m}`]=s[0]),r)};o.pagination.el=t.querySelector(".ecom-swiper-pagination"),o.navigation.nextEl=t.querySelector(".ecom-swiper-button-next"),o.navigation.prevEl=t.querySelector(".ecom-swiper-button-prev"),o.pagination.renderBullet=(s,r)=>`<span class="${r}">
                            ${this.settings.items[s]&&this.settings.items[s].slider_pagination_image?`<img src="${this.settings.items[s].slider_pagination_image}" loading="lazy">`:""}</span>`,o.on={init:()=>{setTimeout(()=>{n.classList.remove("ecom-d-hide")})}},b&&(o.loop=!0,o=u(e,o,"loop")),o=u([f,i,a],o,"centeredSlides"),this.settings.hasOwnProperty("slider_layout")&&this.settings.slider_layout=="vertical"&&(o.direction="vertical"),new window.EComSwiper(n,Object.assign(o,{allowTouchMove:this.isLive})),window.addEventListener("resize",()=>{n.swiper.update()})

                    });
                    
                        document.querySelectorAll('.ecom-jb71kmw9ve').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-jb71kmw9ve', settings: {"slider_loop":true,"slider_group":1,"slider_items":1,"slider_items__tablet":1,"slider_group__mobile":1,"slider_items__mobile":1,"items":[{"name":"Jane Doe","useRating":false,"rating":"5","ratingIcon":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" fill=\"currentColor\"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d=\"M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z\"></path></svg>","image":{"value":"https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-e0hKJrYoEtEllipse_60.png?v=1721881419","name":"ecom-no-replace-e0hKJrYoEtEllipse_60"},"text":"GreenGrow Essentials has always been about more than just products; it's about making a difference. Our partnership with GreenGrow Essentials has allowed us to extend that mission online with a beautiful, functional, and impactful website. The new design has not only increased our sales but has also helped us educate and engage our customers more effectively.","title":"Founder of GreenGrow Essentials"}],"slider_layout":"horizontal"},isLive: true});
                        });
                    

                })();
            
;try{
 
} catch(error){console.error(error);}