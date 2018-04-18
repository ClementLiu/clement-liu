jQuery(document).ready(function($) {
    // Head Animation
    var path = anime.path('#HeadJump #path');

    var motionPath = anime({
        targets: '#HeadJump #ballJump',
        translateX: {
            value: path('x'),
            duration: 1800,
        },
        translateY: {
            value: path('y'),
            duration: 1800,
        },
        rotate: path('angle'),
        opacity: {
            value: 0,
            delay: 1800,
            duration: 500,
        },
        r: {
            value: 0,
            delay: 1800,
            duration: 200,
        },
        easing: 'linear',

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
        rx: function(target, index) {
            if (index == 3) { return 45 } else { return 20 }
        },
        ry: function(target, index) {
            if (index == 3) { return 45 } else { return 20 }
        }
    });

    // Project Collection
    // pop up box 
    var motionPath = anime({
        targets: '#projectFrist g ',
        fill: "#fff",
        opacity: .7,
        delay: function(target, index) {
            return 50 * index;
        },
        easing: 'easeInOutQuart',
        duration: 60,
        loop: true,
        direction: 'alternate'
    });
    // connect linke 
    var lineDrawing = anime({
        targets: '#projectCollectionSVG #connectLine .cls-60',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        delay: function(el, i) { return i * 205 },
        direction: 'alternate',
        loop: true
    });
    // transparent change
    var transparentCo = anime({
        targets: '#projectCollectionSVG .transparentCo',
        opacity: function(target, index) {
            return .2 * (index + 1);
        },
        delay: function(target, index) {
            return 400 * index;
        },
        easing: 'easeInOutQuart',
        duration: 400,
        loop: true,
        direction: 'alternate'
    });
    var transparentCo = anime({
        targets: '#projectCollectionSVG #headRed',
        fill: "#93adb5",
        easing: 'easeInOutQuart',
        duration: 1000,
        loop: true,
        direction: 'alternate'
    });
    // critique
    var critique = anime({
        targets: '#critique .talkBulbs',
        // easing: 'easeInOutQuart',
        duration: 500,
        loop: true,
        width: function(el, i) {
            switch (i) {
                case 0:
                    return 70;
                    break;
                case 1:
                    return 70;
                    break;
                case 2:
                    return 50;
                    break;
                case 3:
                    return 102;
                    break;
                case 4:
                    return 102;
                    break;
                case 5:
                    return 72;
                    break;
                default:
                    return 72;
            }
        },
        delay: function(el, i) {
            return 500 + (i * 400);
        },
        // opacity: {
        //     value: 0.4,
        //     duration: 5000,
        //     delay:5000,
        //     direction: 'alternate'
        // },
        elasticity: 300,
        direction: 'normal'
    });

// Process
var Process = anime({
        targets: '#Process .processCirFront',
        // easing: 'easeInOutQuart',
        duration: 1000,
        delay:1000,
        loop: true,
        cx: '+=4',
        cy: '+=4',
        // opacity: {
        //     value: 0.4,
        //     duration: 5000,
        //     delay:5000,
        //     direction: 'alternate'
        // },
        elasticity: 300,
        direction: 'alternate'
    });

});