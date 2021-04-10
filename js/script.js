document.getElementById("demo").innerHTML = 5 + 6;


// calculating celsious
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  document.getElementById("demo2").innerHTML =toCelsius(85);




// change color of the text of the body 
      document.getElementById('change').onclick = changeColor; 
    function changeColor() {
        document.body.style.color = "red";
        return false;
    } 
    // change text
    function myFunction() {
      document.getElementById("demo3").innerHTML = "Welcome!";
    }
//change heading bg color
    function changeHeadingBg(color){
      document.getElementById("heading").style.background = color;
  }

//change background color of body
  function changeBodyBg(color){
    document.body.style.background = color;
}


// change bg of button
function changeButtonBg(color){
  document.getElementById("btn").style.background = color;
}


// jquery start

$(document).ready(function(){
  // show alert message on webpage
  alert("Welcome Everyone");

  // click button to show alert
  $('#btn1').click(function(){
    alert("Hello");
  });

  // hide text
  $('#hide').click(function(){
    $('h3').hide();
  });
  // show text
  $('#show').click(function(){
    $('h3').show();
  });
    // show/hide text
    $('#toggle').click(function(){
      $('h3').toggle();
    });
    // fadeout
    $('#fadeout').click(function(){
      $('h3').fadeOut();
    });
    // fadeIn
    $('#fadein').click(function(){
      $('h3').fadeIn();
    });
    // fadetoggle
    $('#fadetoggle').click(function(){
      $('h3').fadeToggle();
    });

    // jq ui start

    // draggable
    $( "#draggable" ).draggable();
    // accordion
    $( "#accordion" ).accordion({
      collapsible: true
    });
    // autocomplete
    var availableColors = [
      "red",
      "green",
      "blue",
      "puple",
      "black",
      "yellow",
      "pink",
      "white",
      "orange",
      "violet"
    ];
    $( "#colors" ).autocomplete({
      source: availableColors
    });
    // resizable
    $( "#resizable" ).resizable();

    // selectable
    $( "#selectable" ).selectable();
    // datepicker
    $( "#datepicker" ).datepicker();
    // dialogue
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });




    // effect
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
 
      // Run the effect
      $( "#effect" ).show( selectedEffect, options, 500, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
    });
 
    $( "#effect" ).hide();


    // chechboxradio
    $( "input" ).checkboxradio();

    


});