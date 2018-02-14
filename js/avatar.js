// ready
jQuery(document).ready(function($) {


    // $(window).load(function() {
    //     $(".headImg").twentytwenty({
    //         default_offset_pct: 0.8,
    //         before_label: 'Avatar', // Set a custom before label
    //         after_label: 'Avatar', // Set a custom after label

    //     });
    // });

    var currentSliceC = $('.preNexSliders > div');
    var preSliceC = $('#Pre');
    var nexSliceC = $('#Nex');
    var aniColorArray = $(".colorAni").toArray();
    var navTitleArray = $(".navButton>.navTitle>div>p").toArray();



    $(".headImg").twentytwenty({
        default_offset_pct: 0.7,
        before_label: '', // Set a custom before label
        after_label: '', // Set a custom after label
        no_overlay: true,


    });

    $('.bodySlice').slick({
        dots: true,
        draggable: false,
        adaptiveHeight: true,
        initialSlide: 0,
        appendDots: '#sliceNav',
        dotsClass: 'sliceNavDot',
        arrows: true,
        prevArrow: '#bothSlclassersPre',
        nextArrow: '#bothSlclassersNex',
        autoplay: false,
        infinite: false,

    });

    // var currentSlide = $('.bodySlice').slick('slickCurrentSlide');
    // console.log(currentSlide);



    $('#bothSlclassersPre, #bothSlclassersNex').css('cursor', 'pointer');

    $(".sliceImgBlock").slick({
        prevArrow: '<div class="arrawLeftBox"><span class="arrawLeft"></span></div>',
        // prevArrow: this.,
        nextArrow: '<div class="arrawRightBox"><span class="arrawRight"></span></div>',
    });
    var autoSlice = $('.sliceImgBlockAuto').slick({
        // autoplay: true,
        autoplaySpeed: 1800,
        arrows: false,
    });


    // move card

    $('.whiteCard>div:nth-child(2)').hover(function() {
        $(this).prev().css('left', '-139px');
    }, function() {
        $(this).prev().css('left', '1px');
    });
    $('.whiteCard>div:nth-child(3)').hover(function() {
        $(this).prev().css('left', '-93px');
        $(this).prev().prev().css('left', '-139px');
    }, function() {
        $(this).prev().css('left', '47px');
        $(this).prev().prev().css('left', '1px');
    });

    // add arraw

    // $('.sliceImgBlock').append('<div class="arrawLeftBox"><span class="arrawLeft"></span></div><div class="arrawRightBox"><span class="arrawRight"></span></div>');
    // vimeoBug
    var player = new Vimeo.Player($("#vimeoBug"));
    player.on('play', function() {
        console.log('played the video!');
    });
    player.on('pause', function() {
        if (currentSlideState == 1) {
            player.play();
            console.log('played the video again!');
        }
    });

    var bodySliceVar = $('#bodySliceID');
    // change slice
    $('#bodySliceID').on('afterChange', function(event, slick, currentSlide) {
        var realCurrentBody = bodySliceVar.slick('slickCurrentSlide');
        console.log(realCurrentBody);

        currentSlideState = currentSlide;
        changeColorAndHeight(realCurrentBody, preSliceC, currentSliceC, nexSliceC);
        if (realCurrentBody == 1) {
            player.play();
            autoSlice.slick('slickPlay');

        } else {
            player.pause();
            autoSlice.slick('slickPause');
        }
        // left

    });
    // console.log(currentSlideState + 'state');
    // changeColorAndHeight(currentSlideState);


    // back top
    $('.preNexSliders').click(function() {
        $('body,html').animate({
            scrollTop: $("#headID").height()
        }, 800);
        return false;
    });


    // hover change Nav color 


    console.log('test');
    // for (var i = navTitleHoverArray.length - 1; i >= 0; i--) {
    //     console.log("de");
    //     navTitleHoverArray.each(function(i, el) {
    //         el.hover(function() {
    //              Stuff to do when the mouse enters the element 
    //             console.log("hoverd");
    //             changeOpc(i);
    //         }, function() {
    //             /* Stuff to do when the mouse leaves the element */
    //         });

    //     });
    // }
    var navTitleHoverArray = $("#sliceNav>ul>li");

    // ???why this bug happen 
    // ???why this bug happen 
    // ???why this bug happen 
    // ???why this bug happen 
    // ???why this bug happen 
    // navTitleHoverArray.each(function(index, el) {
    //        console.log("each" + el);

    //        el.hover(function(index) {
    //             Stuff to do when the mouse enters the element 
    //            changeOpc(indext);
    //        }, function() {
    //            /* Stuff to do when the mouse leaves the element */
    //        });
    //    });

    // for (var i = 0; i < navTitleHoverArray.length; i++) {
    //     // navTitleHoverArray[i]
    //     console.log("OurtEqhoverd" + i);
    //     $("#sliceNav>ul>li").eq(i).hover(function() {
    //         console.log("hoverd" + i);
    // ???why this bug happen only log 3
    // ???why this bug happen only log 3
    // ???why this bug happen only log 3
    // ???why this bug happen only log 3
    //         changeOpc(i);
    //     }, function() {
    //         console.log("hoverdbeofore" + i);
    //         /* Stuff to do when the mouse leaves the element */
    //     });


    // }
    // ???why this bug happen 
    // ???why this bug happen 
    // ???why this bug happen 
    // ???why this bug happen 
    // ???why this bug happen 
    // no loop
    // console.log("OurtEqhoverd" + 1);
    $("#sliceNav>ul>li").eq(1).hover(function() {
        // console.log("hoverd" + 1);

        changeOpc(1);
    }, function() {
        // console.log("hoverdbeofore" + 1);
        for (var i = aniColorArray.length - 1; i >= 0; i--) {
            navTitleArray[i].style.opacity = '1.0';
            // navTitleArray[i].style.color = 'white';
        }
        /* Stuff to do when the mouse leaves the element */
    });
    // console.log("OurtEqhoverd" + 2);
    $("#sliceNav>ul>li").eq(2).hover(function() {
        // console.log("hoverd" + 2);

        changeOpc(2);
    }, function() {
        // console.log("hoverdbeofore" + 2);
        for (var i = aniColorArray.length - 1; i >= 0; i--) {
            navTitleArray[i].style.opacity = '1.0';
            // navTitleArray[i].style.color = 'white';
        }
        /* Stuff to do when the mouse leaves the element */
    });
    // console.log("OurtEqhoverd" + 3);
    $("#sliceNav>ul>li").eq(3).hover(function() {
        // console.log("hoverd" + 3);

        changeOpc(3);
    }, function() {
        // console.log("hoverdbeofore" + 3);
        for (var i = aniColorArray.length - 1; i >= 0; i--) {
            navTitleArray[i].style.opacity = '1.0';
            // navTitleArray[i].style.color = 'white';
        }
        /* Stuff to do when the mouse leaves the element */
    });
    // console.log("OurtEqhoverd" + 0);
    $("#sliceNav>ul>li").eq(0).hover(function() {
        // console.log("hoverd" + 0);

        changeOpc(0);
    }, function() {
        // console.log("hoverdbeofore" + 0);
        for (var i = aniColorArray.length - 1; i >= 0; i--) {
            navTitleArray[i].style.opacity = '1.0';
            // navTitleArray[i].style.color = 'white';
        }
        /* Stuff to do when the mouse leaves the element */
    });

    function changeColorAndHeight(currentSlideN, preSliceC, currentSliceC, nexSliceC) {
        // console.log(currentSlideN + 'state');
        var colorCurr, colorPre, colorNex;
        changheight(currentSlideN);
        // aniColorArray[currentSlideN].css('height', '100%');
        switch (currentSlideN) {
            case 0:
                console.log(currentSlideN + 'state');
                colorPre = "#000000";
                // colorPre = "#1a1a1a";
                // colorCurr = "#FFC800";
                // colorNex = "#56C3F8";
                colorNex = "#f60400";
                break;


            case 1:
                console.log(currentSlideN + 'state');
                colorPre = "#f60400";
                // colorPre = "#FFC800";
                // colorCurr = "#56C3F8";
                // colorNex = "#DB00FF";
                colorNex = "#f60400";
                break;
            case 2:
                console.log(currentSlideN + 'state');
                colorPre = "#f60400";
                // colorPre = "#56C3F8";
                // colorCurr = "#DB00FF";
                // colorNex = "#FF0062";
                colorNex = "#f60400";
                break;
            case 3:
                console.log(currentSlideN + 'state');
                colorPre = "#f60400";
                // colorPre = "#DB00FF";
                // colorCurr = "#FF0062";
                // colorNex = "#1a1a1a";
                colorNex = "#000000";
                break;
            default:
                console.log(0 + 'state');
                colorPre = "#000000";
                // colorPre = "#1a1a1a";
                // colorCurr = "#FFC800";
                // colorNex = "#56C3F8";
                colorNex = "#f60400";
                break;
        }
        // chang color
        preSliceC.css('background-color', colorPre);
        // currentSliceC.css('background-color', colorCurr);
        nexSliceC.css('background-color', colorNex);

        // change height


    }

    function changheight(currentSlideN) {
        for (var i = aniColorArray.length - 1; i >= 0; i--) {
            aniColorArray[i].style.height = '0%';
            navTitleArray[i].style.color = 'white';
        }
        aniColorArray[currentSlideN].style.height = '100%';
        navTitleArray[currentSlideN].style.color = 'black';
    }

    function changeOpc(currentSlideOpc) {
        for (var i = aniColorArray.length - 1; i >= 0; i--) {
            navTitleArray[i].style.opacity = '1.0';
            // navTitleArray[i].style.color = 'white';
        }
        // aniColorArray[currentSlideOpc].style.height = '100%';
        // console.log(currentSlideOpc);    
        navTitleArray[currentSlideOpc].style.opacity = '0.7';
    }

});