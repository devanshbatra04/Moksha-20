// Read the article
// https://css-tricks.com/polylion
// runFirstAnim
var tmax_opts = {
    delay: 0,
    repeat: 1,
    repeatDelay: 0.5,
    // yoyo: true,
    // call: runSecondAnim
};

var tmax_tl           = new TimelineMax(tmax_opts),
    polylion1_shapes   = $('svg.polylion1, svg.polylion1 > g polygon, .text1'),
    polylion2_shapes   = $('svg.polylion2, svg.polylion2 > g polygon, .text2'),
    polylion3_shapes   = $('svg.polylion3, svg.polylion3 > g polygon, .text3'),
    polylion4_shapes   = $('svg.polylion4, svg.polylion4 > g polygon, .text4'),
    polylion_stagger  = 0.00875,
    polylion_duration = 1.5;

// polylion_shapes.css("scale", "0");
var polylion_staggerFrom = {
    scale: 0,
    opacity: 0,
    ease: Elastic.easeInOut,
    transformOrigin: 'center center',
};
var polylion_staggerTo = {
    opacity: 1,
    scale: 1,
    ease: Elastic.easeInOut
};

TweenMax.set(polylion1_shapes, {
    scale: 0,
    opacity: 0,
    // display:"none"
});
TweenMax.set(polylion2_shapes, {
    scale: 0,
    opacity: 0,
    display:"none"
});
TweenMax.set(polylion3_shapes, {
    scale: 0,
    opacity: 0,
    display:"none"
});
TweenMax.set(polylion4_shapes, {
    scale: 0,
    opacity: 0,
    display:"none"
});


// tmax_tl.To(polylion1_shapes, polylion_duration, polylion_staggerTo, 0)
window.animCount = 0;
tmax_tl.staggerTo(polylion1_shapes, polylion_duration, polylion_staggerTo, polylion_stagger, 0, callNextAnim)

function callNextAnim() {
    shapes = [polylion1_shapes, polylion1_shapes, polylion2_shapes, polylion2_shapes, polylion3_shapes, polylion3_shapes, polylion4_shapes, polylion4_shapes];
    states = [polylion_staggerTo, polylion_staggerFrom, polylion_staggerTo, polylion_staggerFrom, polylion_staggerTo, polylion_staggerFrom, polylion_staggerTo, polylion_staggerFrom]
    if (animCount % 2 == 1) {
        shapes[animCount].css({"display": "none"});
    }
    animCount = (animCount+1)%8;
    shapes[animCount].css({"display": "block"});

    tmax_tl.staggerTo(shapes[animCount], polylion_duration, states[animCount], polylion_stagger, "+=1", callNextAnim)
}