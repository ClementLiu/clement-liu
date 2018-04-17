jQuery(document).ready(function($) {
    // Head Animation
    var path = anime.path('#HeadJump #path');

    var motionPath = anime({
        targets: '#HeadJump #ballJump',
        translateX: path('x'),
        translateY: path('y'),
        rotate: path('angle'),
        easing: 'linear',
        duration: 1800,
        loop: false,
    });


    var svgAttributes = anime({
        targets: '#HeadJump rect',
        easing: 'easeInOutExpo',
        delay: function(target, index) {
            switch (index) {
                case 0:
                    return 0;
                    break;
                case 1:
                    return 200;
                    break;
                case 2:
                    return 840;
                    break;
                case 3:
                    return 1300;
                    break;
                default:
                    return index * 420;
            }

        },
        fill: function(target, index) {
            switch (index) {
                case 0:
                    return "#111925";
                    break;
                case 1:
                    return "#fff";
                    break;
                case 2:
                    return "#d8d8d8";
                    break;
                case 3:
                    return "#fff";
                    break;
                default:
                    return "#fff";
            }
        },
        // duration: 500,
        rx: 20,
        ry: 20
    });

    // Project Collection
    var motionPath = anime({
        targets: '#projectFrist g',
        fill: "#fff",
        opacity:.7,
        delay: function(target, index){
            return 50 * index ;
        },
        easing: 'easeInOutQuart',
        duration: 60,
        loop: true,
        direction: 'alternate'
    });




});