
$(document).ready(function($) {
    function animateElements() {
      $('.progressbar').each(function() {
        var elementPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var percent = $(this).find('.circle').attr('data-percent');
        var percentage = parseInt(percent, 10) / parseInt(100, 10);
        var animate = $(this).data('animate');
        if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
          $(this).data('animate', true);
          $(this).find('.cr1').circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            thickness: 5,
            fill: {
              // color: '#dca6a6'
              color: '#eca7a7'
            }
          }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
          }).stop();
        }
        if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
          $(this).data('animate', true);
          $(this).find('.cr2').circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            thickness: 5,
            fill: {
              color: '#aba6dc'
            }
          }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
          }).stop();
        }
        if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
          $(this).data('animate', true);
          $(this).find('.cr3').circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            thickness: 5,
            fill: {
              color: '#dca6bc'
            }
          }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
          }).stop();
        }
        if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
          $(this).data('animate', true);
          $(this).find('.cr4').circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            thickness: 5,
            fill: {
              color: '#c8dda7'
            }
          }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
          }).stop();
        }
      });
    }
  
    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);
  });

  /** Wow Js Init */
  new WOW().init();