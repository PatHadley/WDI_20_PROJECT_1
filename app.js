$(function(){

  var cadCount;
  var posCalc1;
  var posCalc2;
  var win;

function countDown(text, time, sound){
  setTimeout(function(){
  $("#track h3").remove("#track h3");
  $("#track").append("<h3>"+text+"</h3>");
  new Audio(sound).play();
  }, time);
}
function crowdSounds(on){ // to run set 'on' to true - to kill set to false
  var cheers = new Audio("applause.mp3");
  if (on === "true"){
  setTimeout (function(){
  cheers.loop = true;
  cheers.autoplay = true;
}, 1000)
} else if (on === "false"){
  cheers.stop;
}
}

  function start(){
    $("#btstart").off("click")
    positionCalcP1();
    positionCalcP2();
    crowdSounds(true);
    countDown("3",0000,"beep.mp3");
    countDown("2",1000,"beep.mp3");
    countDown("1",2000,"beep.mp3");
    countDown("GO!",3000,"gun.mp3");
    countDown("",4000);
    setTimeout (function(){
       cadCount = setInterval(cadenceCounter, 1000);
       posCalc1 = setInterval(positionCalcP1, 50);
       posCalc2 = setInterval(positionCalcP2, 50);
       win = setInterval(catchCalc, 50);
       crowdSounds(true);
    }, 4000);
  };

function stop() {
  clearInterval(cadCount);
  clearInterval(posCalc1);
  clearInterval(posCalc2);
  clearInterval(win);
  crowdSounds(false);
  angleP1 = -90;
  angleP2 = 90;
  $("#btstart").on("click",start);
};

stop();

var cadenceP1 = 0;
var cadenceP2 = 0;
var flipAS = false;
var flipKL = false
var speedP1 = 0;
var speedP2 = 0;

// MAKE FUNCTION TO DO BUTTON MASHING!
// function masher(key1, key2, key3, key4, flipper){
//   console.log(key1, key2, key3, key4, flipper);
//   $(window).keypress(function(e){
//     if ((e.which) === key1 ||(e.which) === key2){
//       if (flipper == false){
//         flipper = !flipper;
//       }
//     } else if ((e.which) === key3 ||(e.which) === key4){
//           if (flipAS == true){
//           cadenceP1 ++;
//           fliper = !flipper;
//         }
//       }
//     });
//   return cadenceP1;
// };

// masher(97, 65, 115, 83, flipAS);

$(window).keypress(function(e){
  if ((e.which) === 97 ||(e.which) === 65){
    if (flipAS == false){
      flipAS = !flipAS;
    }
  } else if ((e.which) === 115 ||(e.which) === 83){
        if (flipAS == true){
        cadenceP1 ++;
        flipAS = !flipAS;
      }
    }
  });

$(window).keypress(function(e){
  if ((e.which) === 75 ||(e.which) === 107){
    if (flipKL == false){
      flipKL = !flipKL;
    }
  } else if ((e.which) === 76 ||(e.which) === 108){
        if (flipKL == true){
        cadenceP2 ++;
        flipKL = !flipKL;
      }
    }
  });

function cadenceCounter(){
  speedP1 = cadenceP1/3;
  speedP2 = cadenceP2/3;
  cadenceP1 = 0;
  cadenceP2 = 0;
};

function degsToRads(angleDegs){
  angleRads = (angleDegs*Math.PI)/180;
  return angleRads;
}

var angleP1 = -90;
var angleP2 = 90;
var rad = 125;
var startXPosP1 = 660;
var startYPosP1 = 320;
var startXPosP2 = 720;
var startYPosP2 = 320;

function positionCalcP1 (){
  angleP1 += speedP1;
  spriteAngleP1 = angleP1 - 270;
  xPosP1 = (startXPosP1 + (500 * (Math.cos(degsToRads(angleP1)))));
  yPosP1 = (startYPosP1 + (130 * (Math.sin(degsToRads(angleP1)))));
  $("#sprite1").css({"left":xPosP1, "top":yPosP1});
  $("#sprite1").css({transform:'rotate(' + spriteAngleP1 + 'deg)'});
  return angleP1;
};

function positionCalcP2 (){
  angleP2 += speedP2;
  spriteAngleP2 = angleP2 + 270;
  xPosP2 = (startXPosP2 + (500 * (Math.cos(degsToRads(angleP2)))));
  yPosP2 = (startYPosP2 + (130 * (Math.sin(degsToRads(angleP2)))));
  $("#sprite2").css({"left":xPosP2, "top":yPosP2});
  $("#sprite2").css({transform:'rotate(' + spriteAngleP2 + 'deg)'});
  return angleP2;
};

function catchCalc(){
  if (((angleP2 - angleP1) <= 6) && (angleP1 >= 0)){
    $("#track").append("<h3 class='red'>RED WINS</h3>"); //P1
    scoreboard ("p1");
    stop();
  } else if ((angleP2 - angleP1) >= 354){
    $("#track").append("<h3 class='blue'>BLUE WINS</h3>"); //P2
    scoreboard ("p2");
    stop();
  }
}

var scoreP1 = 0;
var scoreP2 = 0;

function scoreboard (winner){
  if (winner === "p1") {
    scoreP1 ++;
    $("#p1Score span").remove("#p1Score span"); 
    $("#p1Score").append("<span>"+scoreP1+"</span>");
    $(".scoreboard").css({"background-color":"#CD4734"});
    $(".scoreboard table th, .scoreboard table td").css({"color":"#ddd"});

  } else if (winner === "p2") {
    scoreP2 ++;
    $("#p2Score span").remove("#p2Score span"); 
    $("#p2Score").append("<span>"+scoreP2+"</span>");
    $(".scoreboard").css({"background-color":"#658FDE"});
    $(".scoreboard table th, .scoreboard table td").css({"color":"#ddd"});
  }
}
});