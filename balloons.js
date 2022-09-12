var balloonChecked = false;

$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });
});

// uncheck all checkboxes (FireFox)
$('.form-check-input').each(function () {
    $(this).prop('checked', false);
});

function checkBalloonSelections( balloon ){
    $(balloon).is(':checked') ?
     $('#' + balloon.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
     $('#' + balloon.id + 'Img').addClass('animate__animated animate__bounceOutUp');
};

// event listener for check/uncheck
$('.form-check-input').on('change', function () {
    // make the image visible
    $('#' + this.id + 'Img').css('visibility', 'visible')
    // animate balloon in/out based on checkbox
    checkBalloonSelections( this );
    
    balloonChecked = true;
});


$(document).ready(function() {
    var attentionSeekers = [
        'bounce',
        'flash',
        'pulse',
        'rubberBand',
        'shakeX',
        'shakeY',
        'headShake',
        'swing',
        'tada',
        'wobble',
        'jello',
        'heartBeat'
    ];
    
    var random = Math.floor(Math.random() * attentionSeekers.length);
    var attentionSeeker = attentionSeekers[random];

    $('h1').addClass('animate__animated animate__' + attentionSeeker);
});

$(function(){
    $('#submit').on('click', function(e) {
        e.preventDefault();
        if(!balloonChecked){
            $('#toast').toast({ autohide: false }).toast('show');
            $("#toast").show();
        };
    });
});

$(function(){
    $('#clear').on('click', function(e) {
        e.preventDefault();
        $(".form-check-input").each(function() {
            if ($(".form-check-input").is(':checked')){
                $(".form-check-input").prop('checked', false);
            }
            checkBalloonSelections(this);
          });
          
    });
});

$(function(){
    $('#select-all').on('click', function(e) {
        e.preventDefault();
        $(".form-check-input").each(function(e) {
            $(".form-check-input").prop('checked', true);
            checkBalloonSelections(this);
          });
    });
});

$(document).ready(function(){
    $(".form-check-input").hover(function(){
      $('h1').css("color", this.id);
      }, function(){
      $('h1').css("color", "");
    });
  });