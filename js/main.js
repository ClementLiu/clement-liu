jQuery(document).ready(function($) {
    var locationsp = [];
    var sideAnim = [];
    var controller = new ScrollMagic.Controller();
    $(".decorBack2").each(function(index) {
        // console.log($(this).offset());
        $(this).attr('id', 'decor' + index);
        locationsp.push($(this).offset().top + 210);
    });
    // select background color
    $(".decorBack1").each(function(index) {
        // console.log($(this).offset());
        $(this).attr('id', 'decorB' + index);
        // locationsp.push($(this).offset().top + 210);
    });

    $(".sideText").each(function(index, el) {
        $(this).css({ 'transform': 'rotate(-90deg) translate( -' + locationsp[index] + 'px, 81vw)' });


        var opacityChange = TweenMax.staggerFromTo("#sliderTitle" + index, .8, {
            opacity: 0,
        }, {
            opacity: 0.1,
            ease: Power2.easeInOut
        });

        // add backgroundColor changing

        var colorChange = TweenMax.staggerFromTo("#decorB" + index, .8, {
            filter: "contrast(0%)",
        }, {
            filter: "contrast(100%)",
            ease: Power2.easeInOut
        });

        var scene = new ScrollMagic.Scene({
                triggerElement: "#decor" + index,
                offset: -300
            })
            .setTween(opacityChange);

        // add change background scene
        var sceneColor = new ScrollMagic.Scene({
                triggerElement: "#decor" + index,
                offset: -300
            })
            .setTween(colorChange);
        // .addTo(controller); // assign the scene to the controller
        sideAnim.push(scene);
        sideAnim.push(sceneColor);
    });
    controller.addScene(sideAnim);



    // Scrool Magic


var html = document.documentElement;
var body = document.body;

var scroller = {
  target: document.querySelector("#scroll-container"),
  ease: 0.05, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};

var requestId = null;

TweenLite.set(scroller.target, {
  rotation: 0.01,
  force3D: true
});

window.addEventListener("load", onLoad);

function onLoad() {    
  updateScroller();  
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll); 
}

function updateScroller() {
  
  var resized = scroller.resizeRequest > 0;
    
  if (resized) {    
    var height = scroller.target.clientHeight;
    // body.style.height = height + "px";
    body.style.height = 100 + "px";
    scroller.resizeRequest = 0;
  }
      
  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }
  
  TweenLite.set(scroller.target, { 
    y: -scroller.y 
  });
  
  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}


});