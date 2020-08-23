"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}$(document).ready(function(){$(".c-rainbow").hover(function(){$(this).children().first().css("visibility","hidden"),$(this).children().last().show()},function(){$(this).children().first().css("visibility","visible"),$(this).children().last().hide()}),"/"!==window.location.pathname&&"/index.html"!==window.location.pathname||(console.log("at Index"),$(".nav-container .nav-bar ").css({"background-color":"#ccc"}))});var mr_firstSectionHeight,mr_nav,mr_fixedAt,mr_navOuterHeight,mr_floatingProjectSections,mr_navScrolled=!1,mr_navFixed=!1,mr_outOfSight=!1,mr_scrollTop=0;function updateNav(){var e=mr_scrollTop;if(e<=0)return mr_navFixed&&(mr_navFixed=!1,mr_nav.removeClass("fixed")),mr_outOfSight&&(mr_outOfSight=!1,mr_nav.removeClass("outOfSight")),void(mr_navScrolled&&(mr_navScrolled=!1,mr_nav.removeClass("scrolled")));if(mr_navOuterHeight+mr_fixedAt<e){if(!mr_navScrolled)return mr_nav.addClass("scrolled"),void(mr_navScrolled=!0)}else mr_navOuterHeight<e?(mr_navFixed||(mr_nav.addClass("fixed"),mr_navFixed=!0),mr_navOuterHeight+10<e?mr_outOfSight||(mr_nav.addClass("outOfSight"),mr_outOfSight=!0):mr_outOfSight&&(mr_outOfSight=!1,mr_nav.removeClass("outOfSight"))):(mr_navFixed&&(mr_navFixed=!1,mr_nav.removeClass("fixed")),mr_outOfSight&&(mr_outOfSight=!1,mr_nav.removeClass("outOfSight"))),mr_navScrolled&&(mr_navScrolled=!1,mr_nav.removeClass("scrolled"))}function capitaliseFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}function initializeMasonry(){$(".masonry").each(function(){var e=$(this).get(0),t=new Masonry(e,{itemSelector:".masonry-item"});t.on("layoutComplete",function(){mr_firstSectionHeight=$(".main-container section:nth-of-type(1)").outerHeight(!0),$(".filters.floating").length&&(setupFloatingProjectFilters(),updateFloatingFilters(),window.addEventListener("scroll",updateFloatingFilters,!1)),$(".masonry").addClass("fadeIn"),$(".masonry-loader").addClass("fadeOut"),$(".masonryFlyIn").length&&masonryFlyIn()}),t.layout(),t.destroy()})}function masonryFlyIn(){var e=$(".masonryFlyIn .masonry-item"),t=0;e.each(function(){var e=$(this);setTimeout(function(){e.addClass("fadeIn")},t),t+=170})}function setupFloatingProjectFilters(){mr_floatingProjectSections=[],$(".filters.floating").closest("section").each(function(){var e=$(this);mr_floatingProjectSections.push({section:e.get(0),outerHeight:e.outerHeight(),elemTop:e.offset().top,elemBottom:e.offset().top+e.outerHeight(),filters:e.find(".filters.floating"),filersHeight:e.find(".filters.floating").outerHeight(!0)})})}function updateFloatingFilters(){for(var e=mr_floatingProjectSections.length;e--;){var t=mr_floatingProjectSections[e];t.elemTop<mr_scrollTop&&void 0===window.mr_variant?(t.filters.css({position:"fixed",top:"16px",bottom:"auto"}),mr_navScrolled&&t.filters.css({transform:"translate3d(-50%,48px,0)"}),mr_scrollTop>t.elemBottom-70&&(t.filters.css({position:"absolute",bottom:"16px",top:"auto"}),t.filters.css({transform:"translate3d(-50%,0,0)"}))):t.filters.css({position:"absolute",transform:"translate3d(-50%,0,0)"})}}function prepareSignup(e){var t,a=jQuery("<form />"),i=jQuery("<div />");return jQuery(i).html(e.attr("srcdoc")),t=jQuery(i).find("form").attr("action"),/list-manage\.com/.test(t)&&"//"==(t=t.replace("/post?","/post-json?")+"&c=?").substr(0,2)&&(t="http:"+t),/createsend\.com/.test(t)&&(t+="?callback=?"),a.attr("action",t),jQuery(i).find("input, select, textarea").not('input[type="submit"]').each(function(){jQuery(this).clone().appendTo(a)}),a}$(document).ready(function(){var e,t,a,i,o,n=$("a.inner-link");function u(e){var t,a;return $(e).find('.validate-required[type="checkbox"]').each(function(){$('[name="'+$(this).attr("name")+'"]:checked').length||(a=1,t=$(this).attr("name").replace("[]",""),e.find(".form-error").text("Please tick at least one "+t+" box."))}),$(e).find(".validate-required").each(function(){""===$(this).val()?($(this).addClass("field-error"),a=1):$(this).removeClass("field-error")}),$(e).find(".validate-email").each(function(){/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())?$(this).removeClass("field-error"):($(this).addClass("field-error"),a=1)}),e.find(".field-error").length||e.find(".form-error").fadeOut(1e3),a}function r(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||null}n.length&&(n.each(function(){var e=$(this);"#"!==e.attr("href").charAt(0)&&e.removeClass("inner-link")}),e=0,$("body[data-smooth-scroll-offset]").length&&(e=+(e=$("body").attr("data-smooth-scroll-offset"))),smoothScroll.init({selector:".inner-link",selectorHeader:null,speed:750,easing:"easeInOutCubic",offset:e})),addEventListener("scroll",function(){mr_scrollTop=window.pageYOffset},!1),$(".background-image-holder").each(function(){var e=$(this).children("img").attr("src");$(this).css("background",'url("'+e+'")'),$(this).children("img").hide(),$(this).css("background-position","initial")}),setTimeout(function(){$(".background-image-holder").each(function(){$(this).addClass("fadeIn")})},200),$('[data-toggle="tooltip"]').tooltip(),$("ul[data-bullet]").each(function(){var e=$(this).attr("data-bullet");$(this).find("li").prepend('<i class="'+e+'"></i>')}),$(".progress-bar").each(function(){$(this).css("width",$(this).attr("data-progress")+"%")}),$("nav").hasClass("fixed")||$("nav").hasClass("absolute")?$("body").addClass("nav-is-overlay"):($(".nav-container").css("min-height",$("nav").outerHeight(!0)),$("section.landing").css("top",-$("nav").outerHeight(!0)),$(window).resize(function(){var e=$("nav").outerHeight(!0);$(".nav-container").css("min-height",e),$("section.landing").css("top",-e)}),768<$(window).width()&&$(".parallax:nth-of-type(1) .background-image-holder").css("top",-$("nav").outerHeight(!0)),768<$(window).width()&&$("section.fullscreen:nth-of-type(1)").css("height",$(window).height()-$("nav").outerHeight(!0))),$("nav").hasClass("bg-dark")&&$(".nav-container").addClass("bg-dark"),mr_nav=$("body .nav-container nav:first"),mr_navOuterHeight=$("body .nav-container nav:first").outerHeight(),mr_fixedAt="undefined"!==_typeof(mr_nav.attr("data-fixed-at"))?parseInt(mr_nav.attr("data-fixed-at").replace("px","")):parseInt($("section:nth-of-type(1)").outerHeight()),$(".menu > li > ul").each(function(){var e,t,a=$(this).offset(),i=a.left+$(this).outerWidth(!0);i>$(window).width()&&!$(this).hasClass("mega-menu")?$(this).addClass("make-right"):i>$(window).width()&&$(this).hasClass("mega-menu")&&(e=$(window).width()-a.left,t=$(this).outerWidth(!0)-e,$(this).css("margin-left",-t))}),$(".mobile-toggle").click(function(){$(".nav-bar").toggleClass("nav-open"),$(this).toggleClass("active")}),$(".menu li").click(function(e){(e=e||window.event).stopPropagation(),$(this).find("ul").length?$(this).toggleClass("toggle-sub"):$(this).parents(".toggle-sub").removeClass("toggle-sub")}),$(".menu li a").click(function(){$(this).hasClass("inner-link")&&$(this).closest(".nav-bar").removeClass("nav-open")}),$(".module.widget-handle").click(function(){$(this).toggleClass("toggle-widget-handle")}),$(".search-widget-handle .search-form input").click(function(e){(e=e||window.event).stopPropagation()}),$(".offscreen-toggle").length?$("body").addClass("has-offscreen-nav"):$("body").removeClass("has-offscreen-nav"),$(".offscreen-toggle").click(function(){$(".main-container").toggleClass("reveal-nav"),$("nav").toggleClass("reveal-nav"),$(".offscreen-container").toggleClass("reveal-nav")}),$(".main-container").click(function(){$(this).hasClass("reveal-nav")&&($(this).removeClass("reveal-nav"),$(".offscreen-container").removeClass("reveal-nav"),$("nav").removeClass("reveal-nav"))}),$(".offscreen-container a").click(function(){$(".offscreen-container").removeClass("reveal-nav"),$(".main-container").removeClass("reveal-nav"),$("nav").removeClass("reveal-nav")}),$(".projects").each(function(){var t="";$(this).find(".project").each(function(){$(this).attr("data-filter").split(",").forEach(function(e){-1==t.indexOf(e)&&(t+='<li data-filter="'+e+'">'+capitaliseFirstLetter(e)+"</li>")}),$(this).closest(".projects").find("ul.filters").empty().append('<li data-filter="all" class="active">All</li>').append(t)})}),$(".filters li").click(function(){var e=$(this).attr("data-filter");$(this).closest(".filters").find("li").removeClass("active"),$(this).addClass("active"),$(this).closest(".projects").find(".project").each(function(){-1==$(this).attr("data-filter").indexOf(e)?$(this).addClass("inactive"):$(this).removeClass("inactive")}),"all"==e&&$(this).closest(".projects").find(".project").removeClass("inactive")}),$(".tweets-feed").each(function(e){jQuery(this).attr("id","tweets-"+e)}).each(function(n){var e=$("#tweets-"+n),t={domId:"",maxTweets:e.attr("data-amount"),enableLinks:!0,showUser:!0,showTime:!0,dateFunction:"",showRetweet:!1,customCallback:function(e){var t=e.length,a=0,i=document.getElementById("tweets-"+n),o='<ul class="slides">';for(;a<t;)o+="<li>"+e[a]+"</li>",a++;o+="</ul>",i.innerHTML=o,$(".tweets-slider").length&&$(".tweets-slider").flexslider({directionNav:!1,controlNav:!1});return o}};"undefined"!==_typeof(e.attr("data-widget-id"))?t.id=e.attr("data-widget-id"):"undefined"!==_typeof(e.attr("data-feed-name"))&&""!==e.attr("data-feed-name")?t.profile={screenName:e.attr("data-feed-name").replace("@","")}:t.profile={screenName:"twitter"},twitterFetcher.fetch(t)}),$(".instafeed").length&&(jQuery.fn.spectragram.accessData={accessToken:"1406933036.dc95b96.2ed56eddc62f41cbb22c1573d58625a2",clientID:"87e6d2b8a0ef4c7ab8bc45e80ddd0c6a"},$(".instafeed").each(function(){var e=$(this).attr("data-user-name");$(this).children("ul").spectragram("getUserFeed",{query:e,max:12})})),$(".flickr-feed").length&&$(".flickr-feed").each(function(){var e=$(this).attr("data-user-id"),t=$(this).attr("data-album-id");$(this).flickrPhotoStream({id:e,setId:t,container:'<li class="masonry-item" />'}),setTimeout(function(){initializeMasonry(),window.dispatchEvent(new Event("resize"))},1e3)}),$(".slider-all-controls, .slider-paging-controls, .slider-arrow-controls, .slider-thumb-controls, .logo-carousel").length&&($(".slider-all-controls").flexslider({start:function(e){e.find(".slides li:first-child").find(".fs-vid-background video").length&&e.find(".slides li:first-child").find(".fs-vid-background video").get(0).play()},after:function(e){e.find(".fs-vid-background video").length&&(e.find("li:not(.flex-active-slide)").find(".fs-vid-background video").length&&e.find("li:not(.flex-active-slide)").find(".fs-vid-background video").get(0).pause(),e.find(".flex-active-slide").find(".fs-vid-background video").length&&e.find(".flex-active-slide").find(".fs-vid-background video").get(0).play())}}),$(".slider-paging-controls").flexslider({animation:"slide",directionNav:!1}),$(".slider-arrow-controls").flexslider({controlNav:!1}),$(".slider-thumb-controls .slides li").each(function(){var e=$(this).find("img").attr("src");$(this).attr("data-thumb",e)}),$(".slider-thumb-controls").flexslider({animation:"slide",controlNav:"thumbnails",directionNav:!0}),$(".logo-carousel").flexslider({minItems:1,maxItems:4,move:1,itemWidth:200,itemMargin:0,animation:"slide",slideshow:!0,slideshowSpeed:3e3,directionNav:!1,controlNav:!1})),$(".lightbox-grid li a").each(function(){var e=$(this).closest(".lightbox-grid").attr("data-gallery-title");$(this).attr("data-lightbox",e)}),$("iframe[data-provider]").each(function(){var e=jQuery(this).attr("data-provider"),t=jQuery(this).attr("data-video-id"),a=jQuery(this).attr("data-autoplay"),i="";"vimeo"==e?(i="http://player.vimeo.com/video/"+t+"?badge=0&title=0&byline=0&title=0&autoplay="+a,$(this).attr("data-src",i)):"youtube"==e?(i="https://www.youtube.com/embed/"+t+"?showinfo=0&autoplay="+a,$(this).attr("data-src",i)):console.log("Only Vimeo and Youtube videos are supported at this time")}),jQuery(".foundry_modal[modal-link]").remove(),$(".foundry_modal").length&&!jQuery(".modal-screen").length&&jQuery("<div />").addClass("modal-screen").appendTo("body"),jQuery(".foundry_modal").click(function(){jQuery(this).addClass("modal-acknowledged")}),jQuery(document).on("wheel mousewheel scroll",".foundry_modal, .modal-screen",function(e){return $(this).get(0).scrollTop+=e.originalEvent.deltaY,!1}),$(".modal-container:not([modal-link])").each(function(e){var t;jQuery(this).find("iframe[src]").length&&(jQuery(this).find(".foundry_modal").addClass("iframe-modal"),(t=jQuery(this).find("iframe")).attr("data-src",t.attr("src")),t.attr("src","")),jQuery(this).find(".btn-modal").attr("modal-link",e),jQuery('.foundry_modal[modal-link="'+e+'"]').length||jQuery(this).find(".foundry_modal").clone().appendTo("body").attr("modal-link",e).prepend(jQuery('<i class="ti-close close-modal">'))}),$(".btn-modal").unbind("click").click(function(){var e=jQuery('.foundry_modal[modal-link="'+jQuery(this).attr("modal-link")+'"]'),t="";return jQuery(".modal-screen").toggleClass("reveal-modal"),e.find("iframe").length&&("1"===e.find("iframe").attr("data-autoplay")&&(t="&autoplay=1"),e.find("iframe").attr("src",e.find("iframe").attr("data-src")+t)),e.find("video").length&&e.find("video").get(0).play(),e.toggleClass("reveal-modal"),!1}),$(".foundry_modal[data-time-delay]").each(function(){var e=$(this),t=e.attr("data-time-delay");e.prepend($('<i class="ti-close close-modal">')),void 0!==e.attr("data-cookie")&&mr_cookies.hasItem(e.attr("data-cookie"))||setTimeout(function(){e.addClass("reveal-modal"),$(".modal-screen").addClass("reveal-modal")},t)}),$(".foundry_modal[data-show-on-exit]").each(function(){var e=$(this),t=$(e.attr("data-show-on-exit"));$(t).length&&(e.prepend($('<i class="ti-close close-modal">')),$(document).on("mouseleave",t,function(){$("body .reveal-modal").length||"undefined"!==_typeof(e.attr("data-cookie"))&&mr_cookies.hasItem(e.attr("data-cookie"))||(e.addClass("reveal-modal"),$(".modal-screen").addClass("reveal-modal"))}))}),$(".foundry_modal[data-hide-after]").each(function(){var e=$(this),t=e.attr("data-hide-after");void 0!==e.attr("data-cookie")&&mr_cookies.hasItem(e.attr("data-cookie"))||setTimeout(function(){e.hasClass("modal-acknowledged")||(e.removeClass("reveal-modal"),$(".modal-screen").removeClass("reveal-modal"))},t)}),jQuery(".close-modal:not(.modal-strip .close-modal)").unbind("click").click(function(){var e=jQuery(this).closest(".foundry_modal");e.toggleClass("reveal-modal"),void 0!==e.attr("data-cookie")&&mr_cookies.setItem(e.attr("data-cookie"),"true",1/0),e.find("iframe").length&&e.find("iframe").attr("src",""),jQuery(".modal-screen").removeClass("reveal-modal")}),jQuery(".modal-screen").unbind("click").click(function(){jQuery(".foundry_modal.reveal-modal").find("iframe").length&&jQuery(".foundry_modal.reveal-modal").find("iframe").attr("src",""),jQuery(".foundry_modal.reveal-modal").toggleClass("reveal-modal"),jQuery(this).toggleClass("reveal-modal")}),jQuery(document).keyup(function(e){27==e.keyCode&&(jQuery(".foundry_modal").find("iframe").length&&jQuery(".foundry_modal").find("iframe").attr("src",""),jQuery(".foundry_modal").removeClass("reveal-modal"),jQuery(".modal-screen").removeClass("reveal-modal"))}),jQuery(".modal-strip").each(function(){jQuery(this).find(".close-modal").length||jQuery(this).append(jQuery('<i class="ti-close close-modal">'));var e=jQuery(this);void 0!==e.attr("data-cookie")&&mr_cookies.hasItem(e.attr("data-cookie"))||setTimeout(function(){e.addClass("reveal-modal")},1e3)}),jQuery(".modal-strip .close-modal").click(function(){var e=jQuery(this).closest(".modal-strip");return void 0!==e.attr("data-cookie")&&mr_cookies.setItem(e.attr("data-cookie"),"true",1/0),jQuery(this).closest(".modal-strip").removeClass("reveal-modal"),!1}),jQuery(".close-iframe").click(function(){jQuery(this).closest(".modal-video").removeClass("reveal-modal"),jQuery(this).siblings("iframe").attr("src",""),jQuery(this).siblings("video").get(0).pause()}),$(".checkbox-option").on("click",function(){$(this).toggleClass("checked");var e=$(this).find("input");!1===e.prop("checked")?e.prop("checked",!0):e.prop("checked",!1)}),$(".radio-option").click(function(){var e=$(this).hasClass("checked"),t=$(this).find("input").attr("name");e||($('input[name="'+t+'"]').parent().removeClass("checked"),$(this).addClass("checked"),$(this).find("input").prop("checked",!0))}),$(".accordion li").click(function(){$(this).closest(".accordion").hasClass("one-open")?($(this).closest(".accordion").find("li").removeClass("active"),$(this).addClass("active")):$(this).toggleClass("active"),void 0!==window.mr_parallax&&setTimeout(mr_parallax.windowLoad,500)}),$(".tabbed-content").each(function(){$(this).append('<ul class="content"></ul>')}),$(".tabs li").each(function(){var e=$(this),t="";e.is(".tabs>li:first-child")&&(t=' class="active"');var a=e.find(".tab-content").detach().wrap("<li"+t+"></li>").parent();e.closest(".tabbed-content").find(".content").append(a)}),$(".tabs li").click(function(){$(this).closest(".tabs").find("li").removeClass("active"),$(this).addClass("active");var e=$(this).index()+1;$(this).closest(".tabbed-content").find(".content>li").removeClass("active"),$(this).closest(".tabbed-content").find(".content>li:nth-of-type("+e+")").addClass("active")}),$("section").closest("body").find(".local-video-container .play-button").click(function(){$(this).siblings(".background-image-holder").removeClass("fadeIn"),$(this).siblings(".background-image-holder").css("z-index",-1),$(this).css("opacity",0),$(this).siblings("video").get(0).play()}),$("section").closest("body").find(".player").each(function(){$(this).closest("section").find(".container").addClass("fadeOut");var e=$(this).attr("data-video-id"),t=$(this).attr("data-start-at");$(this).attr("data-property","{videoURL:'http://youtu.be/"+e+"',containment:'self',autoPlay:true, mute:true, startAt:"+t+", opacity:1, showControls:false}")}),$(".player").length&&$(".player").each(function(){var t=$(this).closest("section"),e=t.find(".player");e.YTPlayer(),e.on("YTPStart",function(e){t.find(".container").removeClass("fadeOut"),t.find(".masonry-loader").addClass("fadeOut")})}),$(".map-holder").click(function(){$(this).addClass("interact")}),$(".map-holder").length&&$(window).scroll(function(){$(".map-holder.interact").length&&$(".map-holder.interact").removeClass("interact")}),$(".countdown").length&&$(".countdown").each(function(){var e=$(this).attr("data-date");$(this).countdown(e,function(e){$(this).text(e.strftime("%D days %H:%M:%S"))})}),$("form.form-email, form.form-newsletter").submit(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1;var t,a,i,o,n,r,s,l,d=$(this).closest("form.form-email, form.form-newsletter"),c=d.find('button[type="submit"]'),m=d.attr("original-error"),f=$(d).find("iframe.mail-list-form");if(d.find(".form-error, .form-success").remove(),c.attr("data-text",c.text()),d.append('<div class="form-error" style="display: none;">'+d.attr("data-error")+"</div>"),d.append('<div class="form-success" style="display: none;">'+d.attr("data-success")+"</div>"),s=d.find(".form-error"),l=d.find(".form-success"),d.addClass("attempted-submit"),f.length&&void 0!==f.attr("srcdoc")&&""!==f.attr("srcdoc"))if(console.log("Mail list form signup detected."),"undefined"!==_typeof(m)&&!1!==m&&s.html(m),a=$(d).find(".signup-email-field").val(),i=$(d).find(".signup-name-field").val(),o=$(d).find("input.signup-first-name-field").length?$(d).find("input.signup-first-name-field").val():$(d).find(".signup-name-field").val(),n=$(d).find(".signup-last-name-field").val(),1!==u(d)){(t=prepareSignup(f)).find("#mce-EMAIL, #fieldEmail").val(a),t.find("#mce-LNAME, #fieldLastName").val(n),t.find("#mce-FNAME, #fieldFirstName").val(o),t.find("#mce-NAME, #fieldName").val(i),d.removeClass("attempted-submit"),s.fadeOut(200),c.html(jQuery("<div />").addClass("form-loading")).attr("disabled","disabled");try{$.ajax({url:t.attr("action"),crossDomain:!0,data:t.serialize(),method:"GET",cache:!1,dataType:"json",contentType:"application/json; charset=utf-8",success:function(e){"success"!=e.result&&200!=e.Status?(s.attr("original-error",s.text()),s.html(e.msg).fadeIn(1e3),l.fadeOut(1e3),c.html(c.attr("data-text")).removeAttr("disabled")):(c.html(c.attr("data-text")).removeAttr("disabled"),"undefined"!==_typeof(r=d.attr("success-redirect"))&&!1!==r&&""!==r&&(window.location=r),d.find('input[type="text"]').val(""),d.find("textarea").val(""),l.fadeIn(1e3),s.fadeOut(1e3),setTimeout(function(){l.fadeOut(500)},5e3))}})}catch(e){s.attr("original-error",s.text()),s.html(e.message).fadeIn(1e3),l.fadeOut(1e3),setTimeout(function(){s.fadeOut(500)},5e3),c.html(c.attr("data-text")).removeAttr("disabled")}}else s.fadeIn(1e3),setTimeout(function(){s.fadeOut(500)},5e3);else console.log("Send email form detected."),"undefined"!==_typeof(m)&&!1!==m&&s.text(m),1===u(d)?(s.fadeIn(200),setTimeout(function(){s.fadeOut(500)},3e3)):(d.removeClass("attempted-submit"),s.fadeOut(200),c.html(jQuery("<div />").addClass("form-loading")).attr("disabled","disabled"),jQuery.ajax({type:"POST",url:"mail/mail.php",data:d.serialize()+"&url="+window.location.href,success:function(e){c.html(c.attr("data-text")).removeAttr("disabled"),$.isNumeric(e)?0<parseInt(e)&&("undefined"!==_typeof(r=d.attr("success-redirect"))&&!1!==r&&""!==r&&(window.location=r),d.find('input[type="text"]').val(""),d.find("textarea").val(""),d.find(".form-success").fadeIn(1e3),s.fadeOut(1e3),setTimeout(function(){l.fadeOut(500)},5e3)):(s.attr("original-error",s.text()),s.text(e).fadeIn(1e3),l.fadeOut(1e3))},error:function(e,t,a){s.attr("original-error",s.text()),s.text(a).fadeIn(1e3),l.fadeOut(1e3),c.html(c.attr("data-text")).removeAttr("disabled")}}));return!1}),$(".validate-required, .validate-email").on("blur change",function(){u($(this).closest("form"))}),$("form").each(function(){$(this).find(".form-error").length&&$(this).attr("original-error",$(this).find(".form-error").text())}),r("ref")&&$("form.form-email").append('<input type="text" name="referrer" class="hidden" value="'+r("ref")+'"/>'),/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera)&&$("section").removeClass("parallax"),$(".disqus-comments").length&&(t=$(".disqus-comments").attr("data-shortname"),(a=document.createElement("script")).type="text/javascript",a.async=!0,a.src="//"+t+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)),$(".project-container .row").attr({"data-sal":"slide-up","data-sal-easing":"ease-out-back"}),sal(),document.querySelector("[data-maps-api-key]")&&!document.querySelector(".gMapsAPI")&&$("[data-maps-api-key]").length&&(i=document.createElement("script"),o=$("[data-maps-api-key]:first").attr("data-maps-api-key"),i.type="text/javascript",i.src="https://maps.googleapis.com/maps/api/js?key="+o+"&callback=initializeMaps",i.className="gMapsAPI",document.body.appendChild(i)),$("h2,h3,h4,h5,span,p").not(".no-fix-break").each(function(){for(var e=$(this).html().split(" "),t="",a=0;a<=e.length-1;a++)t+=e[a],a==e.length-2?t+="&nbsp;":t+=" ";$(this).html(t)}),$(".mouseOn").each(function(e,t){console.log('$(e).data("content")',e,$(t).data());var a="curserImg"+$(t).data("name"),i=$("<div>",{id:a,class:"shake-slow shake-constant",css:{top:" 0",left:" 0",position:" absolute",fontSize:" 50px",lineHeight:" 50px",zIndex:" 100",display:"none",pointerEvents:"none"}}).html("&#x"+$(t).data("content")+";");$("body").append(i)}),$(".mouseOn").hover(function(e){$("#curserImg"+$(e.target).data("name")).show()},function(e){$("#curserImg"+$(e.target).data("name")).hide()}),$(".mouseOn").mousemove(function(e){$("#curserImg"+$(e.target).data("name")).offset({top:e.pageY-50,left:e.pageX})})}),$(window).load(function(){setTimeout(initializeMasonry,1e3),mr_firstSectionHeight=$(".main-container section:nth-of-type(1)").outerHeight(!0)}),window.initializeMaps=function(){"undefined"!=typeof google&&void 0!==google.maps&&$(".map-canvas[data-maps-api-key]").each(function(){var e,i,o=this,t=void 0!==$(this).attr("data-map-style")&&$(this).attr("data-map-style"),a=JSON.parse(t)||[{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}],n=void 0!==$(this).attr("data-map-zoom")&&""!==$(this).attr("data-map-zoom")?+$(this).attr("data-map-zoom"):17,r=void 0!==$(this).attr("data-latlong")&&$(this).attr("data-latlong"),s=!!r&&+r.substr(0,r.indexOf(",")),l=!!r&&+r.substr(r.indexOf(",")+1),d=new google.maps.Geocoder,c=void 0!==$(this).attr("data-address")?$(this).attr("data-address").split(";"):[""],m="We Are Here",f={draggable:766<$(document).width(),scrollwheel:!1,zoom:n,disableDefaultUI:!0,styles:a};null!=$(this).attr("data-marker-title")&&""!=$(this).attr("data-marker-title")&&(m=$(this).attr("data-marker-title")),null!=c&&""!=c[0]?d.geocode({address:c[0].replace("[nomarker]","")},function(e,t){var a;t==google.maps.GeocoderStatus.OK?((a=new google.maps.Map(o,f)).setCenter(e[0].geometry.location),c.forEach(function(e){var t;i={url:null==window.mr_variant?"img/mapmarker.png":"../img/mapmarker.png",size:new google.maps.Size(50,50),scaledSize:new google.maps.Size(50,50)},/(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)/.test(e)?(t=e.split(","),new google.maps.Marker({position:{lat:+t[0],lng:+t[1]},map:a,icon:i,title:m,optimised:!1})):e.indexOf("[nomarker]")<0&&(new google.maps.Geocoder).geocode({address:e.replace("[nomarker]","")},function(e,t){t==google.maps.GeocoderStatus.OK&&new google.maps.Marker({map:a,icon:i,title:m,position:e[0].geometry.location,optimised:!1})})})):console.log("There was a problem geocoding the address.")}):null!=s&&""!=s&&0!=s&&null!=l&&""!=l&&0!=l&&(f.center={lat:s,lng:l},e=new google.maps.Map(o,f),new google.maps.Marker({position:{lat:s,lng:l},map:e,icon:i,title:m}))})},initializeMaps();var mr_cookies={getItem:function(e){return e&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,t,a,i,o,n){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var r="";if(a)switch(a.constructor){case Number:r=a===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+a;break;case String:r="; expires="+a;break;case Date:r="; expires="+a.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+r+(o?"; domain="+o:"")+(i?"; path="+i:"")+(n?"; secure":""),!0},removeItem:function(e,t,a){return!!this.hasItem(e)&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(a?"; domain="+a:"")+(t?"; path="+t:""),!0)},hasItem:function(e){return!!e&&new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=e.length,a=0;a<t;a++)e[a]=decodeURIComponent(e[a]);return e}};