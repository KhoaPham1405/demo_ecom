/* Publish by EComposer at 2024-07-04 01:00:26*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-wgjsfijdv4"]=  window.__ectimmers["ecom-wgjsfijdv4"] || {};
if(!this.$el)return!1;const e=this.$el;this.settings.animation&&function(t){if(!e)return;const n=e.querySelector(".ecom__element--button");if(!n)return;let s=parseInt(t.settings.animation_loop_time)*1e3||6e3,o=1e3;window.__ectimmers["ecom-wgjsfijdv4"]["fm7f7b450"] = setInterval(function(){n.classList.add("animated"),setTimeout(function(){n.classList.remove("animated")},o)},s)}(this);var i=e.querySelector(".ecom__element--button");this.isLive&&i&&i.dataset.ecTrackingId&&i.addEventListener("click",function(t){if(window.Shopify.analytics){t.preventDefault();let n=document.createElement("div");document.body.appendChild(n),n.click(),Shopify.analytics.publish("ec_custom_events",{button_id:i.id,tracking_id:i.dataset.ecTrackingId}),i.cloneNode(!0).click()}},{once:!0}),this.isLive&&i&&i.dataset.eventTrackingFb&&i.addEventListener("click",function(t){window.fbq&&window.fbq("track",`${i.dataset.eventTrackingFb}`)},{once:!0})

                    });
                    
                        document.querySelectorAll('.ecom-wgjsfijdv4').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-wgjsfijdv4', settings: {"animation":false},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-ldif76xxyw').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ldif76xxyw', settings: {"animation":false},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-eegulcj2zam"]=  window.__ectimmers["ecom-eegulcj2zam"] || {};
if(this.settings.link==="lightbox"&&this.settings.lightbox==="yes"&&window.EComModal&&this.$el){var e=this.$el.querySelector("[ecom-modal]");new window.EComModal(e,{cssClass:["ecom-container-lightbox-"+this.id]})}let i=this.$el;if(!i)return;function t(s){const o=s.getBoundingClientRect();return o.top>=0&&o.left>=0&&o.bottom-s.offsetHeight/2<=(window.innerHeight||document.documentElement.clientHeight)&&o.right<=(window.innerWidth||document.documentElement.clientWidth)}function n(){let s=i.querySelector(".ecom-element.ecom-base-image"),o=i.closest(".core__row--columns");s&&(t(s)?(s.classList.add("image-highlight"),o.setAttribute("style","z-index: unset")):(s.classList.remove("image-highlight"),o.setAttribute("style","z-index: 1")))}this.settings.highligh_on_viewport&&window.addEventListener("scroll",function(){n()})

                    });
                    
                        document.querySelectorAll('.ecom-eegulcj2zam').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-eegulcj2zam', settings: {"link":"lightbox","lightbox":"no","highligh_on_viewport":false},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-ipg3uigf2h9').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ipg3uigf2h9', settings: {"link":"lightbox","lightbox":"no","highligh_on_viewport":false},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-52erb7nze9f"]=  window.__ectimmers["ecom-52erb7nze9f"] || {};
if(!this.$el)return;const e=this.$el,i=this,c=this.settings.layout;let l=e.closest(".core__row--columns");const n=e.querySelector(".ecom-shopify__menu-list--mobile"),s=e.querySelector(".ecom-menu__icon-humber"),m=e.querySelector(".ecom-menu-collapse-close--mobile");let u=e.closest("div.ecom-core.core__block")||"",d=e.closest("div.ecom-column.ecom-core")||"",y=e.querySelectorAll(".ecom-shopify__menu-item--link");for(u&&(u.style.overflow="visible"),y&&n&&y.forEach(function(t){t.addEventListener("click",function(){g()})}),s&&(s.addEventListener("click",v),m.addEventListener("click",g));l;)l.style.zIndex="100",l=l.parentElement.closest(".core__row--columns");function v(){!n||(n.parentNode.style.display="block",n.classList.add("ecom-show"),u&&(u.style.zIndex="100"),d&&(d.style.zIndex="100"),document.querySelector("body").classList.add("ecom-menu-opened"),setTimeout(function(){document.addEventListener("click",p),document.addEventListener("keydown",f)},500))}function p(t){let a=t.target;do{if(a==n)return;a=a.parentNode}while(a);a!=n&&(g(),document.removeEventListener("click",p),document.removeEventListener("keydown",f))}function f(t){(t.isComposing||t.keyCode===27)&&(g(),document.removeEventListener("keydown",f),document.removeEventListener("click",p))}function g(){n.parentNode.style.display="none",n.classList.remove("ecom-show"),u&&(u.style.zIndex="1"),d&&(d.style.zIndex="1"),document.querySelector("body").classList.remove("ecom-menu-opened"),document.removeEventListener("keydown",f),document.removeEventListener("click",p)}let z=e.querySelector('.ecom-shopify__menu-list[data-menu-layout="horizontal"]'),k=null;z&&(k=z.querySelectorAll(".ecom-shopify__menu-item--has-children>.ecom-menu_item>.ecom-element--menu_title")),k&&k.forEach(function(t){t.addEventListener("click",function(a){a.preventDefault()})});function S(){var t=e.querySelectorAll(".ecom-shopify__menu-list .ecom-shopify__menu-item--has-children > .ecom-menu_item, .ecom-shopify__menu-list .ecom-shopify__menu-child-link-item--has-children > .ecom-menu_item"),a=e.querySelectorAll(".ecom-shopify__menu-list--mobile .ecom-shopify__menu-item--has-children > .ecom-menu_item, .ecom-shopify__menu-list--mobile .ecom-shopify__menu-child-link-item--has-children > .ecom-menu_item");if(!!t){var r,b="false",w=e.querySelector(".ecom-shopify__menu-wrapper");if(w&&w.dataset.showAll)var b=w.dataset.showAll;for(r=0;r<t.length;r++){let x=function(o){let _=o.nextElementSibling,h=null;if(o.classList.contains("ecom-item-active")){if(o.classList.remove("ecom-item-active"),_){_.style.maxHeight=null;var $=_.querySelectorAll(".ecom-menu_item");$&&$.forEach(L=>{var E=L.nextElementSibling;E&&(E.style.maxHeight=null),L.classList.remove("ecom-item-active")}),h=o.closest(".ecom-shopify__menu-sub-menu"),h&&(h.style.maxHeight=parseInt(h.style.maxHeight)-_.scrollHeight+"px")}}else o.classList.add("ecom-item-active"),_&&(h=o.closest(".ecom-shopify__menu-sub-menu"),h&&(h.style.maxHeight=parseInt(h.style.maxHeight)+_.scrollHeight+"px"),_.style.maxHeight=_.scrollHeight+"px")};c==="horizontal"&&!i.isLive?t[r].addEventListener("click",function(o){o.preventDefault()}):c==="horizontal"&&i.isLive?t[r].addEventListener("click",function(o){o.stopPropagation()}):(c==="vertical"||!i.isLive)&&(b&&b=="true"&&x(t[r]),t[r].addEventListener("click",function(o){o.preventDefault(),x(this)})),a[r]&&a[r].addEventListener("click",function(o){o.preventDefault(),x(this)})}}}S()

                    });
                    
                        document.querySelectorAll('.ecom-52erb7nze9f').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-52erb7nze9f', settings: {"layout":"horizontal"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-yf9lb96e78').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-yf9lb96e78', settings: {"layout":"horizontal"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-xah1vii4la"]=  window.__ectimmers["ecom-xah1vii4la"] || {};
const $el = this.$el;
                if(!$el) return;
                const isLive = this.isLive,
                    content = this.settings.content,
                    type = this.settings.type,
                    sroll_block = this.settings.sroll_block || 'start',
                    offsetTop = parseInt(this.settings.offsetTop) || 0,
                    offsetTop__tablet = parseInt(this.settings.offsetTop__tablet) || 0,
                    offsetTop__mobile = parseInt(this.settings.offsetTop__mobile) || 0;
                if(!isLive) return;
                    /* Image Sticky */
                if(this.settings.enable_position_sticky &&  window.innerWidth > 1024) {
                    if($el.parentElement) {
                        if(this.isLive) {
                            $el.style.height = "100%";
                        } else {
                            $el.parentElement.style.height = "100%";
                        }
                    }
                }
                function capitalizeFirstLetter(string) {
                    return string.charAt(0).toUpperCase() + string.slice(1);
                }
                let spaceTop = offsetTop;
                if(window.innerWidth < 1024 && window.innerWidth > 768) {
                    spaceTop = offsetTop__tablet
                }
                if(window.innerWidth <= 768) {
                    spaceTop = offsetTop__mobile
                }
                if(content === 'full_page') {
                    let main = $el.closest('.ecom-builder'),
                        el_content = $el.querySelector('.ecom-blog-table-of-content-wrapper');
                    let show_index = this.settings.index ?? false,
                        show_index2 = this.settings.index2 ?? false,
                        icon = this.settings.icon ?? false;
                    if(!el_content) return;
                    let tag = this.settings.tag, tag2 = this.settings.tag2;
                    if(type === 'css') {
                        tag = this.settings.css_heading;
                        tag2 = this.settings.css_heading2;
                    }
                    let allHeading = main.querySelectorAll(`${tag}, ${tag2}`);
                    let tocUl = document.createElement("ul"),
                        tocFragment = new DocumentFragment(),
                        mainLi = null,
                        subUl = null,
                        subLi = null,
                        isSibling = false,
                        idx = 0,
                        idx2 = 0,
                        count = 0;
                    tocUl.className = 'ecom-blog-table-of-content__items ecom-blog-table-of-content__items-index';
                    if(tag){
                        tag = tag.replace('#', '');
                        tag = tag.replace('.', '');
                    }
                    if(tag2){
                        tag2 = tag2.replace('#', '');
                        tag2 = tag2.replace('.', '');
                    }
                    if(allHeading.length > 0){
                        allHeading.forEach(function(element, index) {
                            let level = element.nodeName;
                            if(tag.includes(' ')){
                              tag = tag.split(' ')[tag.split(' ').length - 1];
                            }
                            if(tag2 && tag2.includes(' ')){
                              tag2 = tag2.split(' ')[tag2.split(' ').length - 1];
                            }
                            if(level.toLowerCase() === tag || element.classList.contains(tag) || element.id === tag) {
                                idx++;
                                idx2=0;
                            }
                            let anchor = document.createElement("a");
                            let anchorText = element.innerText;
                            // let anchorText = capitalizeFirstLetter(element.innerText.toLowerCase());
                            let elementId = anchorText.replaceAll(" ", "");
                            // element.id = elementId;
                            anchor.href = "#" + elementId;
                            anchor.className = 'ecom-table-content__nav ecom-flex';
                            anchor.setAttribute('data-tag', level.toLowerCase());
                            if (tag2 && (tag2.toUpperCase() === level || element.classList.contains(tag2) || element.id === tag2)) {
                                if (mainLi) {
                                    idx2++;
                                    subLi = document.createElement("li");
                                    subLi.className = 'ecom-flex';
                                    show_index2 ? anchor.innerHTML = `<span>${idx}.${idx2}- ${anchorText}</span>` : anchor.innerHTML = `<span>${anchorText}</span>`;
                                    if(icon) {
                                        let el_icon = document.createElement('span');
                                        el_icon.className = 'ecom__element--blog-table-of-content__icon';
                                        el_icon.innerHTML = icon
                                        anchor.prepend(el_icon);
                                    }
                                    subLi.appendChild(anchor);

                                    if (isSibling === false) {
                                        subUl = document.createElement("ul");
                                        subUl.className = 'ecom-blog-table-of-content__items ecom-blog-table-of-content__items-child';
                                    }
                                    subUl.appendChild(subLi);
                                    mainLi.appendChild(subUl);

                                    isSibling = true;
                                }
                                else {
                                    count++;
                                }
                            } else {
                                mainLi = document.createElement("li");
                                mainLi.className = 'ecom-flex';
                                show_index ? anchor.innerHTML = `<span>${idx}- ${anchorText}</span>` : anchor.innerHTML = `<span>${anchorText}</span>`;
                                if(icon) {
                                    let el_icon = document.createElement('span');
                                    el_icon.className = 'ecom__element--blog-table-of-content__icon';
                                    el_icon.innerHTML = icon
                                    anchor.prepend(el_icon);
                                }
                                mainLi.appendChild(anchor);
                                tocFragment.appendChild(mainLi);
                                isSibling = false;
                                subUl = null;
                            }
                        });
                        tocUl.append(tocFragment);
                        el_content.append(tocUl);
                    } else {
                        el_content.style.display = "none";
                    }
                    let navs = $el.querySelectorAll('.ecom-table-content__nav');
                    if(!navs || !allHeading) return;
                    
                    navs.forEach(function(nav, index) {
                        nav.addEventListener('click', function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            // handle active text
                            navs.forEach(function(nav) {
                                nav.classList.remove('ecom-text-active');
                            });
                            nav.classList.add('ecom-text-active');
                            //scroll in to view
                            const top = allHeading[index+count].getBoundingClientRect().top + window.pageYOffset - spaceTop;
                            // allHeading[index+count].scrollIntoView({ behavior: 'smooth', block: sroll_block});
                            window.scrollTo({
                                top: top,
                                left: 0,
                                behavior: "smooth",
                                block: sroll_block
                            });

                            // scroll_to_el(this);
                        })
                    });
                    allHeading.forEach(function(heading, index) {
                        if(index < count) return;
                        heading.classList.add('ecom-heading__table-of-content');
                        heading.id = heading.innerText.replaceAll(' ', ''); // optimize SEO
                    });
                    let headings = document.querySelectorAll('.ecom-heading__table-of-content');
                    handleScroll(headings, navs);
                }
                else {
                    let navs = $el.querySelectorAll('.ecom-table-content__nav');
                    if(!navs) return;
                    navs.forEach(function(nav) {
                        let tag = nav.dataset.tag;
                        if(tag) {
                            const content = nav.querySelector('span').textContent;
                            const symbol = content.includes('"') ? "'" : '"';
                            const xpath = `//${tag}[contains(.,` + `${symbol}${content}${symbol})]`
                            var headings = document.evaluate(`${xpath}`, document, null, XPathResult.ANY_TYPE, null );
                            var thisHeading = headings.iterateNext();
                            if(thisHeading) {
                               thisHeading.classList.add('ecom-heading__table-of-content')
                               thisHeading.id = thisHeading.innerText.replaceAll(' ', ''); // optimize SEO
                            }
                        }
                        nav.addEventListener('click', function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            // handle active text
                            navs.forEach(function(nav) {
                                nav.classList.remove('ecom-text-active');
                            });
                            nav.classList.add('ecom-text-active');
                            scroll_to_el(this);
                        })
                    });
                    let headings = document.querySelectorAll('.ecom-heading__table-of-content');
                        handleScroll(headings, navs);
                }
                // scroll change active
                function handleScroll(headings, navs) {
                    let viewPort = window.innerHeight;
                    window.addEventListener('scroll', function(e) {
                        headings.forEach((heading, index)=>{
                            let check = false;
                            if(heading.getBoundingClientRect().top < 80 && heading.getBoundingClientRect().top > 0 && heading.getBoundingClientRect().top < viewPort) {
                            navs.forEach((nav,idx)=>{
                                nav.classList.remove('ecom-text-active')
                            })
                            navs[index].classList.add('ecom-text-active');
                            }
                            let count = 0;
                            headings.forEach(()=>{

                            if(heading.getBoundingClientRect().top < viewPort && heading.getBoundingClientRect().top > 0) count++
                            });
                            if(count >1) check = true;
                            if(heading.getBoundingClientRect().top < 0 && check) {
                            navs[index].classList.remove('ecom-text-active');
                            }
                            //handle scroll .........
                            // if(heading.getBoundingClientRect().top > viewPort && index >0 && navs[index].className.includes('ecom-text-active')) {
                            //   console.log('greater');
                            //   navs.forEach((nav,idx)=>{
                            //     nav.classList.remove('ecom-text-active')
                            //   })
                            //   navs[index-1].classList.add('ecom-text-active');
                            // }
                        });
                    });
                }
                function scroll_to_el(el) {
                    var tag = el.dataset.tag;
                    if(tag) {
                        const content = el.querySelector('span').textContent;
                        const symbol = content.includes('"') ? "'" : '"'
                        const xpath = `//${tag}[contains(.,` + `${symbol}${content}${symbol})]`
                        // const xpath = `//${tag}[contains(.,` + `${nav.querySelector('span').textContent})]`;
                        var headings = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null );
                        var thisHeading = headings.iterateNext();
                        if(thisHeading) {
                            thisHeading.scrollIntoView({ behavior: 'smooth', block: sroll_block});
                            const top = thisHeading.getBoundingClientRect().top + window.pageYOffset - spaceTop;
                            // allHeading[index+count].scrollIntoView({ behavior: 'smooth', block: sroll_block});
                            window.scrollTo({
                                top: top,
                                left: 0,
                                behavior: "smooth",
                                block: sroll_block
                            });
                            // window.scrollBy(0, -offsetTop);
                        }
                    }
                }
                //Show_hide_element
                var btn_switch = $el.querySelector('.ecom-blog-table-of-content_btn-switch'),
                    wrapper = $el.querySelector('.ecom-blog-table-of-content-wrapper');
                if(btn_switch && wrapper) {
                    btn_switch.addEventListener('click', function() {
                        var wrapper = $el.querySelector('.ecom-blog-table-of-content-wrapper');
                        if(wrapper) {
                            wrapper.style.display = (wrapper.style.display == 'none') ? 'block' : 'none';
                        }
                    })
                }

                    });
                    
                        document.querySelectorAll('.ecom-xah1vii4la').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-xah1vii4la', settings: {"content":"content_blog","type":"css","sroll_block":"start","index":true,"index2":false,"tag":"h2","tag2":"h3","css_heading":"h2","css_heading2":"h3"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-6q0xwplz30d"]=  window.__ectimmers["ecom-6q0xwplz30d"] || {};
let e=this.$el.querySelector(".ecom-shopify__article__description-view-more-btn"),l=this.settings.content_type,s=this.$el.querySelector(".ecom-shopify__article__description--full"),r=this.$el.querySelector(".ecom-shopify__article__description--paragraph");e&&e.addEventListener("click",function(){l==="text"&&s?(s.style.display="inherit",r.style.display="none"):r.style.maxHeight=null,this.style.display="none"})

                    });
                    
                        document.querySelectorAll('.ecom-6q0xwplz30d').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-6q0xwplz30d', settings: {"content_type":"html"},isLive: true});
                        });
                    

                })();
            