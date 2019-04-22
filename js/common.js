var scrollTop = 0;
$(window).scroll(function(){
scrollTop = $(window).scrollTop();
if (scrollTop >= 250) {
     $('nav').addClass('bg-white shadow');
     $('nav').removeClass('text-white');
     $('.brand').attr('src','assets/logocolor.png').delay(1000)
} else if (scrollTop < 250) {
     $('nav').removeClass('bg-white shadow');
     $('nav').addClass('text-white');
     $('.brand').attr('src','assets/logowhite.png').delay(1000)
}


});
// phone_number
$("input[type=tel]").keyup(function () {
if (this.value.length == this.maxLength) {
     var $next = $(this).next('input[type=tel]');
     if ($next.length)
          $(this).next('input[type=tel]').focus();
     else
          $(this).blur();
}
});

// range
$('#range').on('change', function() {
     $(this).next('#range-value').html(this.value);
});



// duplicate
     $("#duplicate-btn").click(function(){
          $('#duplicate').append($('<input type="file" name="" value="" class="form-control">'));
          var count = $('#duplicate input').length;
          if (count > 1) {
               $('#remove-btn').show();
          };
     });

     $("#remove-btn").click(function(){
          var count = $('#duplicate input').length;
          if (count == 2) {
               $("#remove-btn").hide();
          }
          if (count > 1) {
               $('#duplicate input:last').remove();
          }
     });
