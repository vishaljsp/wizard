!(function (e) {
    // e.CookiesMessage = function (o) {
    //     function n(o) { var i = ""; 1 == o.closeEnable && (i += '<a href="#" id="band-cookies-close" style="background-color:' + o.closeBgColor + ';"><svg version="1.1" id="band-cookies-close-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="248.5 248.5 15 15" enable-background="new 248.5 248.5 15 15" xml:space="preserve" ><polygon id="x-mark-icon" points="263.5,260.876 258.621,255.999 263.499,251.121 260.876,248.5 256,253.377 251.122,248.5 248.5,251.121 253.378,255.999 248.5,260.878 251.121,263.5 256,258.62 260.879,263.499" style="fill:' + o.closeColor + ';"/></svg></a>'); var n = ""; 1 == o.infoEnable && (n += '<a href="' + o.infoUrl + '" id="band-cookies-info" target="_blank">' + o.infoText + "</a>"), 1 == o.acceptEnable && (n += '<a href="#" id="band-cookies-ok">' + o.acceptText + "</a>"); var c = '<div id="band-cookies"><p>' + o.messageText + n + "</p>" + i + "</div>"; e("body").prepend(c), e("#band-cookies").hide().slideDown(), e("#band-cookies").css({ "background-color": o.messageBg, color: o.messageColor, }), e("#band-cookies p a").css({ color: o.messageLinkColor }) }
    //     function c(e) { return e.replace(/^\s+|\s+$/g, "") }
    //     function s(e) {
    //         var o = !1; if (document.cookie) { var n = document.cookie.split(";"); for (i = 0; i < n.length; i++) { var s = n[i].split("="); c(s[0]) == e && (o = s[1]) } }
    //         return o
    //     }
    //     function a(e, o, i, n) { var c = new Date(); c.setTime(c.getTime() + 24 * i * 60 * 60 * 1e3); var s = "expires=" + c.toUTCString(); document.cookie = e + "=" + o + "; " + s + "; path=" + n + ";" }
    //     var l = { messageText: "We use technical and analytics cookies to ensure that we give you the best experience on our website.", messageBg: "#151515", messageColor: "#FFFFFF", messageLinkColor: "#F0FFAA", closeEnable: !0, closeColor: "#444444", closeBgColor: "#000000", acceptEnable: !0, acceptText: "Accept & Close", infoEnable: !0, infoText: "More Info", infoUrl: "#", cookieExpire: 180, }; o = e.extend(l, o); var t = location.host, r = "Cookies policy accepted", d = "/", g = s(t); g || n(o), e("#band-cookies-ok").on("click", function (i) { i.preventDefault(), a(t, r, o.cookieExpire, d), e("#band-cookies").slideToggle() }), e("#band-cookies-close").on("click", function (o) { o.preventDefault(), e("#band-cookies").slideToggle() })
    // }
})(jQuery); $(document).ready(function () { $(".horSlider").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 5000, vertical: !1, slidesToShow: 6, slidesToScroll: 1, verticalSwiping: !1, responsive: [{ breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 1, }, }, { breakpoint: 820, settings: { slidesToShow: 3, slidesToScroll: 3, }, }, { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 3, }, }, { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 2, }, },], }); $(".ebookSlider").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 5000, vertical: !1, slidesToShow: 5, slidesToScroll: 5, verticalSwiping: !1, responsive: [{ breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 4, }, }, { breakpoint: 1023, settings: { dots: !1, arrows: !0, slidesToShow: 3, slidesToScroll: 3, }, }, { breakpoint: 767, settings: { dots: !1, arrows: !0, slidesToShow: 2, slidesToScroll: 2, }, }, { breakpoint: 399, settings: { dots: !1, arrows: !0, slidesToShow: 1, slidesToScroll: 1, }, },], }); $(".cf-list-carousel").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 3000, vertical: !1, slidesToShow: 3, slidesToScroll: 3, verticalSwiping: !1, infinite: !1, responsive: [{ breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 3, }, }, { breakpoint: 1050, settings: { slidesToShow: 2, slidesToScroll: 1, }, }, { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, }, },], }); $(".os-list-carousel").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 3000, vertical: !1, slidesToShow: 4, slidesToScroll: 1, verticalSwiping: !1, infinite: !1, responsive: [{ breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 1, }, }, { breakpoint: 1050, settings: { slidesToShow: 2, slidesToScroll: 1, }, }, { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, }, },], }); $(".horCarousel").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 5000, vertical: !1, slidesToShow: 5, slidesToScroll: 5, verticalSwiping: !1, responsive: [{ breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 4, }, }, { breakpoint: 820, settings: { slidesToShow: 3, slidesToScroll: 3, }, }, { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, }, },], }); $(".testim-list-carousel").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 5000, vertical: !1, slidesToShow: 3, slidesToScroll: 3, verticalSwiping: !1, infinite: !1, responsive: [{ breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 3, }, }, { breakpoint: 1050, settings: { slidesToShow: 2, slidesToScroll: 1, }, }, { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, }, },], }); $(".experts-carousel").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 5000, vertical: !1, slidesToShow: 5, slidesToScroll: 1, verticalSwiping: !1, responsive: [{ breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 1, }, }, { breakpoint: 1050, settings: { slidesToShow: 3, slidesToScroll: 1, }, }, { breakpoint: 700, settings: { slidesToShow: 2, slidesToScroll: 1, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, }, },], }); $(".publication-carousel").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 5000, vertical: !1, slidesToShow: 6, slidesToScroll: 1, verticalSwiping: !1, responsive: [{ breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 1, }, }, { breakpoint: 820, settings: { slidesToShow: 3, slidesToScroll: 3, }, }, { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 3, }, }, { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 2, }, },], }); $(".oc-carousel").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 5000, vertical: !1, slidesToShow: 5, slidesToScroll: 1, verticalSwiping: !1, infinite: !1, responsive: [{ breakpoint: 1450, settings: { slidesToShow: 4, slidesToScroll: 1, dots: !0, }, }, { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1, dots: !0, }, }, { breakpoint: 820, settings: { slidesToShow: 2, slidesToScroll: 2, dots: !0, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: !0, }, },], }); $(".op-carousel").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 5000, vertical: !1, slidesToShow: 4, slidesToScroll: 1, verticalSwiping: !1, infinite: !1, responsive: [{ breakpoint: 1450, settings: { slidesToShow: 3, slidesToScroll: 1, dots: !0, }, }, { breakpoint: 820, settings: { slidesToShow: 2, slidesToScroll: 2, dots: !0, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: !0, }, },], }); $(".exp-carousel").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 5000, vertical: !1, slidesToShow: 3, slidesToScroll: 1, verticalSwiping: !1, infinite: !1, responsive: [{ breakpoint: 1450, settings: { slidesToShow: 3, slidesToScroll: 1, dots: !0, }, }, { breakpoint: 820, settings: { slidesToShow: 2, slidesToScroll: 2, dots: !0, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: !0, }, },], }); $(".careerv-carousel").slick({ dots: !1, arrows: !0, autoplay: !0, autoplayHoverPause: !0, margin: 5, center: !0, speed: 1000, autoplaySpeed: 5000, vertical: !1, slidesToShow: 3, slidesToScroll: 1, verticalSwiping: !1, responsive: [{ breakpoint: 1450, settings: { slidesToShow: 3, slidesToScroll: 1, }, }, { breakpoint: 820, settings: { slidesToShow: 2, slidesToScroll: 2, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, }, },], }); $(".pastevents-carousel").not(".slick-initialized").slick({ dots: !0, arrows: !1, infinite: !1, speed: 300, autoplay: !0, autoplaySpeed: 20000, slidesToShow: 3, slidesToScroll: 3, lazyLoad: "ondemand", responsive: [{ breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2, }, }, { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 2, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, }, },], }) }); $(window).on("resize", function () { $(".ebookSlider").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 5000, vertical: !1, slidesToShow: 5, slidesToScroll: 5, verticalSwiping: !1, responsive: [{ breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 4, }, }, { breakpoint: 1023, settings: { dots: !1, arrows: !0, slidesToShow: 3, slidesToScroll: 3, }, }, { breakpoint: 767, settings: { dots: !1, arrows: !0, slidesToShow: 2, slidesToScroll: 2, }, }, { breakpoint: 399, settings: { dots: !1, arrows: !0, slidesToShow: 1, slidesToScroll: 1, }, },], }); $(".cf-list-carousel").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 3000, vertical: !1, slidesToShow: 3, slidesToScroll: 3, verticalSwiping: !1, infinite: !1, responsive: [{ breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 3, }, }, { breakpoint: 1050, settings: { slidesToShow: 2, slidesToScroll: 1, }, }, { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, }, },], }); $(".os-list-carousel").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 3000, vertical: !1, slidesToShow: 4, slidesToScroll: 1, verticalSwiping: !1, infinite: !1, responsive: [{ breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 1, }, }, { breakpoint: 1050, settings: { slidesToShow: 2, slidesToScroll: 1, }, }, { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, }, },], }); $(".horCarousel").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 5000, vertical: !1, slidesToShow: 5, slidesToScroll: 5, verticalSwiping: !1, responsive: [{ breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 4, }, }, { breakpoint: 820, settings: { slidesToShow: 3, slidesToScroll: 3, }, }, { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, }, },], }); $(".testim-list-carousel").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 5000, vertical: !1, slidesToShow: 3, slidesToScroll: 3, verticalSwiping: !1, infinite: !1, responsive: [{ breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 3, }, }, { breakpoint: 1050, settings: { slidesToShow: 2, slidesToScroll: 1, }, }, { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, }, },], }); $(".experts-carousel").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 5000, vertical: !1, slidesToShow: 5, slidesToScroll: 1, verticalSwiping: !1, responsive: [{ breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 1, }, }, { breakpoint: 1050, settings: { slidesToShow: 3, slidesToScroll: 1, }, }, { breakpoint: 700, settings: { slidesToShow: 2, slidesToScroll: 1, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, }, },], }); $(".publication-carousel").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 5000, vertical: !1, slidesToShow: 6, slidesToScroll: 1, verticalSwiping: !1, responsive: [{ breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 1, }, }, { breakpoint: 820, settings: { slidesToShow: 3, slidesToScroll: 3, }, }, { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 3, }, }, { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 2, }, },], }); $(".oc-carousel").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 5000, vertical: !1, slidesToShow: 5, slidesToScroll: 1, verticalSwiping: !1, infinite: !1, responsive: [{ breakpoint: 1450, settings: { slidesToShow: 4, slidesToScroll: 1, dots: !0, }, }, { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1, dots: !0, }, }, { breakpoint: 820, settings: { slidesToShow: 2, slidesToScroll: 2, dots: !0, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: !0, }, },], }); $(".op-carousel").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 5000, vertical: !1, slidesToShow: 4, slidesToScroll: 1, verticalSwiping: !1, infinite: !1, responsive: [{ breakpoint: 1450, settings: { slidesToShow: 3, slidesToScroll: 1, dots: !0, }, }, { breakpoint: 820, settings: { slidesToShow: 2, slidesToScroll: 2, dots: !0, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: !0, }, },], }); $(".exp-carousel").slick({ dots: !0, arrows: !1, autoplay: !0, speed: 1000, autoplaySpeed: 5000, vertical: !1, slidesToShow: 3, slidesToScroll: 1, verticalSwiping: !1, infinite: !1, responsive: [{ breakpoint: 1450, settings: { slidesToShow: 3, slidesToScroll: 1, dots: !0, }, }, { breakpoint: 820, settings: { slidesToShow: 2, slidesToScroll: 2, dots: !0, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: !0, }, },], }); $(".careerv-carousel").slick({ dots: !1, arrows: !0, autoplay: !0, autoplayHoverPause: !0, margin: 5, center: !0, speed: 1000, autoplaySpeed: 5000, vertical: !1, slidesToShow: 3, slidesToScroll: 1, verticalSwiping: !1, responsive: [{ breakpoint: 1450, settings: { slidesToShow: 3, slidesToScroll: 1, }, }, { breakpoint: 820, settings: { slidesToShow: 2, slidesToScroll: 2, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, }, },], }); $(".pastevents-carousel").not(".slick-initialized").slick({ dots: !0, arrows: !1, infinite: !1, speed: 300, autoplay: !0, autoplaySpeed: 20000, slidesToShow: 3, slidesToScroll: 3, lazyLoad: "ondemand", responsive: [{ breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2, }, }, { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 2, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, }, },], }) }); !(function ($) {
    ("use strict"); var scrolltoOffset = $("#header").outerHeight() - 17; $(document).on("click", ".nav-menu a, .mobile-nav a, .scrollto", function (e) {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash); if (target.length) {
                e.preventDefault(); var scrollto = target.offset().top - scrolltoOffset; if ($(this).attr("href") == "#header") { scrollto = 0 }
                $("html, body").animate({ scrollTop: scrollto, }, 1500, "easeInOutExpo"); if ($(this).parents(".nav-menu, .mobile-nav").length) { $(".nav-menu .active, .mobile-nav .active").removeClass("active"); $(this).closest("li").addClass("active") }
                if ($("body").hasClass("mobile-nav-active")) { $("body").removeClass("mobile-nav-active"); $(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"); $(".mobile-nav-overly").fadeOut() }
                return !1
            }
        }
    }); $(document).ready(function () { ("use strict"); var loader = function () { setTimeout(function () { if ($("#int_loader").length > 0) { $("#int_loader").removeClass("show") } }, 700) }; loader(); if (window.location.hash) { var initial_nav = window.location.hash; if ($(initial_nav).length) { var scrollto = $(initial_nav).offset().top - scrolltoOffset; $("html, body").animate({ scrollTop: scrollto, }, 1500, "easeInOutExpo") } } }); if ($(".nav-menu").length) { var $mobile_nav = $(".nav-menu").clone().prop({ class: "mobile-nav d-lg-none", }); $("body").append($mobile_nav); $("body").prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa-solid fa-bars"></i></button>'); $("body").append('<div class="mobile-nav-overly"></div>'); $(document).on("click", ".mobile-nav-toggle", function (e) { $("body").toggleClass("mobile-nav-active"); $(".mobile-nav-toggle i").toggleClass(""); $(".mobile-nav-overly").toggle() }); $(document).on("click", ".mobile-nav .drop-down > a", function (e) { e.preventDefault(); $(this).next().slideToggle(300); $(this).parent().toggleClass("active") }); $(document).click(function (e) { var container = $(".mobile-nav, .mobile-nav-toggle"); if (!container.is(e.target) && container.has(e.target).length === 0) { if ($("body").hasClass("mobile-nav-active")) { $("body").removeClass("mobile-nav-active"); $(".mobile-nav-toggle i").toggleClass(""); $(".mobile-nav-overly").fadeOut() } } }) } else if ($(".mobile-nav, .mobile-nav-toggle").length) { $(".mobile-nav, .mobile-nav-toggle").hide() }
    $(window).scroll(function () { if ($(this).scrollTop() > 100) { $("#header").addClass("header-scrolled") } else { $("#header").removeClass("header-scrolled") } }); if ($(window).scrollTop() > 100) { $("#header").addClass("header-scrolled") }
    var heroCarousel = $("#heroCarousel"); var heroCarouselIndicators = $("#hero-carousel-indicators"); heroCarousel.find(".carousel-inner").children(".carousel-item").each(function (index) { index === 0 ? heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>") : heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>") }); heroCarousel.on("slid.bs.carousel", function (e) { $(this).find("h2").addClass("animate__animated animate__fadeInDown"); $(this).find("p, .let-started-btn").addClass("animate__animated animate__fadeInUp") }); $(document).ready(function () { $(".carousel-inner > .carousel-item:first").addClass("active"); $(".services-carousel").slick({ dots: !0, infinite: !1, speed: 300, autoplay: !0, autoplaySpeed: 20000, slidesToShow: 3, slidesToScroll: 3, lazyLoad: "ondemand", responsive: [{ breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2, }, }, { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, }, },], }); $(".service-stacks").slick({ dots: !1, arrows: !1, infinite: !1, speed: 300, autoplay: !0, autoplaySpeed: 5000, slidesToShow: 4, slidesToScroll: 1, lazyLoad: "ondemand", responsive: [{ breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1, }, }, { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 1, }, }, { breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 1, }, },], }); $(".partner-carousel").slick({ dots: !0, arrows: !1, infinite: !1, speed: 300, autoplay: !0, autoplaySpeed: 5000, slidesToShow: 5, slidesToScroll: 5, lazyLoad: "ondemand", responsive: [{ breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 4, }, }, { breakpoint: 1050, settings: { slidesToShow: 3, slidesToScroll: 3, }, }, { breakpoint: 990, settings: { slidesToShow: 2, slidesToScroll: 2, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, }, },], }); $(".awards-carousel").slick({ dots: !0, arrows: !1, infinite: !1, speed: 300, autoplay: !0, autoplaySpeed: 4000, slidesToShow: 5, slidesToScroll: 5, lazyLoad: "ondemand", responsive: [{ breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 4, }, }, { breakpoint: 1050, settings: { slidesToShow: 3, slidesToScroll: 3, }, }, { breakpoint: 990, settings: { slidesToShow: 2, slidesToScroll: 2, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, }, },], }); $(".testimonial-carousel").slick({ dots: !0, arrows: !1, infinite: !1, speed: 300, autoplay: !0, autoplaySpeed: 20000, slidesToShow: 1, slidesToScroll: 1, }); $(".fame-carousel").slick({ dots: !0, arrows: !1, infinite: !1, speed: 300, autoplay: !0, autoplaySpeed: 3000, slidesToShow: 6, slidesToScroll: 1, lazyLoad: "ondemand", responsive: [{ breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 1, }, }, { breakpoint: 1050, settings: { slidesToShow: 4, slidesToScroll: 1, }, }, { breakpoint: 990, settings: { slidesToShow: 3, slidesToScroll: 1, }, }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, }, },], }); $(".tech-carousel").slick({ dots: !0, arrows: !1, infinite: !1, speed: 300, autoplay: !0, autoplaySpeed: 3000, slidesToShow: 5, slidesToScroll: 5, lazyLoad: "ondemand", responsive: [{ breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 4, }, }, { breakpoint: 1050, settings: { slidesToShow: 3, slidesToScroll: 3, }, }, { breakpoint: 990, settings: { slidesToShow: 2, slidesToScroll: 2, }, }, { breakpoint: 480, settings: { dots: !1, slidesToShow: 1, slidesToScroll: 1, }, },], }) }); $(window).scroll(function () { if ($(this).scrollTop() > 100) { $(".back-to-top").fadeIn("slow") } else { $(".back-to-top").fadeOut("slow") } }); $(".back-to-top").click(function () { $("html, body").animate({ scrollTop: 0, }, 1500, "easeInOutExpo"); return !1 })
})(jQuery); (function ($) {
    $(window).on('scroll', function (event) { var scroll = $(window).scrollTop(); if (scroll < 20) { $(".header-innr").removeClass("sticky"); $(".logo .logo-brand img").attr("src", "/static/01bf24e0-b207-4864-9ca0-cd6aba42591a-removebg-preview.png") } else { $(".header-innr").addClass("sticky"); $(".logo .logo-brand img").attr("src","/static/01bf24e0-b207-4864-9ca0-cd6aba42591a-removebg-preview.png") } }); $(window).on('scroll', function (event) { var scroll = $(window).scrollTop(); if (scroll >= 20) { $(".inr").addClass("sticky-scroll") } else { $(".inr").removeClass("sticky-scroll") } }); $.fn.extend({
        easyResponsiveTabs: function (options) {
            var defaults = { type: "default", width: "auto", fit: !0, closed: "accordion", activate: function () { }, }; var options = $.extend(defaults, options); var opt = options, jtype = opt.type, jfit = opt.fit, jwidth = opt.width, vtabs = "vertical", accord = "accordion"; $(this).bind("tabactivate", function (e, currentTab) { if (typeof options.activate === "function") { options.activate.call(currentTab, e) } }); this.each(function () {
                var $respTabs = $(this); var $respTabsList = $respTabs.find("ul.resp-tabs-list"); $respTabs.find("ul.resp-tabs-list li").addClass("resp-tab-item"); $respTabs.css({ display: "block", width: jwidth, }); $respTabs.find(".resp-tabs-container > div").addClass("resp-tab-content"); jtab_options(); function jtab_options() {
                    if (jtype == vtabs) { $respTabs.addClass("resp-vtabs") }
                    if (jfit == !0) { $respTabs.css({ width: "100%", margin: "0px" }) }
                    if (jtype == accord) { $respTabs.addClass("resp-easy-accordion"); $respTabs.find(".resp-tabs-list").css("display", "none") }
                }
                var $tabItemh2; $respTabs.find(".resp-tab-content").before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'><i class='icofont-thin-down'></i></span></h2>"); var itemCount = 0; $respTabs.find(".resp-accordion").each(function () { $tabItemh2 = $(this); var innertext = $respTabs.find(".resp-tab-item:eq(" + itemCount + ")").html(); $respTabs.find(".resp-accordion:eq(" + itemCount + ")").append(innertext); $tabItemh2.attr("aria-controls", "tab_item-" + itemCount); itemCount++ }); var count = 0, $tabContent; $respTabs.find(".resp-tab-item").each(function () {
                    $tabItem = $(this); $tabItem.attr("aria-controls", "tab_item-" + count); $tabItem.attr("role", "tab"); if (options.closed !== !0 && !(options.closed === "accordion" && !$respTabsList.is(":visible")) && !(options.closed === "tabs" && $respTabsList.is(":visible"))) { $respTabs.find(".resp-tab-item").first().addClass("resp-tab-active"); $respTabs.find(".resp-accordion").first().addClass("resp-tab-active"); $respTabs.find(".resp-tab-content").first().addClass("resp-tab-content-active").attr("style", "display:block") }
                    var tabcount = 0; $respTabs.find(".resp-tab-content").each(function () { $tabContent = $(this); $tabContent.attr("aria-labelledby", "tab_item-" + tabcount); tabcount++ }); count++
                }); $respTabs.find("[role=tab]").each(function () {
                    var $currentTab = $(this); $currentTab.click(function () {
                        var $tabAria = $currentTab.attr("aria-controls"); if ($currentTab.hasClass("resp-accordion") && $currentTab.hasClass("resp-tab-active")) { $respTabs.find(".resp-tab-content-active").slideUp("", function () { $(this).addClass("resp-accordion-closed") }); $currentTab.removeClass("resp-tab-active"); return !1 }
                        if (!$currentTab.hasClass("resp-tab-active") && $currentTab.hasClass("resp-accordion")) { $respTabs.find(".resp-tab-active").removeClass("resp-tab-active"); $respTabs.find(".resp-tab-content-active").slideUp().removeClass("resp-tab-content-active resp-accordion-closed"); $respTabs.find("[aria-controls=" + $tabAria + "]").addClass("resp-tab-active"); $respTabs.find(".resp-tab-content[aria-labelledby = " + $tabAria + "]").slideDown().addClass("resp-tab-content-active") } else { $respTabs.find(".resp-tab-active").removeClass("resp-tab-active"); $respTabs.find(".resp-tab-content-active").removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"); $respTabs.find("[aria-controls=" + $tabAria + "]").addClass("resp-tab-active"); $respTabs.find(".resp-tab-content[aria-labelledby = " + $tabAria + "]").addClass("resp-tab-content-active").attr("style", "display:block") }
                        $currentTab.trigger("tabactivate", $currentTab)
                    }); $(window).resize(function () { $respTabs.find(".resp-accordion-closed").removeAttr("style") })
                })
            })
        },
    })
})(jQuery); $(document).ready(function () { $("#succStoryTab").easyResponsiveTabs({ type: "default", width: "auto", closed: "accordion", fit: !0, activate: function (event) { var $tab = $(this); var $info = $("#tabInfo"); var $name = $("span", $info); $name.text($tab.text()); $info.show() }, }); $("#requirement").change(function () { if ($(this).val() == "Application-For-Job") { $("#show_button").trigger("click") } }); $(".modal-footer .btn").click(function () { location.reload(!0) }); $("#careerModal").on("hidden.bs.modal", function (e) { location.reload() }); var highestBox = 0; $(".ebookSection .ebookArea").each(function () { if ($(this).height() > highestBox) { highestBox = $(this).height() } }); $(".ebookSection .ebookArea").height(highestBox); $.CookiesMessage({ messageText: "We use technical & analytics cookies to ensure that we give you the best experience on our website. Read more about our", messageBg: "#65747e", messageColor: "#FFFFFF", messageLinkColor: "#FFFFFF", closeEnable: !0, closeColor: "#444444", closeBgColor: "#000000", acceptEnable: !0, acceptText: "Accept & Close", infoEnable: !0, infoText: "Cookies Policy", infoUrl: "https://www.indusnet.co.in/cookie-policy.html", cookieExpire: 180, }) })