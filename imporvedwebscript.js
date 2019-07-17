/*****************front page text changer**********************/
var texts = ["Hello!", "Bonjour!", "Hola!", "Ni hao!", "Guten Tag!", "Salve!", "Ahlan!", "Hej!"];
var count = 0;
function changeText() {
    $("#maintitle").text(texts[count]);
    count < 7 ? count++ : count = 0;
}
setInterval(changeText, 1000);
/*****************front page text changer**********************/
/****************************************THE MOVING BARS*******************/
jQuery(document).ready(function($){
var $seccon = $('.theclientspart')

  $theboxone = $('.thebar1')
  $theboxtwo = $('.thebar2')
  $theboxthree = $('.thebar3')
  $theboxfour = $('.thebar4')
  $theboxfive = $('.thebar5')

  $thepinn = $('#clientpart_titlesection')


// initialize controller
var thisguy = new ScrollMagic.Controller();
  thisguy.scrollTo(100);


var timeline = new TimelineMax();
  timeline.set($seccon, {autoAlpha: 1})



  var timeline = new TimelineMax();
  var tween1 = TweenMax.to($theboxone, 1, {opacity:1})
  var tween2 = TweenMax.to($theboxone, 1, {delay: 1, ease:Linear.easeInOut, duration:200, width:500})

  var tween3 = TweenMax.to($theboxtwo, 1, {opacity:1})
  var tween4 = TweenMax.to($theboxtwo, 1, {delay: 1, ease:Linear.easeInOut, duration:200, width:350})

  var tween5 = TweenMax.to($theboxthree, 1, {opacity:1})
  var tween6 = TweenMax.to($theboxthree, 1, {delay:1, ease:Linear.easeInOut, duration:200, width:200})

  var tween7 = TweenMax.to($theboxfour, 1, {opacity:1})
  var tween8 = TweenMax.to($theboxfour, 1, {delay:1, ease:Linear.easeInOut, duration:200, width:150})

  var tween9 = TweenMax.to($theboxfive, 1, {opacity:1})
  var tween10 = TweenMax.to($theboxfive, 1, {delay:1, ease:Linear.easeInOut, duration:200, width:300})





  timeline.add(tween1).add(tween2).add(tween3).add(tween4).add(tween5).add(tween6).add(tween7).add(tween8).add(tween8).add(tween9).add(tween10)
/***********************************/

var timeline = new ScrollMagic.Scene({triggerElement:1, duration:350, immediateRender: false})
    .setPin("#clientpart_titlesection")
    .triggerHook("enter leave")
    .addTo(thisguy)
    //.addIndicators({name: ` this is for the moving bars (duration: 90)`}) //uncomment to add indicators 
    .setTween(timeline);
    timeline.offset(1800);
});
/****************************************THE MOVING BARS*******************/


/***************************THE EXPANDING DEALs***********************/
jQuery(document).ready(function($){
  var $cardmovers = $('.card_section')
   $leftfirst_card = $('#card_one')
   $middlesecond_card = $('#card_two')
   $rightthird_card = $('#card_three')
   $card_sectionpinner = $('.section_pinner')

//controller
var cardsection_controller = new ScrollMagic.Controller();
cardsection_controller.scrollTo(100)


var timeline = new TimelineMax();
timeline.set($cardmovers, {autoAlpha:1})

var timeline = new TimelineMax();

/*******CARD MOVERS LEFT********/
var cardsection_tween1 = TweenMax.to($leftfirst_card, 1,{x:-230, y:-200, ease:Linear.easeInOut, duration:500})
var cardsection_tweenmoverleft1 = TweenMax.to($leftfirst_card, 1,{x:-130, y:-100,  ease:Linear.easeInOut, duration:500})
var cardsection_tweenmoverleft2 = TweenMax.to($leftfirst_card, 1,{x:-65, y:-50,  ease:Linear.easeInOut, duration:500})
var cardsection_tweenmoverleft3 = TweenMax.to($leftfirst_card, 1,{x:-32, y:-25,  ease:Linear.easeInOut, duration:500})

/*******CARD MOVERS RIGHT********/
var cardsection_tween2 = TweenMax.to($rightthird_card, 1,{x:230, y:-200,  ease:Linear.easeInOut, duration:500})
var cardsection_tweenmoverright1 = TweenMax.to($rightthird_card, 1,{x:130, y:-100, ease:Linear.easeInOut, duration:500})
var cardsection_tweenmoverright2 = TweenMax.to($rightthird_card, 1,{x:65, y:-50, ease:Linear.easeInOut, duration:500})
var cardsection_tweenmoverright3 = TweenMax.to($rightthird_card, 1,{x:32, y:-25,  ease:Linear.easeInOut, duration:500})


/***CARD FADERS***/
  var cardsection_tween1_5 = TweenMax.to($leftfirst_card, 1,{delay:5, opacity:0.6})
  var cardsection_tween1_10 = TweenMax.to($leftfirst_card, 1,{delay:5, opacity:0.9})
  var cardsection_tween1_15 = TweenMax.to($leftfirst_card, 1,{delay:5, opacity:1})

  var cardsection_tween2_5 = TweenMax.to($rightthird_card, 1,{delay:1, opacity:0.6})
  var cardsection_tween2_10 = TweenMax.to($rightthird_card, 1,{delay:1, opacity:0.9})
  var cardsection_tween2_15 = TweenMax.to($rightthird_card, 1,{delay:1, opacity:1})
/***CARD FADERS***/


var cardsection_tween3 = TweenMax.to($middlesecond_card, 1,{y:-150, delay:5, ease:Linear.easeInOut, duration:500})



timeline.add(cardsection_tween1)
.add(cardsection_tween2)


.add(cardsection_tween3)

.add(cardsection_tween1_5)
.add(cardsection_tween1_10)
.add(cardsection_tween1_15)

.add(cardsection_tween2_5)
.add(cardsection_tween2_10)
.add(cardsection_tween2_15)

var timeline = new ScrollMagic.Scene({triggerElement:1, duration:200})
.setPin('.section_pinner')
.triggerHook("enter leave")
.addTo(cardsection_controller)
.addIndicators({name: "this is the card mover"})
.setTween(timeline)
timeline.offset(2480);});
/***************************THE EXPANDING DEALs***********************/
