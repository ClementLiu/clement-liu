jQuery(document).ready(function($) {
    var locationsp = [];
    var sideAnim = [];
    var controller = new ScrollMagic.Controller();
    $(".decorBack2").each(function(index) {
        // console.log($(this).offset());
        $(this).attr('id', 'decor' + index);
        locationsp.push($(this).offset().top + 210);
    });
    $(".sideText").each(function(index, el) {
        $(this).css({ 'transform': 'rotate(-90deg) translate( -' + locationsp[index] + 'px, 81vw)' });


        var opacityChange = TweenMax.staggerFromTo("#sliderTitle" + index, .8, {
            opacity: 0,
        }, {
            opacity: 0.1,
            ease: Power2.easeInOut
        });
        var scene = new ScrollMagic.Scene({
                triggerElement: "#decor" + index,
                offset: -300
            })
            .setTween(opacityChange);
            // .addTo(controller); // assign the scene to the controller
        sideAnim.push(scene);
    });
    controller.addScene(sideAnim);



    // Scrool Magic
});